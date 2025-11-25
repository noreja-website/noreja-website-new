import { useEffect, useRef, useState, useCallback } from "react";

// HubSpot form configuration
const HUBSPOT_SCRIPT_SRC = "https://js-eu1.hsforms.net/forms/embed/v2.js";
const DEFAULT_REGION = "eu1";
const DEFAULT_PORTAL_ID = "144242473";
const DEFAULT_FORM_ID = "cba179f6-530c-43a4-9d41-4bc0a459953b";

// TypeScript declarations for HubSpot and dataLayer
declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create?: (config: HubSpotFormConfig) => void;
      };
    };
    dataLayer?: Array<Record<string, unknown>>;
  }
}

interface HubSpotFormConfig {
  region: string;
  portalId: string;
  formId: string;
  target: string;
  onFormSubmit?: () => void;
  onFormReady?: () => void;
  onFormError?: (error?: unknown) => void;
  [key: string]: unknown;
}

interface UseHubSpotFormOptions {
  portalId?: string;
  formId?: string;
  region?: string;
  targetId?: string;
  enabled?: boolean;
  onFormSubmit?: () => void;
  onFormReady?: () => void;
  onFormError?: () => void;
  trackAnalytics?: boolean;
  analyticsSource?: string;
}

interface UseHubSpotFormReturn {
  formLoaded: boolean;
  formError: boolean;
  formTargetId: string;
  createForm: () => void;
  destroyForm: () => void;
}

/**
 * Reusable hook for HubSpot form integration with v2 API
 * 
 * Features:
 * - Loads HubSpot v2 script once globally
 * - Creates form instances safely
 * - Tracks analytics via dataLayer on successful submission
 * - Prevents duplicate form instances
 * - Handles cleanup on unmount
 */
