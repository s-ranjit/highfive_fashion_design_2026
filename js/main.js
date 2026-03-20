import { slider } from "./modules/slider.js";
import { video } from "./modules/video.js";
// Page loading logic
if (document.body.dataset.page === "event") {
 video();
  slider();
}
// }else if(document.body.dataset.page === "contact") {
//   contactForm();
// }
// s