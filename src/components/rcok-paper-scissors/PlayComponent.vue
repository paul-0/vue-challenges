<template>
  <div id="root">
    <div id="play-component">
      <img v-if="modeClassic" class="background" src="@/assets/images/bg-triangle.svg" alt="">
      <img v-else class="background" src="@/assets/images/bg-pentagon.svg" alt="">
      <MoveComponent v-for="(move, index) in moves" :key="index"
                     :move="move" @click="play(move)" :class="modeClassic? '':'sheldon'" />
    </div>
  </div>
</template>

<script>
import MoveComponent from "./MoveComponent";
export default {
  name: "PlayComponent",
  components: {MoveComponent},
  props: {
    play: Function,
    moves: Array,
    modeClassic: Boolean
  },
}
</script>

<style scoped lang="scss">
#root {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#play-component {
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: max-content;
  margin: auto;
  position: relative;
}

.background {
  height: 50%;
}
.move {
  position: absolute;
  background-color: white;
  border-radius: 100%;
  height: 8rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1.2rem solid;
  &:hover {
    filter: brightness(0.8);
  }
}

#paper {
  &.sheldon {
    top: 10%;
    right: -25%;
  }
  &:not(.sheldon) {
    left: -25%;
    top: -25%;
  }
}
#scissors {
  &:not(.sheldon) {
    right: -25%;
    top: -25%;
  }
  &.sheldon {
    top: -25%;
  }
}
#rock {
  &:not(.sheldon) {
    bottom: -20%;
  }
  &.sheldon {
    bottom: -25%;
    right: -5%;
  }
}
#lizard {
  bottom: -25%;
  left: -5%;
}
#spock {
  top: 10%;
  left: -25%;
}

@media (max-width: 600px){
  .background {
    height: 180px;
  }
}
</style>