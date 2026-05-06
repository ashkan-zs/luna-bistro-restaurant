import { motion } from "motion/react";
import ctaWineBottleImage from "@/assets/images/cta-wine-bottle.png";

export default function CTA() {
  return (
    <section className="py-xl relative backdrop-blur-xl bg-white/40 border-y border-white/20">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-primary text-on-primary rounded-xl overflow-hidden p-xl flex flex-col items-center text-center"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img className="w-full h-full object-cover" alt="Wine bottle bg" src={ctaWineBottleImage} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-h2 text-4xl md:text-5xl mb-6">Join Us for an Unforgettable Dining Experience</h2>
            <p className="font-body-lg mb-10 opacity-90">Tables are filling up quickly for the weekend. Secure your reservation now to guarantee your spot at Luna Bistro.</p>
            <button className="bg-surface text-primary h-14 px-12 rounded-lg font-bold text-lg hover:scale-105 transition-transform">
              Book Your Table Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
