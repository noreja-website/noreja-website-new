import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import mainAnimation from "@/assets/animation/main_animation_transparent.webm";

export function PlaceholderImageSection() {
  const { t } = useLanguage();

  return (
    <section className="h-[650px] lg:h-[750px] overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto h-full flex items-center justify-center"
        >
          {/* Video animation */}
          <div className="relative w-full h-full">
            <video
              src={mainAnimation}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
