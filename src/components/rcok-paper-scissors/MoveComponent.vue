<template>
  <div v-bind:id="move" class="move" >
    <img v-bind:src="getSrc()" v-bind:alt="move">
  </div>
</template>

<script>
export default {
  name: "MoveComponent",
  props: {
    move: {
      type: String,
      required: true
    }
  },
  methods: {
    getSrc() {
      if (this.move)
        return require('@/assets/images/icon-' + this.move + '.svg')
      else return "";
    }
  }
}
</script>

<style scoped lang="scss">
.move {
  position: absolute;
  background-color: white;
  border-radius: 100%;
  height: 8rem;
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.2rem solid;
}
#paper {
  border-color: var(--paper);
}
#scissors {
  border-color: var(--scissors);
}
#rock {
  border-color: var(--rock);
}
#spock {
  border-color: var(--spock);
}
#lizard {
  border-color: var(--lizard);
}

@media (max-width: 600px){
  .move {
    height: 6rem !important;
    width: 6rem !important;
    border-width: 0.8rem !important;
  }
}
</style>