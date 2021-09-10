<template>
  <navigation/>
  <router-view/>
</template>

<script>
import Navigation from './components/Navigation.vue'
export default {
  components: { Navigation },
  setup() {
    
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: "Poiret";
  src: url(./assets/Fonts/Poiret_One/PoiretOne-Regular.ttf) format("truetype");
}
@font-face {
  font-family:"Dancing" ;
  src: url(./assets/Fonts/Dancing_Script/static/DancingScript-Bold.ttf);
}
@font-face {
  font-family:"Architect" ;
  src: url(./assets/Fonts/Architects_Daughter/ArchitectsDaughter-Regular.ttf);
}
html {
  font-family: "Poiret", sans-serif;
  width: 100vw;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-image: linear-gradient(to top, #dbf5f4 50%, #57beba 100%);
  }
}

h1 {
  margin-top: 1%;
  font-size: 4em;
  color: white;
  font-family: "Architect", sans-serif;
  text-shadow: 3px 3px 3px rgba(83, 86, 87, 0.808);
  margin-bottom: 50px;
}
h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #818586bb;
  font-weight: 700;
  font-family: "Dancing";
}
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
}
</style>
