<template>
<div class="home">
  <h1>Art Challenges</h1>
  <div id="container-title">
  </div>
  <div id="containerAll">
    <div id="part-left">
      <div id="part1">
        <img
          src="@/assets/Img/Animation.gif"
          alt="logo welcome"
          id="anim-welcome"
        />
      </div>
      <div id="part2">
        <div>
          Bienvenue ! <span>Art Challenges</span> est un espace pour booster
          votre créativité.
        </div>
      </div>
    </div>
    <div id="part-right">
      <h2>Découvrez les dispositifs :</h2>
      <div class="container-tool">
        <img class="icon" src="@/assets/Img/princess2.png" alt="logo princess" />
        <div class="tools">Challenges</div>
      </div>
      <div class="container-tool">
        <img class="icon" src="@/assets/Img/princess2.png" alt="logo princess" />
        <div class="tools">Couleurs</div>
      </div>
      <div class="container-tool">
        <img class="icon" src="@/assets/Img/princess2.png" alt="logo princess" />
        <div class="tools">Minuteur</div>
      </div>
      <div class="container-tool">
        <img class="icon" src="@/assets/Img/princess2.png" alt="logo princess" />
        <div class="tools">Scènes</div>
      </div>
      <router-link :to="{name: 'theme-chooser'}" class="container-tool">
        <img class="icon" src="@/assets/Img/princess2.png" alt="logo princess" />
        <div class="tools">Thèmes</div>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1 {
  width: 100vw;
  text-align: center;
}
#containerAll {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
span {
  color: rgb(250, 149, 149);
}
#part-left, #part-right {
  margin-bottom: 50px;
  margin-left: 25px;
  margin-right: 25px;
}
#part-left {
  display: flex;
  flex-direction: column;
  font-size: 2.3em;
  background-color: #fdfcfc;
  box-shadow: 12px 12px 2px 1px rgba(83, 86, 87, 0.308);
  width: min-content;
  border-radius: 30px;
  max-width: 600px;
  min-width: 200px;
  align-items: center;
  text-align: center;
  flex-grow: 3;
}
#part1 {
  padding: 20px;
}
#anim-welcome {
  margin-top: 50px;
  height: 290px;
}
#part2 {
  padding: 20px 50px 50px 50px;
}
#part-right {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 30px;
  background: #fdfcfc;
  padding: 25px;
  box-shadow: 12px 12px 2px 1px rgba(83, 86, 87, 0.308);
  flex-grow: 1;
  max-width: 440px;
}
.container-tool {
  display: flex;
  cursor: pointer;
  transition: 300ms;
  text-decoration: none;
  .tools {
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-color: white;
    height: fit-content;
    border-radius: 10px;
    border: #818586bb 1px solid;
    color: #818586;
    box-shadow: rgba(143, 171, 182, 0.35) 0px 5px 15px;
    font-size: 2em;
    margin-left: 20px;
  }
  img {
    width: 90px;
  }
}

.container-tool:hover {
  transform: scale(1.1);
}
</style>
