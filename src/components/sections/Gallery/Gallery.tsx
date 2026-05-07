import { motion } from "motion/react";
import galleryAppetizersImage from "@/assets/images/gallery-appetizers.png";
import galleryInteriorImage from "@/assets/images/gallery-interior.png";
import gallerySeafoodPastaImage from "@/assets/images/gallery-seafood-pasta.png";
import galleryWinePouringImage from "@/assets/images/gallery-wine-pouring.png";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function Gallery() {
  return (
    <section id="gallery" className="py-xl relative backdrop-blur-xl bg-white/40 border-y border-white/20 scroll-mt-20">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.div variants={fadeUp} className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Luna Bistro interior" src={galleryInteriorImage} />
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Wine pouring" src={galleryWinePouringImage} />
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Appetizers flat lay" src={galleryAppetizersImage} />
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-2 rounded-xl overflow-hidden shadow-lg h-64 group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Seafood pasta" src={gallerySeafoodPastaImage} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
