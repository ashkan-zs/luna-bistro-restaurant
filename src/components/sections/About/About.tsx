import { motion } from "motion/react";
import aboutChefImage from "@/assets/images/about-chef.png";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function About() {
  return (
    <section className="py-xl bg-surface">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid md:grid-cols-2 gap-xl items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Chef preparing a dish" src={aboutChefImage} />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary-container rounded-xl items-center justify-center p-8 hidden lg:flex">
              <p className="font-h3 text-on-secondary-container text-center italic text-lg">"The secret is in the simplicity."</p>
            </div>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span variants={fadeUp} className="font-label-caps text-on-primary-container uppercase tracking-widest mb-4 block">Our Story</motion.span>
            <motion.h2 variants={fadeUp} className="font-h2 text-4xl md:text-5xl mb-6">Culinary Excellence in Every Detail</motion.h2>
            <motion.p variants={fadeUp} className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
              At Luna Bistro, we believe that dining is more than just a meal—it's an experience of the senses. Our journey began with a simple vision: to combine traditional cooking techniques with contemporary culinary innovation.
            </motion.p>
            <motion.p variants={fadeUp} className="font-body-lg text-on-surface-variant mb-8 leading-relaxed">
              We source our produce from local farmers who share our passion for quality and sustainability, ensuring that every ingredient on your plate is at its peak of flavor.
            </motion.p>
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-md border-t border-outline-variant pt-8">
              <div>
                <h4 className="font-h3 text-xl mb-2 text-primary">85+</h4>
                <p className="text-sm uppercase tracking-tighter text-on-surface-variant">Signature Dishes</p>
              </div>
              <div>
                <h4 className="font-h3 text-xl mb-2 text-primary">12</h4>
                <p className="text-sm uppercase tracking-tighter text-on-surface-variant">Local Suppliers</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
