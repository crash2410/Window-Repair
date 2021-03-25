import "./slider";
import modal from "./modules/modal";
import tabs from "./modules/tabs";
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modal();
    tabs('.glazing_block', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');
    forms('.form');
});