import { motion } from "motion/react";
import { Star } from "lucide-react";
import { REVIEWS } from "@/data/reviews";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-xl bg-surface-container scroll-mt-20">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-h2 text-4xl mb-4">Guest Experiences</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-md"
        >
          {REVIEWS.map((rev, i) => (
            <motion.div key={i} variants={fadeUp} className="bg-surface p-8 rounded-xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
              <div className="flex gap-1 mb-4 text-tertiary">
                {[...Array(5)].map((_, idx) => <Star key={idx} fill="currentColor" size={18} />)}
              </div>
              <p className="font-body-md text-on-surface mb-6 italic">"{rev.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
                  <img className="w-full h-full object-cover" alt={rev.name} src={rev.img} />
                </div>
                <div>
                  <h5 className="font-bold text-sm">{rev.name}</h5>
                  <p className="text-xs text-on-surface-variant">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
