import { ListAnimation, MotiStartExample } from "../components";
import { screens } from "../constants";
import { Home } from "../screens";

export const appScreens = [
  {
    name: screens.home,
    component: Home,
  },
  {
    name: screens.motiStartExample,
    component: MotiStartExample,
  },
  {
    name: screens.flatListAnimation,
    component: ListAnimation,
  },
];
