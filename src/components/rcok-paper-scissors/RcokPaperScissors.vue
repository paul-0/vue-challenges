<template>
  <div id="rps">
    <div id="top">
      <h1 v-if="modeClassic">ROCK PAPER SCISSORS</h1>
      <h3 v-else>ROCK PAPER SCISSORS LIZARD SPOCK</h3>
      <div id="score">
        SCORE
        <div>{{ score }}</div>
      </div>
    </div>
    <GameComponent id="content" :add-score="addScore" :mode-classic="modeClassic" />
    <div id="div-buttons-rps">
      <button id="button-rules" @click="showRules^=true">RULES</button>
      <button id="button-mode" @click="changeMode">{{ modeClassic? 'MODE: CLASSIC':'MODE: SHELDON' }}</button>
    </div>
    <RulesComponent v-show="showRules" :mode-classic="modeClassic"
                    :close-callback="() => {this.showRules=false}"></RulesComponent>
    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/paul-0">Paul Devilliers</a>.
    </div>
  </div>
  <WhatIsIt v-show="showWhatIsIt" cookie="whatIsItRCS" :infos="infosWhatIsIt" />
</template>

<script>
import GameComponent from "./Game";
import RulesComponent from "./Rules";
import WhatIsIt from "@/components/WhatIsIt";
export default {
  name: 'RcokPaperScissors',
  data() {
    return {
      score: parseInt(localStorage.getItem('score')) || 0,
      showRules: false,
      modeClassic: true,
      showWhatIsIt: document.cookie.indexOf('whatIsItRCS') === -1,
      infosWhatIsIt: [
          "This is a basic rock paper scissors game",
          "\"The House\" makes random choices",
          "If you win you get a point, if you loose you loose a point",
          "Your score will be saved",
          "The Sheldon version is the same but with a lizard and a Spock",
          "You can check the rules by clicking on the RULES button",
      ]
    }
  },
  components: {
    WhatIsIt,
    RulesComponent,
    GameComponent
  },
  methods: {
    addScore(score) {
      this.score += score;
      localStorage.setItem('score', this.score.toString());
    },
    changeMode() {
      this.modeClassic = !this.modeClassic;
    }
  },
  mounted() {
    document.title = 'Rock paper scissors game';
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,400;0,500;0,700;0,800;1,500&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#rps .attribution {
  font-size: 11px; text-align: center;
  margin: 2rem;
  a {
    color: #7b8ac7;
  }
}

#rps {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  font-family: 'Barlow Semi Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0;
  min-width: 300px;

  #div-buttons-rps {
    position: absolute;
    right: 2rem;
    bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;

    button {
      background: none;
      border: medium solid var(--white);
      color: var(--white);
      border-radius: 100px;
      width: max-content;
      padding: 5px 20px;
      font-weight: bold;
      cursor: pointer;
    }
  }

}

#content {
  flex-grow: 1;
}

#top {
  margin: 2rem auto;
  display: flex;
  align-items: center;
  width: 40%;
  border: solid gray;
  border-radius: 1rem;
  padding: 0 1rem;

  h1,h2,h3 {
    font-weight: bolder;
    width: min-content;
    margin-right: auto;
    margin-left: 0;
    text-align: left;
  }

  #score {
    border-radius: 0.5rem;
    width: 5rem;
    height: 5rem;
    background-color: white;
    color: hsl(229, 64%, 46%);
    margin-right: 2rem;
    div {
      font-size: xxx-large;
      font-weight: bolder;
      color: var(--dark-text);
    }
  }
}

@media (max-width: 600px) {
  #top {
    width: 60%;
    font-size: xx-small;
    margin: 1rem auto;

    #score {
      font-size: small;
      padding-top: 3px;
      margin-right: 1rem;
      height: 3rem;
      width: 3rem;
      div {
        font-size: x-large;
      }
    }
  }

  #div-buttons-rps {
    margin: auto;
    position: static !important;
  }
  #rps .attribution {
    margin: 0.7rem auto;
  }
}
</style>