import { utils } from "./../core/utils.js";
/* global vSettings */

export const routes = {
  init: async () => {
    utils.loadModule("pages/home.html", "content");
    utils.setTitle(`${vSettings.brand} | Home`);

    utils.scrollTo();
    return true;
  },
};
