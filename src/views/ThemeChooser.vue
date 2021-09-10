<template>
  <div class="theme-chooser">
    <h1>Thèmes</h1>
    <div class="container">
      <div id="container-theme">
        <router-link :to="{name: 'theme', params: {theme: theme || 'a'}}" class="theme">
          {{theme}}
        </router-link>
      </div>
      <div id="nouveau" @click="changeTheme()">Nouveau thème</div>
      <div id="themeSlect"></div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    let themes = [
      "Fantastique",
      "Personnes",
      "Animaux",
      "Endroits",
      "Créatures",
      "Nature",
      "Science-Fiction",
    ];
    const theme = ref(themes[0])

    // Fonction permettant de générer un nombre aléatoire
    const getRandomTheme = () => themes[Math.floor(Math.random() * themes.length)]
    const changeTheme = () => {
      let random = getRandomTheme()
      while(random === theme.value) {
        random = getRandomTheme()
      }
      theme.value = random;
    }
    onMounted(changeTheme)
    return {
      theme,
      changeTheme,
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: auto;
}
.theme {
  font-size: 4em;
  font-weight: bold;
  color: rgb(119, 118, 118);
  font-family: "Dancing";
  text-decoration: none;
  transition: 300ms;
  &:hover {
    color: rgba(253, 130, 130, 0.877);
    transform: scale(1.3);
    cursor: pointer;
  }
}
#nouveau {
  cursor: pointer;
  margin-top: 2px;
  text-align: center;
  color: rgb(255, 251, 251);
  font-weight: bold;
  text-transform: uppercase;
  padding: 25px;
  margin-top: 20px;
  border-radius: 30px;
  background-color: rgba(253, 130, 130, 0.877);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: 300ms;
  font-size: 1.3em;
  font-family: "Poiret";
  &:hover {
    transform: scale(1.1);
  }
}
#container-theme {
  background-color: white;
  border-radius: 20px;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-align: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>