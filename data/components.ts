import TooltipExample from "@/components/glassmorphism-example/Tooltip";
import ButtonAnimatedGradient from "@/components/lab/button/ButtonBackgroundSpotlight";
import ButtonRotatingBackgroundGradient from "@/components/lab/button/ButtonRotatingBackgroundGradient";
import InputGradientBorder from "@/components/lab/input/InputGradientBorder";
import Tooltip from "@/components/lab/tooltip/Tooltip";
import InputSpotlightBorder from "@/components/lab/input/InputSpotlightBorder";
import InputPulseBorder from "@/components/lab/input/InputPulseBorder";
import CardAnimatedBorderGradient from "@/components/lab/card/CardAnimatedBorderGradient";
import CardSpotlight from "@/components/lab/card/CardSpotlight";
import CardPulseBorder from "@/components/lab/card/CardPulseBorder";
import CardTilt from "@/components/lab/card/CardTilt";
import ButtonBackgroundShine from "@/components/lab/button/ButtonBackgroundShine";
import BadgeShine from "@/components/lab/badge/BadgeShine";
import BadgeAnimatedGradientBorder from "@/components/lab/badge/BadgeAnimatedGradientBorder";

import Reviews from "@/components/lab/section/Review";
import FormGlassmorphism from "@/components/lab/form/FormGlassmorphism";
import CardPresentation from "@/components/lab/section/CardPresentation";
import CardPresentationGlassmorphism from "@/components/lab/section/CardPresentationGlassmorphism";
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
  ["form-square"]: {
    animation: {
      "form-square": "form-square 10s infinite alternate",
    },
    keyframes: {
      "form-square": {
        from: {
          transform: "translateY(-40px)",
        },
        to: {
          transform: "translateY(40px)",
        },
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
    name: "Button Background Shine",
    component: ButtonBackgroundShine,
    exampleComponent: ButtonBackgroundShine,
    slug: "button-background-shine",
    type: "button",
    twConfig: TWCONFIG["background-shine"],
  },
  {
    name: "Button Background Spotlight",
    component: ButtonAnimatedGradient,
    exampleComponent: ButtonAnimatedGradient,
    slug: "ButtonBackgroundSpotlight",
    type: "button",
  },
  {
    name: "Button Rotating Background Gradient",
    component: ButtonRotatingBackgroundGradient,
    exampleComponent: ButtonRotatingBackgroundGradient,
    slug: "button-rotating-background-gradient",
    type: "button",
  },
  {
    name: "Badge Shine",
    component: BadgeShine,
    exampleComponent: BadgeShine,
    slug: "badge-shine",
    type: "badge",
    twConfig: TWCONFIG["background-shine"],
  },
  {
    name: "Badge Animated Gradient Border",
    component: BadgeAnimatedGradientBorder,
    exampleComponent: BadgeAnimatedGradientBorder,
    slug: "badge-animated-gradient-border",
    type: "badge",
  },

  {
    name: "Card Animated Border Gradient",
    component: CardAnimatedBorderGradient,
    exampleComponent: CardAnimatedBorderGradient,
    slug: "card-animated-border-gradient",
    type: "card",
  },
  {
    name: "Card Spotlight",
    component: CardSpotlight,
    exampleComponent: CardSpotlight,
    slug: "card-spotlight",
    type: "card",
  },
  {
    name: "Card Pulse Border",
    component: CardPulseBorder,
    exampleComponent: CardPulseBorder,
    slug: "card-pulse-border",
    type: "card",
    twConfig: TWCONFIG["border-width"],
  },
  {
    name: "Card Tilt",
    component: CardTilt,
    exampleComponent: CardTilt,
    slug: "card-tilt",
    type: "card",
  },
  {
    name: "Input Spotlight Border",
    component: InputSpotlightBorder,
    exampleComponent: InputSpotlightBorder,
    slug: "input-spotlight-border",
    type: "input",
  },
  {
    name: "Input Gradient Border",
    component: InputGradientBorder,
    exampleComponent: InputGradientBorder,
    slug: "input-gradient-border",
    type: "input",
  },
  {
    name: "Input Pulse Border",
    component: InputPulseBorder,
    exampleComponent: InputPulseBorder,
    slug: "input-pulse-border",
    type: "input",
    twConfig: TWCONFIG["border-width"],
  },
  {
    name: "Tooltip",
    component: Tooltip,
    exampleComponent: TooltipExample,
    slug: "tooltip",
    type: "tooltip",
  },
  {
    name: "Form Glassmorphism",
    component: FormGlassmorphism,
    exampleComponent: FormGlassmorphism,
    slug: "form-glassmorphism",
    type: "form",
    twConfig: TWCONFIG["form-square"],
  },
  {
    name: "Review",
    component: Reviews,
    exampleComponent: Reviews,
    slug: "review",
    type: "section",
  },
  {
    name: "Card Presentation",
    component: CardPresentation,
    exampleComponent: CardPresentation,
    slug: "card-presentation",
    type: "section",
  },
  {
    name: "Card Presentation Glassmorphism",
    component: CardPresentationGlassmorphism,
    exampleComponent: CardPresentationGlassmorphism,
    slug: "card-presentation-glassmorphism",
    type: "section",
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
