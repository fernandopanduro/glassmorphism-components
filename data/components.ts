import BadgeExample from "@/components/glassmorphism-example/BadgeExample";
import ButtonExample from "@/components/glassmorphism-example/Button";
import CardExample from "@/components/glassmorphism-example/Card";
import DrawerExample from "@/components/glassmorphism-example/Drawer";
import InputExample from "@/components/glassmorphism-example/Input";
import ModalExample from "@/components/glassmorphism-example/Modal";
import HoverCardExample from "@/components/glassmorphism-example/Modal";
import TooltipExample from "@/components/glassmorphism-example/Tooltip";
import Badge from "@/components/lab/Badge";
import Button from "@/components/lab/button/Button";
import Card from "@/components/lab/Card";
import Drawer from "@/components/lab/Drawer";
import Input from "@/components/lab/Input";
import Modal from "@/components/lab/Modal";
import HoverCard from "@/components/lab/Modal";
import Tooltip from "@/components/lab/Tooltip";
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
  exampleComponent?: any;
  prevComponent?: string;
  nextComponent?: string;
};

export const COMPONENTS = [
  {
    name: "Button",
    component: Button,
    slug: "button",
    type: "button",
    twConfig: TWCONFIG["background-shine"],
    nextComponent: "drawer",
    prevComponent: null,
  },
];

const components: ComponentObj[] = [
  {
    name: "button",
    component: Button,
    exampleComponent: ButtonExample,
    nextComponent: "drawer",
  },
  {
    name: "drawer",
    component: Drawer,
    exampleComponent: DrawerExample,
    nextComponent: "modal",
    prevComponent: "button",
  },
  {
    name: "modal",
    component: Modal,
    exampleComponent: ModalExample,
    nextComponent: "tooltip",
    prevComponent: "drawer",
  },
  {
    name: "tooltip",
    component: Tooltip,
    exampleComponent: TooltipExample,
    nextComponent: "input",
    prevComponent: "modal",
  },
  {
    name: "input",
    component: Input,
    exampleComponent: InputExample,
    nextComponent: "badge",
    prevComponent: "tooltip",
  },
  {
    name: "badge",
    component: Badge,
    exampleComponent: BadgeExample,
    prevComponent: "input",
    nextComponent: "card",
  },
  {
    name: "card",
    component: Card,
    exampleComponent: CardExample,
    prevComponent: "badge",
  },
];

export default components;
