import VoEdit from "../src/components/VoEdit.vue";

export { VoEdit };

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("vo-edit", VoEdit);
}
