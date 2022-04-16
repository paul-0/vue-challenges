<template>
  <div id="end-component">
    <div id="player">
      <h2>YOU PICKED</h2>
      <div class="choosen-move">
        <MoveComponent :move="playerMove" />
        <div v-show="msgScore==='you-win'" class="winner"></div>
      </div>
    </div>
    <div id="div-replay">
      <h2 :class="msgColor">{{ msgScore }}</h2>
      <button @click="reset">PLAY AGAIN</button>
    </div>
    <div id="house">
      <h2>THE HOUSE PICKED</h2>
      <div class="choosen-move">
        <MoveComponent class="house-move" :move="houseMove" />
        <div v-show="msgScore==='you-lose'" class="winner"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MoveComponent from "./MoveComponent";
export default {
  name: "EndComponent",
  components: {MoveComponent},
  props: {
    playerMove: {
      type: String,
      required: true
    },
    houseMove: {
      type: String,
      required: true
    },
    reset: {
      type: Function,
      required: true
    },
    msgScore: {
      type: String,
      required: true
    }
  },
  computed: {
    msgColor() {
      return this.msgScore === "YOU WIN" ? "green" :
          this.msgScore==="YOU LOSE" ? "red" : "";
    }
  }
}
</script>

<style scoped lang="scss">
#end-component {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  height: 100%;
  max-width: 700px;
  margin: 4rem auto auto;

  * {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

.choosen-move {
  background-color: var(--dark-text);
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
}

.winner {
  height: 500px;
  width: 500px;
  background: radial-gradient(circle at center,
      transparent 20%,
      opacify(transparent, 0.4) 20%, opacify(transparent, 0.4) 35%,
      opacify(transparent, 0.2) 35%, opacify(transparent, 0.2) 50%,
      opacify(transparent, 0.1) 50%, opacify(transparent, 0.1) 65%,
      transparent 65%);
  position: absolute;
  z-index: -1;
}

.house-move, #div-replay, .winner {
  animation: fadeIn 3s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#div-replay {
  margin-top: 4rem;

  button {
    background-color: white;
    border: none;
    border-radius: 100px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    color: var(--dark-text);
    cursor: pointer;
  }
}
.red {
  color: #dc2e4e;
}
.green {
  color: #2a8a37;
}

@media (max-width: 600px){
  #end-component {
    position: relative;
    margin: 0;
  }
  #player, #house {
    width: 50%;
    height: 50%;
  }
  #div-replay {
    margin-top: 0;
    position: absolute;
    bottom: 2rem;
    right: 0;
    left: 0;
  }
  .choosen-move {
    width: 6rem;
    height: 5rem;
  }
  .winner {
    background: radial-gradient(circle at center,
        transparent 15%,
        opacify(transparent, 0.4) 15%, opacify(transparent, 0.4) 30%,
        opacify(transparent, 0.2) 30%, opacify(transparent, 0.2) 45%,
        opacify(transparent, 0.1) 45%, opacify(transparent, 0.1) 60%,
        transparent 60%);
  }
}
</style>