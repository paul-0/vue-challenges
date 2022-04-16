<template>
  <div id="div-rules">
    <div id="rules">
      <h1>RULES</h1>
      <span v-on:click="closeCallback" class="material-icons">
        close
      </span>
      <img v-if="modeClassic" src="@/assets/images/image-rules.svg" alt="Rules">
      <img v-else src="@/assets/images/image-rules-bonus.svg" alt="Sheldon's rules">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    closeCallback: Function,
    modeClassic: Boolean,
  },
  name: "RulesComponent"
}
</script>

<style scoped>
#div-rules {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--transparent-gray);
  z-index: 100;
}

#rules {
  background-color: white;
  border-radius: 20px;
  max-width: 500px;
  width: 500px;
  height: 400px;
  margin: auto;
  color: var(--dark-text);
  position: relative;
}

h2 {
  text-align: left;
  margin-left: 4rem;
}

span{
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 30px;
  cursor: pointer;
}

img {
  width: auto;
  height: 300px;
}

@media (max-width: 600px){
  #rules {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }

  span {
    top: auto;
    bottom: 2rem;
    right: 0;
    left: 0;
  }
}

</style>