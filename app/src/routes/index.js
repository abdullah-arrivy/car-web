import FeedBack from "../pages/FeedBack";
import HomePage from "../pages/Home";
import { routeText } from "./RouteText";

export const routeArray = [
  {
    component: HomePage,
    path: routeText.HOME_URL,
  },
  {
    component: FeedBack,
    path: routeText.FEED_BACK_URL,
  },
];
