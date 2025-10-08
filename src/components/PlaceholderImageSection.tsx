import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function PlaceholderImageSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Placeholder for image */}
          <div className="relative mb-8">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Placeholder Image</p>
                <p className="text-xs text-muted-foreground/70 mt-1">Replace with actual content</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Your Content
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Here</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              This is a placeholder section where you can add your custom content, 
              images, or components. Replace this with your actual content when ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Call to Action
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
