import { motion } from "motion/react";
import { FEATURES } from "@/data/features";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Features() {
  return (
    <section className="py-xl bg-surface-container-highest">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-md"
        >
          {FEATURES.map((feat, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center p-6 bg-surface-container rounded-xl hover:bg-white transition-colors cursor-default">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container">
                <feat.icon size={24} />
              </div>
              <h4 className="font-h3 text-lg mb-2">{feat.title}</h4>
              <p className="text-on-surface-variant text-sm">{feat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