export function useHubSpotForm({
  portalId = DEFAULT_PORTAL_ID,
  formId = DEFAULT_FORM_ID,
  region = DEFAULT_REGION,
  targetId,
  enabled = true,
  onFormSubmit,
  onFormReady,
  onFormError,
  trackAnalytics = true,
  analyticsSource = "download_page",
}: UseHubSpotFormOptions = {}): UseHubSpotFormReturn {
  const [formLoaded, setFormLoaded] = useState(false);
  const [formError, setFormError] = useState(false);
  
  // Generate stable target ID
  const formTargetIdRef = useRef<string>(
    targetId ?? `hubspot-form-${Math.random().toString(36).slice(2, 10)}`
  );
  const formTargetId = formTargetIdRef.current;
  
  // Track if form instance exists to prevent duplicates
  const formInstanceRef = useRef<boolean>(false);
  
  // Track script loading promise to avoid multiple loads
  const scriptLoadPromiseRef = useRef<Promise<void> | null>(null);
  
  // Track if form has been submitted to prevent duplicate submissions
  const formSubmittedRef = useRef<boolean>(false);
  
  // Use refs for callbacks to prevent unnecessary recreations
  const onFormSubmitRef = useRef(onFormSubmit);
  const onFormReadyRef = useRef(onFormReady);
  const onFormErrorRef = useRef(onFormError);
  
  // Update refs when callbacks change
  useEffect(() => {
    onFormSubmitRef.current = onFormSubmit;
    onFormReadyRef.current = onFormReady;
    onFormErrorRef.current = onFormError;
  }, [onFormSubmit, onFormReady, onFormError]);

  /**
   * Load HubSpot v2 script globally (only once)
   */
  const loadHubSpotScript = useCallback((): Promise<void> => {
    // Return existing promise if script is already loading
    if (scriptLoadPromiseRef.current) {
      return scriptLoadPromiseRef.current;
    }

    // Check if script is already loaded
    const hbspt = window.hbspt;
    if (hbspt?.forms?.create) {
      const resolvedPromise = Promise.resolve();
      scriptLoadPromiseRef.current = resolvedPromise;
      return resolvedPromise;
    }

    // Check if script tag already exists
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${HUBSPOT_SCRIPT_SRC}"]`
    );

    if (existingScript) {
      // Script exists but not loaded yet, wait for it
      const promise = new Promise<void>((resolve, reject) => {
        const handleLoad = () => {
          resolve();
          existingScript.removeEventListener("load", handleLoad);
          existingScript.removeEventListener("error", handleError);
        };
        const handleError = () => {
          reject(new Error("Failed to load HubSpot form script"));
          existingScript.removeEventListener("load", handleLoad);
          existingScript.removeEventListener("error", handleError);
        };
        existingScript.addEventListener("load", handleLoad, { once: true });
        existingScript.addEventListener("error", handleError, { once: true });
      });
      scriptLoadPromiseRef.current = promise;
      return promise;
    }

    // Create and load script
    const promise = new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = HUBSPOT_SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.charset = "utf-8";
      script.type = "text/javascript";

      const handleLoad = () => {
        resolve();
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };
      const handleError = () => {
        reject(new Error("Failed to load HubSpot form script"));
        script.removeEventListener("load", handleLoad);
        script.removeEventListener("error", handleError);
      };

      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener("error", handleError, { once: true });
      document.head.appendChild(script);
    });

    scriptLoadPromiseRef.current = promise;
    return promise;
  }, []);

  /**
   * Track form submission to dataLayer for analytics
   */
  const trackFormSubmission = useCallback(() => {
    if (!trackAnalytics) return;

    // Initialize dataLayer if it doesn't exist
    window.dataLayer = window.dataLayer || [];

    // Push analytics event
    window.dataLayer.push({
      event: "hubspot_form_submit",
      formId: formId,
      source: analyticsSource,
    });
  }, [formId, analyticsSource, trackAnalytics]);

  /**
   * Create HubSpot form instance
   */
  const createForm = useCallback(() => {
    if (!enabled) return;
    
    // Prevent duplicate instances - check both ref and actual DOM
    if (formInstanceRef.current) {
      const container = document.getElementById(formTargetId);
      if (container && container.querySelector('form')) {
        // Form already exists, don't create again
        return;
      }
      // Ref says form exists but DOM doesn't - reset ref
      formInstanceRef.current = false;
    }

    const container = document.getElementById(formTargetId);
    if (!container) {
      console.error(`HubSpot form target element #${formTargetId} not found`);
      setFormError(true);
      onFormErrorRef.current?.();
      return;
    }

    // Clear container before creating form
    container.innerHTML = "";
    formInstanceRef.current = false;
    setFormLoaded(false);
    setFormError(false);

    loadHubSpotScript()
      .then(() => {
        const hbspt = window.hbspt;
        if (!hbspt?.forms?.create) {
          throw new Error("HubSpot forms API not available");
        }

        // Double-check container still exists and enabled is still true
        const currentContainer = document.getElementById(formTargetId);
        if (!currentContainer) {
          throw new Error(`Form container #${formTargetId} was removed`);
        }
        
        // Check if form was already created (race condition protection)
        if (currentContainer.querySelector('form')) {
          formInstanceRef.current = true;
          setFormLoaded(true);
          setFormError(false); // Clear error if form already exists
          return;
        }

        // Reset submission flag when creating new form
        formSubmittedRef.current = false;
        
        // Helper function to watch for form submission via DOM changes (fallback detection)
        const startFormSubmissionWatcher = (container: HTMLElement) => {
          // Only set up watcher if form hasn't been submitted yet
          if (formSubmittedRef.current) return;
          
          const observer = new MutationObserver(() => {
            if (formSubmittedRef.current) {
              observer.disconnect();
              return;
            }
            
            // Check for HubSpot success indicators
            const containerText = container.textContent?.toLowerCase() || '';
            const hasSuccessText = 
              containerText.includes('thank') || 
              containerText.includes('success') ||
              containerText.includes('erfolgreich') ||
              containerText.includes('vielen dank') ||
              containerText.includes('danke') ||
              containerText.includes('file can now be accessed') ||
              containerText.includes('zugriff');
            
            // Check for HubSpot success classes
            const hasSuccessClass = 
              container.querySelector('.submitted-message') ||
              container.querySelector('.hs-form-success') ||
              container.querySelector('[class*="success"]') ||
              container.querySelector('[class*="submitted"]');
            
            // Check if form is hidden (HubSpot hides form on success)
            const form = container.querySelector('form');
            const formHidden = form && (
              form.style.display === 'none' || 
              form.getAttribute('style')?.includes('display: none') ||
              window.getComputedStyle(form).display === 'none'
            );
            
            // Check if form element was removed (replaced by success message)
            const formRemoved = !container.querySelector('form') && formInstanceRef.current;
            
            if (hasSuccessText || hasSuccessClass || formHidden || formRemoved) {
              if (!formSubmittedRef.current) {
                formSubmittedRef.current = true;
                
                // Track analytics
                trackFormSubmission();
                
                // Call custom callback
                onFormSubmitRef.current?.();
                
                // Disconnect observer
                observer.disconnect();
              }
            }
          });
          
          // Observe changes to the container
          observer.observe(container, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class'],
            characterData: true
          });
          
          // Cleanup observer after 30 seconds (form should submit much faster)
          setTimeout(() => {
            observer.disconnect();
          }, 30000);
        };
        
        // Create form instance
        hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${formTargetId}`,
          onFormSubmit: () => {
            if (formSubmittedRef.current) return; // Prevent duplicate submissions
            formSubmittedRef.current = true;
            
            // Track analytics
            trackFormSubmission();
            
            // Call custom callback using ref
            onFormSubmitRef.current?.();
          },
          onFormReady: () => {
            formInstanceRef.current = true;
            setFormLoaded(true);
            setFormError(false); // Clear error when form loads successfully
            onFormReadyRef.current?.();
            
            // Start watching for form submission (fallback detection)
            const container = document.getElementById(formTargetId);
            if (container) {
              startFormSubmissionWatcher(container);
            }
          },
          onFormError: (error?: unknown) => {
            console.error("HubSpot form error:", error);
            formInstanceRef.current = false;
            setFormError(true);
            onFormErrorRef.current?.();
          },
        });
        
        // Fallback: Check if form appears in DOM after a delay (in case onFormReady doesn't fire)
        setTimeout(() => {
          const checkContainer = document.getElementById(formTargetId);
          if (checkContainer && checkContainer.querySelector('form') && !formInstanceRef.current) {
            formInstanceRef.current = true;
            setFormLoaded(true);
            setFormError(false); // Clear error if form loaded successfully
            onFormReadyRef.current?.();
            
            // Start watching for form submission (fallback detection)
            startFormSubmissionWatcher(checkContainer);
          }
        }, 2000);
      })
      .catch((error) => {
        console.error("Error loading HubSpot form:", error);
        formInstanceRef.current = false;
        setFormError(true);
        onFormErrorRef.current?.();
      });
  }, [
    enabled,
    formTargetId,
    region,
    portalId,
    formId,
    trackFormSubmission,
    loadHubSpotScript,
  ]);

  /**
   * Destroy form instance (cleanup)
   */
  const destroyForm = useCallback(() => {
    const container = document.getElementById(formTargetId);
    if (container) {
      container.innerHTML = "";
    }
    formInstanceRef.current = false;
    formSubmittedRef.current = false; // Reset submission flag
    setFormLoaded(false);
    setFormError(false);
  }, [formTargetId]);

  // Auto-create form when enabled changes to true
  useEffect(() => {
    if (!enabled) {
      // If disabled, destroy form
      destroyForm();
      return;
    }
    
    // Only create if form doesn't exist
    if (!formInstanceRef.current) {
      // Wait for container to exist (especially important for modals)
      const checkContainer = () => {
        const container = document.getElementById(formTargetId);
        if (container) {
          // Container exists, check if form already loaded
          const existingForm = container.querySelector('form');
          if (existingForm) {
            // Form already exists in DOM, mark as loaded
            formInstanceRef.current = true;
            setFormLoaded(true);
            setFormError(false);
            return;
          }
          
          // Container exists but no form, create form
          if (!formInstanceRef.current) {
            createForm();
          }
        } else {
          // Container doesn't exist yet, check again after a short delay
          setTimeout(checkContainer, 100);
        }
      };
      
      // Start checking after a small initial delay
      const timeoutId = setTimeout(checkContainer, 100);
      
      // Maximum wait time (5 seconds) - only set error if form truly didn't load
      const maxTimeoutId = setTimeout(() => {
        const container = document.getElementById(formTargetId);
        const hasForm = container && container.querySelector('form');
        if (!formInstanceRef.current && !hasForm) {
          console.warn(`HubSpot form container #${formTargetId} not found after 5 seconds`);
          setFormError(true);
          onFormErrorRef.current?.();
        } else if (hasForm) {
          // Form exists, clear any error
          formInstanceRef.current = true;
          setFormLoaded(true);
          setFormError(false);
        }
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(maxTimeoutId);
      };
    }
  }, [enabled, formTargetId, createForm, destroyForm]);
  
  // Monitor form appearance in DOM and clear error if form loads
  useEffect(() => {
    if (!enabled) return;
    
    const checkFormExists = () => {
      const container = document.getElementById(formTargetId);
      const hasForm = container && container.querySelector('form');
      if (hasForm && formError) {
        // Form exists but error is set - clear the error
        setFormError(false);
        formInstanceRef.current = true;
        setFormLoaded(true);
      }
    };
    
    // Check periodically for form appearance
    const intervalId = setInterval(checkFormExists, 500);
    
    // Also check after a delay
    const timeoutId = setTimeout(checkFormExists, 1000);
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [enabled, formTargetId, formError]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      destroyForm();
    };
  }, [destroyForm]);

  return {
    formLoaded,
    formError,
    formTargetId,
    createForm,
    destroyForm,
  };
}

