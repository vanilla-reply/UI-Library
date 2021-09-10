// export { default as UiButton } from './components/UiButton.vue'
export const UiButton = () => import('./components/UiButton.vue')
export const UiBrand = () => import('./components/UiBrand.vue')
export const UiDropdown = () => import('./components/UiDropdown.vue')


// const UiButton = () => import('./components/UiButton.vue')
// UiButton.install = function(Vue) {
//   Vue.component(UiButton.name, UiButton);
// };

// export default UiButton;
