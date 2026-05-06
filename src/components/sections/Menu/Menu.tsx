import { motion } from "motion/react";
import { MENU_ITEMS } from "@/data/menuItems";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Menu() {
  return (
    <section className="py-xl bg-surface-container-low">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="font-h2 text-4xl mb-4">Seasonal Specials</motion.h2>
          <motion.p variants={fadeUp} className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Hand-crafted favorites using the freshest seasonal ingredients available this week.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-md"
        >
          {MENU_ITEMS.map((item, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer block">
              <div className="aspect-square overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.title} src={item.img} />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-h3 text-xl">{item.title}</h3>
                  <span className="font-bold text-secondary-container bg-secondary px-3 py-1 rounded-full text-xs">{item.price}</span>
                </div>
                <p className="text-on-surface-variant mb-4">{item.desc}</p>
                {item.tag && (
                  <div className="flex gap-2">
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded ${item.tagClass}`}>
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="bg-transparent border-2 border-primary text-primary px-10 py-3 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all">
            Explore Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
