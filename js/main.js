import { contact } from "./modules/contact.js";
import { video } from "./modules/video.js";
// Page loading logic
if (document.body.dataset.page === "event") {
 video();
}
else if(document.body.dataset.page === "contact") {
  contact();
}