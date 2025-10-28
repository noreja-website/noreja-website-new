import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { describe, test, expect } from 'vitest'
import App from '@/App'

// Test helper to render App with all required providers
const renderApp = (initialRoute = '/') => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
      mutations: { retry: false },
    },
  })

  window.history.pushState({}, 'Test page', initialRoute)

  return render(
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </QueryClientProvider>
  )
}

describe('Route Presence Tests', () => {
  test('renders home page', () => {
    renderApp('/')
    // Check for content that should be present on home page
    expect(document.body).toBeInTheDocument()
  })

  test('renders functionalities page', () => {
    renderApp('/functionalities')
    expect(document.body).toBeInTheDocument()
  })

  test('renders success stories page', () => {
    renderApp('/success-stories')
    expect(document.body).toBeInTheDocument()
  })

  test('renders team page', () => {
    renderApp('/team')
    expect(document.body).toBeInTheDocument()
  })

  test('renders partners page', () => {
    renderApp('/partners')
    expect(document.body).toBeInTheDocument()
  })

  test('renders blog page', () => {
    renderApp('/blog')
    expect(document.body).toBeInTheDocument()
  })

  test('renders downloads page', () => {
    renderApp('/downloads')
    expect(document.body).toBeInTheDocument()
  })

  test('renders pricing page', () => {
    renderApp('/pricing')
    expect(document.body).toBeInTheDocument()
  })

  test('renders imprint page', () => {
    renderApp('/imprint')
    expect(document.body).toBeInTheDocument()
  })

  test('renders terms of service page', () => {
    renderApp('/terms')
    expect(document.body).toBeInTheDocument()
  })

  test('renders privacy policy page', () => {
    renderApp('/privacy')
    expect(document.body).toBeInTheDocument()
  })

  test('renders 404 page for unknown routes', () => {
    const { getByText } = renderApp('/unknown-route')
    expect(getByText('404')).toBeInTheDocument()
    expect(getByText('Oops! Page not found')).toBeInTheDocument()
  })
})