import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<html lang="us" data-theme="night"></html> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
