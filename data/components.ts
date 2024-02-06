import BadgeExample from "@/components/glassmorphism-example/BadgeExample";
import ButtonExample from "@/components/glassmorphism-example/Button";
import CardExample from "@/components/glassmorphism-example/Card";
import DrawerExample from "@/components/glassmorphism-example/Drawer";
import InputExample from "@/components/glassmorphism-example/Input";
import ModalExample from "@/components/glassmorphism-example/Modal";
import HoverCardExample from "@/components/glassmorphism-example/Modal";
import TooltipExample from "@/components/glassmorphism-example/Tooltip";
import Badge from "@/components/glassmorphism/Badge";
import Button from "@/components/glassmorphism/Button";
import Card from "@/components/glassmorphism/Card";
import Drawer from "@/components/glassmorphism/Drawer";
import Input from "@/components/glassmorphism/Input";
import Modal from "@/components/glassmorphism/Modal";
import HoverCard from "@/components/glassmorphism/Modal";
import Tooltip from "@/components/glassmorphism/Tooltip";

type ComponentObj = {
  name: string;
  component: any;
  exampleComponent?: any;
  prevComponent?: string;
  nextComponent?: string;
};

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
