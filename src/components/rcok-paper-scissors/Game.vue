<template>
  <div>
    <PlayComponent v-show="!endGame" :play="play" :moves="moves" :mode-classic="modeClassic"></PlayComponent>
    <EndComponent :player-move="playerMove" :house-move="houseMove"
                  v-show="endGame" :reset="reset" :msg-score="msgScore"></EndComponent>
  </div>
</template>

<script>
import PlayComponent from "./PlayComponent";
import EndComponent from "./EndComponent";

function whoWinsClassic(playerMove, houseMove) {
  let tab = ["rock", "paper", "scissors"];
  let res = tab.indexOf(playerMove) - tab.indexOf(houseMove);
  if (res===0) {
    return 0;
  } else if (res === 1 || res === -2) {
    return 1;
  } else {
    return -1;
  }
}

function whoWinsSheldon(playerMove, houseMove) {
  if (playerMove === houseMove) {
    return 0;
  }

  let tab = ["rock", "paper", "scissors", "lizard", "spock"];
  let beats = [
    ["lizard", "scissors"],
    ["spock", "rock"],
    ["lizard", "paper"],
    ["paper", "spock"],
    ["scissors", "rock"]
  ]
  return beats[tab.indexOf(playerMove)].includes(houseMove) ? 1 : -1;
}

export default {
  name: "Game-component",
  components: {
    PlayComponent, EndComponent
  },
  data () {
    return {
      endGame: false,
      playerMove: "",
      houseMove: "",
      msgScore: ""
    }
  },
  props: {
    addScore: Function,
    modeClassic: Boolean
  },
  computed: {
    moves() {
      return this.modeClassic? ["rock", "paper", "scissors"] :
        ["rock", "paper", "scissors", "lizard", "spock"]
    }
  },
  methods: {
    play(move) {
      this.playerMove = move;
      this.houseMove = this.moves[Math.floor(Math.random() * this.moves.length)];

      let score = this.modeClassic?
          whoWinsClassic(this.playerMove, this.houseMove) :
          whoWinsSheldon(this.playerMove, this.houseMove);
      switch (score) {
        case 0:
          this.msgScore = "TIE";
          break;
        case 1:
          this.msgScore = "YOU WIN";
          break;
        case -1:
          this.msgScore = "YOU LOSE";
          break;
      }
      this.addScore(score);

      this.endGame = true;
    },
    reset() {
      this.endGame = false;
      this.playerMove = "";
      this.houseMove = "";
      this.msgScore = "";
    }
  }
}
</script>

<style scoped>

</style>