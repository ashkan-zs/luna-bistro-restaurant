import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Leaf,
  Utensils,
  Armchair,
  CalendarDays,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Camera,
  Mail,
  Star
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? "bg-surface/90 backdrop-blur-md border-b border-outline-variant py-0 text-on-surface" : "bg-transparent border-transparent py-2 text-white"
    }`}>
      <div className="max-w-container-max mx-auto px-md h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 ${isScrolled ? "text-primary" : "text-white"} transition-colors duration-500`}>
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="font-h3 text-xl font-bold tracking-tight">Luna Bistro</h2>
        </div>
        <nav className="hidden md:flex gap-8">
          {["Menu", "About", "Gallery", "Reviews"].map((item) => (
            <a key={item} className={`font-label-caps uppercase tracking-widest hover:text-secondary transition-colors duration-500 ${isScrolled ? "text-on-surface" : "text-white"}`} href="#">
              {item}
            </a>
          ))}
        </nav>
        <button className={`px-6 py-2 rounded-lg font-label-caps uppercase tracking-widest transition-all duration-500 ${
          isScrolled ? "bg-primary text-on-primary hover:opacity-90" : "bg-white text-black hover:bg-neutral-200"
        }`}>
          Book Now
        </button>
      </div>
    </header>
  );
}

function Hero() {
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
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdWQ5gLQDmI1xqCxmzzScw4Y_M2gWB4QlrMm0eY0tDZWn0NohsPWtoj1l124kQZ-gZvXqmVXFkfAGGXLxsWgWWOPUj2h2khbwnXJ_8wcaW-aw09fl3F8-AMfaF7iHeS-8NTQtsBtr9O6loY-qN56o7S8cTan7CTBrvE1kJkOAIfrU_mTMK2LiEZ22ver5fEca2trVrDtRZ6F1C1JaM4dgHNbr8NGBLgf0qN7nmCv5tKg0NyB1uTbJ7tqGNRu0_khCFII4plzOA2Go" 
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

function About() {
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
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Chef preparing a dish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChvh8TFUErq36B0vR7yIdtPY6ItZbnS6tw0aeORvdbJ_cjjaff_m4DN7txDnBh00PVCmHq4Iehf_fGI1vH5-IDyG4ImdhqLFtO73ojcnJ7bsX6qCXDSg12TOQD9XkxER0JAfC3xPLIDwkSvuiw04z0bgD2ABtyo4VmC-6LmPDfWO-P7KaSCZNFWGk8cLfT__oDk2dMSqissVK38poHMX7fiT3BhC6JUL5Qx8cUvtkCKLRwWpnI3Xbk0sFd7B3nNg3xmqJENX7qv6g" />
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

const MENU_ITEMS = [
  {
    title: "Pan-Seared Salmon",
    price: "$34",
    desc: "Maple glaze, fresh asparagus, and toasted quinoa pilaf.",
    tag: "Gluten Free",
    tagClass: "bg-error-container/20 text-error",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjvE6aYgL94U10lTW86WhKeA-QqisNR5i1G8KmV3XW8KEhVfnUe57jHBqxLa1s3tFjdR6TiFruaJye_Rft3gK-MZ6hCebYMpJtwGqGydKib7KuIg0Kp-_z6MKGS8A3uye60G8-GWWMZEanGoy3OMFzwWfLVmz2k70Lm7QMTRzr9wFQJK_4eSlCsz4phW-erS8H-ectWhROzzP8KUC63nPxWOOsVldhKH-IS3K51wvibsL0dxyOoPFPfslO1c90W-qQHuPXDgicIDo"
  },
  {
    title: "Truffle Risotto",
    price: "$28",
    desc: "Wild mushrooms, parmesan reggiano, and black truffle oil.",
    tag: "Vegetarian",
    tagClass: "bg-secondary-container/50 text-on-secondary-container",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfDF9-Tb6lltGet2dd84gqZtr-Pipt-cbkFShd8EZ93SWJZM-kSPEiYHbnLsZjQNcrvaQ-GCOA2Vc_2JMdczZKxQSZ4_9iAS1AJtKU9_v00mrTr-zOOMFc9g1WaqXI7tv3LKTc0h4iaQSZ0ip-C_T3Lix4HlsvQM_7rN0N1yj0irOSwfbbef7C3tJ2fuayLM6aQjvxj8mzfkMhPJQxuLB2XBTIVVFDomgf1aiPA8FV9S-MEmW_06-oAsQa90ypfnhch3Ezidk1OBw"
  },
  {
    title: "Wagyu Ribeye",
    price: "$65",
    desc: "Marbled premium beef served with garlic confit and herb butter.",
    tag: "Premium",
    tagClass: "bg-primary-container text-on-primary-container",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeJ2U_048MvQx3Ee2SYQiqlvvMSWij-F-lf46m2oH1B2HE_jeXAFJW3nIvaNwSaQcNnhSQG0crEiaLACyRwgs2FXmnATpKjsnFDhLX_XvqKcBl0cXRtRM32QhRV2eA9mI_LCHX1WpB-bier3jfNSILvI1K0VNPh4Z40R2Aj_5ScNZx7HS5r5S8eKtvmnBuPIGVmmQjXqljT2GrdDRKU1yyQ6Jv02dsqw2PgQSzSs8aM1R1_ZlOepUFhXez2jOaLeaT42Frmb8p6Fg"
  },
  {
    title: "Herb Lamb",
    price: "$42",
    desc: "Rosemary jus, baby carrots, and minted pea puree.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAF_aNZzpEIYM-fMzTX4Ljlx763dSoYsE9EOoqVT78UmnkxqawHPO_EPqWaXQ6pvfkZFf-RTrsoMbjKrj-pomYTYvMjSg56Spn1d1KSG0KdJkNMhbauFyCMhX8_uRabJSe5rNEed6pgSe05g8BFLxh9JPtfFslSgZYwbahfqx945mwxS0NBbS6BVCm230u4cDUrnlHgSo4BOkhHlQkOy2cP2MyonJhlRZu5P8pJe3c2sz1-vDpLUmPyz6AB_qjRgPWuYwSvRplZfzM"
  },
  {
    title: "Burrata Salad",
    price: "$18",
    desc: "Heirloom tomatoes, balsamic glaze, and extra virgin olive oil.",
    tag: "Vegetarian",
    tagClass: "bg-secondary-container/50 text-on-secondary-container",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtWpjmkL3v56uqLNvCNSkGAIW1Gk3_ajVg-FJpVUqiO7hOBtNt8ngCrNwsQQ1-hZgxV7OU_qzDNPMtobLYFgy-M9AFfEstq4FYIC3oez4nEekE52TEZYl6iTqD_qkOuW1FblyCZi_Qvn9V_4v6twBwUrGhcThd87cDlyGeIZGcqi86cNwZM138OI6kJJT7ygdISSnH4sAuNUKHABXUEk1NmMbhdnJZSFcS5vACWJCjgLAXrBnwPdiyuIFpn0-7rh_eFVeLrIeoCNg"
  },
  {
    title: "Chocolate Fondant",
    price: "$14",
    desc: "Warm molten center, sea salt, and house-made vanilla bean gelato.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnDzFdY7Q5so20UWlIf-5HDgdRSX8YcvEu9rMuhysY7TKyfFhQksoJcBP0XVkPDpU9Dod6C7IW2M0M3hhSrsTo7ZLW20nhgozub0t23UMwLPUkOZniEF1sRtNH_ExYoK3bRrqrvxljF3dw0cMJFNXgCJVzsRgGQ5IIiWQVPzAqYzz0LtrfqqKlOdKhqz4caWP2BKM1fbky-sAWZA5mkzmi4zyJpWijkSS6pVkkpC4ruNpOtqYzfSPRaz1cHCy_S1XnBZovVaj480o"
  }
];

function Menu() {
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

const FEATURES = [
  { icon: Leaf, title: "Fresh Ingredients", text: "Directly sourced from organic local farms every single morning." },
  { icon: Utensils, title: "Expert Chefs", text: "Our culinary team brings decades of Michelin-star experience." },
  { icon: Armchair, title: "Cozy Atmosphere", text: "An elegant space designed for intimate dinners and celebrations." },
  { icon: CalendarDays, title: "Fast Reservation", text: "Book your perfect table in seconds with our seamless online system." }
];

function Features() {
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

function Gallery() {
  return (
    <section className="py-xl relative backdrop-blur-xl bg-white/40 border-y border-white/20">
      <div className="max-w-container-max mx-auto px-md">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <motion.div variants={fadeUp} className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Luna Bistro interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtNhjU63GHyz2t1hQObXho6SIlbQiVExbeFGOHdQmLi2QNGbFgfCTEp96BfG7Mc_gRsbahAERz1bP1uBIyimuzuCJ_MJs6606aHyONgmskaps2_bWTNS4RyKkvjAnBNBdBai_CfFpMhKNPgoi3hXa6KT3lLPsQDQK_r80ewYzpz1Z2-swZG6QpJy5nVhNIkNU5ywq7eK3uqR-g4pEQm9eL-7aGG9PPW5FYcnvQ1b8m1tTtgDqLy_0Hutz98oNbkeSGGDnkSKivBUs" />
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Wine pouring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMOulSyiaJ3AW4V_bkSFUMwgErtx6uBKhMzItQ4OqMllBD5cfZ3P0av9FRra38otyg215_cLpBjItgP28JnGirXP3W9G_-u5Mw4dufYlzGZijj48z7w-0eH3Cm792E_psFCZMw4qbIz7aajOKX6xcCnu8_NWgshgpR0YdN9zMKlPStC0vhEzrZKTyPRUIxrzE0nZS6_V29jMR22juUqpyzRR2GlmxPb2QuPE9jM0y4dq-HhWFUfRROxU7hZcYRpLgt0VOfJ2ExAMk" />
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Appetizers flat lay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACaGtQjbYxwdFFJp7rKn26Dt75iRDAm_GlWlyYS8NykyUQzkdPdONxVTA-4lTww6JbuWsnpT0Nfz9lYe9TpknZoqCLiOPIT0U5fpeNhcqHHcOQ2jGBhPzESQWyWdATo1Mxmrg-KKFpjEZ6owpDlnryFMjv7yTGpCdjJAjqRuJlMcOxkT2Jp39JoWlcEGtsmqWzyw9XgO_bjlXg7fu_ZxnmD4Yyl4eqcvGeHy9jGUoMiLwpKKuvNDnqWqDdO6BU7ZYNuFUzIE-smDU" />
          </motion.div>
          <motion.div variants={fadeUp} className="col-span-2 rounded-xl overflow-hidden shadow-lg h-64 group">
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Seafood pasta" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFofhw4RRArHkvNyatRbW2Wtx1m38quHCXMkVKrV7kz0dPfhhLi4LAn470ozSFHvF7F_J0LmlJK02PE6uFNsu2uKitbi5JzL5XW_sKPrA4nbwUyRG9PcSmEHfIzDaralQf3fZTg_-5Z_FDQXUU0YyhGNvfDeuAUOY9L0Z3cqDJP6dmuL_S3RNcxqhWOGMJfCPOgzj6Ztd-6xTU8eo_1hA3_MPE8YfLCm59ucBPT6vGtCiYR0i7G4cdSHYLLuHJsOJHFViCe3FgArA" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const REVIEWS = [
  {
    text: "The truffle risotto was life-changing. Every bite was a perfect balance of flavor. The atmosphere is just so welcoming and sophisticated.",
    name: "Sarah Jenkins", role: "Food Critic",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA0v9CQ3jHGcAgE9plQJPohRpXeO0e5sTdSEc5_hwGwvRFTpsnEf6m3ZzYEpQwdkyCQNF80KYrbo-icDIh_bNwE4hnv-XE3YG5BgoNHUrjtLv5CCTDGPhLhm9l3Gajdq_II7F7n0t54Dj6dfJlHf42VK7PRmE5zykNxKfpebcEAJl6xcxWK1Ocb_1WN-ILe0389TMww91iDtos4LjzQ2yO3kH_U7XPnz-Kuhi0eoUHbjMKAeWATdlhtEzU0OU06EwekBX_KQs61lE"
  },
  {
    text: "Perfect for our anniversary. The service was impeccable, and the wine selection is top-notch. Truly a gem in the city center.",
    name: "Michael Thorne", role: "Regular Guest",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzxzY80wm9fYEn0C4aH2uGb7XHMetVtcnZ0Ry-iuK66IW3qZ17AL5dWNaXuunXm3LiDgH3FwG7xNLQtVjqk1V_Vc3SY3u2qHhFpdpowaIrzqms4ymYtm3NF3LToKa4by5GXqvVbVtgHrDhj-IpNP93VdomqDQtvn22aKZEk5or0jeT40ckDKEJalS8aB9DtoSNUZZ8BwUBfQmLY2k7RfYB98MWvV6uLvUy75TSmgkMuZnXxNh4_mhQBUWro8h3f6fMqQkeFUywnGM"
  },
  {
    text: "Modern, elegant, and delicious. The attention to detail in the presentation of every dish is remarkable. Highly recommend the Wagyu.",
    name: "Elena Rodriguez", role: "Travel Blogger",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCAKgeaSb6oopVE7O4ov0c9xKNeFZQvVMbRUl_BmIc_j51DhmpZPplHjjzVJLbf_15rbWJeHADHLWL4al2ThnJUHTKFV3Jd0GQEwfYyRb_cVIrg83sFdFzN4nGWcOLiIpc2nz1S7H4saz6ZY47mnLKVfufMrNmAWtXefpdpTpAMowGwNhZanoCEqmPEzALUMdRE12-f7OR3cexcjWjgyyrRSo6TY5_ZP_N8fgt5H6I1nu3B35LM8yg2YlrOiQq5gvTBChka9FHil4A"
  }
];

function Testimonials() {
  return (
    <section className="py-xl bg-surface-container">
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

function CTA() {
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
            <img className="w-full h-full object-cover" alt="Wine bottle bg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjMkExpmJ9BGlGmwLTSEe_EVBtcE5AZHNJaR3TEyrVTYA6p46d4g6vxa2FQhkYwZa1FvWCecmPWr9z6leCuSuFLlikS6pEeLErQ8zq3RCHHCaUJtxFnmHGcSV3felHPKKXZvlk9nRKqJm5KXohx9rpRblLI2rEhWeWGLuTqThP5w8PsnThjFVLMBHjRvcC2_qjqczfjdcDalTasFZR94QMI5btM_M7X4gUtagrzNXcTAKN67QF-l7hfB-3J8vbVVDuqheidgThmFA" />
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

function Contact() {
  return (
    <section className="py-xl bg-surface">
      <div className="max-w-container-max mx-auto px-md">
        <div className="grid lg:grid-cols-3 gap-xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h2 className="font-h2 text-3xl mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <MapPin className="text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-bold mb-1">Our Location</h5>
                  <p className="text-on-surface-variant">123 Culinary Way, Downtown District<br/>Manhattan, NY 10012</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <Phone className="text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-bold mb-1">Phone Number</h5>
                  <p className="text-on-surface-variant">+1 (212) 555-0198</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <Clock className="text-secondary group-hover:scale-110 transition-transform" />
                <div>
                  <h5 className="font-bold mb-1">Opening Hours</h5>
                  <p className="text-on-surface-variant">Tue - Thu: 5:00 PM - 10:00 PM</p>
                  <p className="text-on-surface-variant">Fri - Sat: 5:00 PM - 11:30 PM</p>
                  <p className="text-on-surface-variant">Sun: 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="w-full h-full min-h-[400px] bg-surface-container rounded-xl overflow-hidden shadow-inner relative">
              <div className="absolute inset-0 bg-neutral-200">
                <img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Map View" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp3u3U0lj5Ujw_tQqNuag5PRRWI0O6FeyPnKeae_WNgY4ZpYLm4--9Vfcfs64xmSzP0wgvRNIsrigwtqbAqVeC3Kf44XriH6_kIMbIdF4InV6EZfa5PYupDU_KC3Ml6_gnHENQKPBNP-chQldO2103m7_KSQfi4SZV_kgKTqjaLhcjWnXi8p2XuoAkhAg8dit3DutUgjsiP5RIzYp84UYfQ8rNYm414qUop7MOtlDTV5JG_NumDYLyCZJd6fwSCU4s2jPmhyn5U-M" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-surface p-4 rounded-xl shadow-xl flex items-center gap-3 border border-outline-variant"
                  >
                    <div className="w-10 h-10 bg-primary text-on-primary rounded-lg flex items-center justify-center">
                      <Utensils size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Luna Bistro</h4>
                      <p className="text-xs text-on-surface-variant">Find your way to us</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-container-highest py-xl border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-md">
        <div className="flex flex-col md:flex-row justify-between items-center gap-md border-b border-outline-variant pb-md mb-md">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="font-h3 text-lg font-bold tracking-tight">Luna Bistro</h2>
          </div>
          <div className="flex gap-8">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Instagram /></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Camera /></a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><Mail /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant font-label-caps uppercase tracking-widest">
          <p>© 2026 Luna Bistro. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="text-on-background font-body-md selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-10 shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
          <About />
          <Menu />
          <Features />
          <Gallery />
          <Testimonials />
          <CTA />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
