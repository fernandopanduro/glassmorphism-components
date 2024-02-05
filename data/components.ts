import ButtonExample from "@/components/glassmorphism-example/Button";
import DrawerExample from "@/components/glassmorphism-example/Drawer";
import Button from "@/components/glassmorphism/Button";
import Drawer from "@/components/glassmorphism/Drawer";

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
    nextComponent: "sidebar",
    prevComponent: "button",
  },
];

export default components;
