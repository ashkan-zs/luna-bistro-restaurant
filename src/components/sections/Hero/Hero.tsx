import { motion } from "motion/react";
import heroRestaurantImage from "@/assets/images/hero-restaurant.png";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full object-cover"
          alt="Luna Bistro culinary journey"
          src={heroRestaurantImage}
        />
      </div>
      <div className="relative z-20 max-w-container-max mx-auto px-md w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp} className="font-label-caps text-secondary-container bg-secondary/50 px-3 py-1 rounded-full uppercase tracking-widest mb-6 inline-block">
            Established 2012
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-h1 text-5xl md:text-7xl mb-6 text-white">
            Luna Bistro
          </motion.h1>
          <motion.p variants={fadeUp} className="font-body-lg text-white/90 mb-10 leading-relaxed max-w-2xl md:text-xl">
            Where modern elegance meets timeless flavor. Experience a culinary journey designed to celebrate the finest local ingredients and sophisticated artistry.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button className="bg-white text-black h-14 px-8 rounded-lg font-bold text-lg hover:shadow-xl hover:bg-neutral-100 transition-all flex items-center gap-2">
              Reserve a Table
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white h-14 px-8 rounded-lg font-bold text-lg hover:bg-white/20 transition-all">
              View Menu
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
