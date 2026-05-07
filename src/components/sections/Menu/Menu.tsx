import { motion } from "motion/react";
import { MENU_ITEMS } from "@/data/menuItems";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/Button";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <section id="menu" className="py-xl bg-surface-container-low scroll-mt-20">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="font-h2 text-4xl mb-4">
            Seasonal Specials
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-body-lg text-on-surface-variant max-w-2xl mx-auto"
          >
            Hand-crafted favorites using the freshest seasonal ingredients
            available this week.
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
            <MenuItem key={idx} item={item} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="medium">
            Explore Full Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
