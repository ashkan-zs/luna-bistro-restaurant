import { motion } from "motion/react";
import heroRestaurantImage from "@/assets/images/hero-restaurant.png";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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
          <motion.div variants={fadeUp} className="mb-6">
            <Badge type="overlay" size="normal">
              Established 2012
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-h1 text-5xl md:text-7xl mb-6 text-white"
          >
            Luna Bistro
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="font-body-lg text-white/90 mb-10 leading-relaxed max-w-2xl md:text-xl"
          >
            Where modern elegance meets timeless flavor. Experience a culinary
            journey designed to celebrate the finest local ingredients and
            sophisticated artistry.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button variant="primary" size="large">
              Reserve a Table
            </Button>
            <Button variant="secondary" size="large">
              View Menu
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
