import ButtonExample from "@/components/glassmorphism-example/Button";
import Button from "@/components/glassmorphism/Button";

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
    nextComponent: "accordion",
  },
  {
    name: "accordion",
    component: Button,
    exampleComponent: ButtonExample,
    nextComponent: "sidebar",
    prevComponent: "button",
  },
];

export default components;
