import type { BadgeType } from "@/components/ui/Badge";
import burrataSaladImage from "../assets/images/menu-burrata-salad.png";
import chocolateFondantImage from "../assets/images/menu-chocolate-fondant.png";
import herbLambImage from "../assets/images/menu-herb-lamb.png";
import panSearedSalmonImage from "../assets/images/menu-pan-seared-salmon.png";
import truffleRisottoImage from "../assets/images/menu-truffle-risotto.png";
import wagyuRibeyeImage from "../assets/images/menu-wagyu-ribeye.png";

type MenuItem = {
  title: string;
  price: string;
  desc: string;
  img: string;
  tag?: string;
  badgeType?: BadgeType;
};

export const MENU_ITEMS: MenuItem[] = [
  {
    title: "Pan-Seared Salmon",
    price: "$34",
    desc: "Maple glaze, fresh asparagus, and toasted quinoa pilaf.",
    tag: "Gluten Free",
    badgeType: "error",
    img: panSearedSalmonImage
  },
  {
    title: "Truffle Risotto",
    price: "$28",
    desc: "Wild mushrooms, parmesan reggiano, and black truffle oil.",
    tag: "Vegetarian",
    badgeType: "secondary",
    img: truffleRisottoImage
  },
  {
    title: "Wagyu Ribeye",
    price: "$65",
    desc: "Marbled premium beef served with garlic confit and herb butter.",
    tag: "Premium",
    badgeType: "primary",
    img: wagyuRibeyeImage
  },
  {
    title: "Herb Lamb",
    price: "$42",
    desc: "Rosemary jus, baby carrots, and minted pea puree.",
    img: herbLambImage
  },
  {
    title: "Burrata Salad",
    price: "$18",
    desc: "Heirloom tomatoes, balsamic glaze, and extra virgin olive oil.",
    tag: "Vegetarian",
    badgeType: "secondary",
    img: burrataSaladImage
  },
  {
    title: "Chocolate Fondant",
    price: "$14",
    desc: "Warm molten center, sea salt, and house-made vanilla bean gelato.",
    img: chocolateFondantImage
  }
];
