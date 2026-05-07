import { motion } from "motion/react";
import type { MENU_ITEMS } from "@/data/menuItems";
import { fadeUp } from "@/lib/animations";

type MenuItemData = (typeof MENU_ITEMS)[number];

type MenuItemProps = {
  item: MenuItemData;
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow group cursor-pointer flex flex-col"
    >
      <div className="aspect-video overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={item.title}
          src={item.img}
        />
      </div>
      <div className="p-6 flex flex-1 flex-col">
        <div className="mb-2">
          <h3 className="font-h3 text-xl">{item.title}</h3>
        </div>
        <p className="text-on-surface-variant mb-4">{item.desc}</p>
        <div className="mt-auto flex items-end justify-between gap-4">
          {item.tag ? (
            <span
              className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded ${item.tagClass}`}
            >
              {item.tag}
            </span>
          ) : (
            <span aria-hidden="true" />
          )}
          <span className="text-secondary font-label-caps font-light">
            {item.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
