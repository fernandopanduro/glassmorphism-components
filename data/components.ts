import BadgeExample from "@/components/glassmorphism-example/BadgeExample";
import ButtonExample from "@/components/glassmorphism-example/Button";
import CardExample from "@/components/glassmorphism-example/Card";
import DrawerExample from "@/components/glassmorphism-example/Drawer";
import InputExample from "@/components/glassmorphism-example/Input";
import ModalExample from "@/components/glassmorphism-example/Modal";
import HoverCardExample from "@/components/glassmorphism-example/Modal";
import TooltipExample from "@/components/glassmorphism-example/Tooltip";
import Badge from "@/components/lab/badge/Badge";
import Button from "@/components/lab/button/Button";
import Card from "@/components/lab/card/Card";
import Drawer from "@/components/lab/drawer/Drawer";
import Input from "@/components/lab/input/Input";
import Modal from "@/components/lab/modal/Modal";
import HoverCard from "@/components/lab/modal/Modal";
import Tooltip from "@/components/lab/tooltip/Tooltip";
const TWCONFIG = {
  ["text-gradient"]: {
    animation: {
      "text-gradient": "text-gradient 1.5s linear infinite",
    },
    keyframes: {
      "text-gradient": {
        to: {
          backgroundPosition: "200% center",
        },
      },
    },
  },
  ["background-shine"]: {
    animation: {
      "background-shine": "background-shine 2s linear infinite",
    },
    keyframes: {
      "background-shine": {
        from: { backgroundPosition: "0 0" },
        to: { backgroundPosition: "-200% 0" },
      },
    },
  },
  ["pulse-slow"]: {
    animation: {
      "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
  ["border-width"]: {
    animation: {
      "border-width": "border-width 3s infinite alternate",
    },
    keyframes: {
      "border-width": {
        from: { width: "10px", opacity: "0" },
        to: { width: "100px", opacity: "1" },
      },
    },
  },
};

type ComponentObj = {
  name: string;
  component: any;
  exampleComponent: any;
  slug: string;
  type: string;
  twConfig?: any;
  prevComponent?: string;
  nextComponent?: string;
};

export const COMPONENTS: ComponentObj[] = [
  {
    name: "Button",
    component: Button,
    exampleComponent: ButtonExample,
    slug: "button",
    type: "button",
    twConfig: TWCONFIG["background-shine"],
    nextComponent: "drawer",
  },
  {
    name: "Badge",
    component: Badge,
    exampleComponent: BadgeExample,
    slug: "badge",
    type: "badge",
    prevComponent: "Drawer",
    nextComponent: "Card",
  },
  {
    name: "Card",
    component: Card,
    exampleComponent: CardExample,
    slug: "card",
    type: "card",
    prevComponent: "Badge",
    nextComponent: "Input",
  },
  {
    name: "Input",
    component: Input,
    exampleComponent: InputExample,
    slug: "input",
    type: "input",
    prevComponent: "Card",
    nextComponent: "Tooltip",
  },
  {
    name: "Tooltip",
    component: Tooltip,
    exampleComponent: TooltipExample,
    slug: "tooltip",
    type: "tooltip",
    prevComponent: "Input",
    nextComponent: "Modal",
  },
  // {
  //   name: "Modal",
  //   component: Modal,
  //   exampleComponent: ModalExample,
  //   slug: "modal",
  //   type: "modal",
  //   prevComponent: "Tooltip",
  //   nextComponent: "Drawer",
  // },
  // {
  //   name: "Drawer",
  //   component: Drawer,
  //   exampleComponent: DrawerExample,
  //   slug: "drawer",
  //   type: "drawer",
  //   prevComponent: "Modal",
  // },
];
