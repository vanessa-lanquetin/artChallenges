<template>
  <div class="theme">
    <div v-if="theme === 'Animaux'">
      <h1>Animaux</h1>
    </div>
    <div v-else-if="theme === 'Endroits'">test endroits</div>

    <!-- 
    Theme choisi: {{theme}}
    <div v-for="filter of themes[theme]?.filters" :key="filter.label">
      <div v-if="filter.selects">
        {{filter.label}}
        <select>
          <option v-for="select of filter.selects" :key="select" :value="select">{{select}}</option>
        </select>
      </div>
      <div v-else>
        {{filter.label}}
        <input type="text">
      </div>
    </div> -->
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import router from "../router/index";
export default {
  setup() {
    const theme = ref(router.currentRoute.value.params.theme);
    const themes = {
      Fantastique: {
        filters: [
          { label: "Race/Type", selects: ["vampire", "pirate"] },
          { label: "Caractère" },
          { label: "Accessoires" },
        ],
      },
      Animaux: {
        filters: [
          { label: "Race/Type" },
          { label: "test ANIMAUX" },
          { label: "Accessoires" },
        ],
      },
    };
    return {
      theme,
      themes,
    };
  },
};
</script>

<style lang="scss" scoped>
.theme {
  text-align: center;
}
</style>