import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/noreja_logo_white.png";
import marmot from "@/assets/maintenance/marmot.png";

const Maintenance = () => {
  const { t } = useLanguage();

  // Tool colors: white background, blue header, darker blue accents
  const toolHeaderBlue = "#452BE9"; // Main blue for header
  const toolDarkerBlue = "#221096"; // Darker blue for accents
  const toolAccentBlue = "#4569E7"; // Light blue accent
  const textColorDark = "hsl(220, 30%, 15%)"; // Dark text for white background
  const textColorMuted = "hsl(220, 10%, 40%)"; // Muted text color

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Blue Header */}
      <header 
        className="w-full py-4 px-6 md:px-8"
        style={{ backgroundColor: toolHeaderBlue }}
      >
        <div className="container mx-auto flex items-center">
          <motion.img
            src={logo}
            alt="Noreja Logo"
            className="h-8 md:h-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </header>

      {/* Main content area */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-2xl mx-auto w-full"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
            {/* Marmot image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <motion.img
                src={marmot}
                alt="Maintenance Marmot"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-center mb-4"
              style={{ color: textColorDark }}
            >
              {t.maintenance.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl text-center mb-6"
              style={{ color: textColorMuted }}
            >
              {t.maintenance.subtitle}
            </motion.p>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-base md:text-lg text-center mb-8 leading-relaxed"
              style={{ color: textColorMuted }}
            >
              {t.maintenance.message}
            </motion.p>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1 mx-auto rounded-full mb-8 max-w-xs"
              style={{
                background: `linear-gradient(90deg, transparent, ${toolHeaderBlue}, ${toolDarkerBlue}, transparent)`,
              }}
            />

            {/* Animated dots */}
            <motion.div
              className="flex justify-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: toolHeaderBlue }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Maintenance;

