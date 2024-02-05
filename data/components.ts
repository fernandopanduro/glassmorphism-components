import ButtonExample from "@/components/glassmorphism-example/Button";
import DrawerExample from "@/components/glassmorphism-example/Drawer";
import ModalExample from "@/components/glassmorphism-example/Modal";
import HoverCardExample from "@/components/glassmorphism-example/Modal";
import Button from "@/components/glassmorphism/Button";
import Drawer from "@/components/glassmorphism/Drawer";
import Modal from "@/components/glassmorphism/Modal";
import HoverCard from "@/components/glassmorphism/Modal";

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
    prevComponent: "drawer",
  },
];

export default components;
