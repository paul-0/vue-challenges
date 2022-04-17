<template>
  <div class="root">
    <div>
      <span class="material-icons-round md-24 btn" @click="close">
        close
      </span>
      <h2>How it works</h2>
      <ul>
        <li v-for="(info,index) in infos" :key="index">{{info}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "WhatIsIt",
  props: {
    infos: Array,
    cookie: String
  },
  methods: {
    close() {
      document.cookie = this.cookie+'=true; expires=Thu, 18 Dec 2099 12:00:00 UTC; path=/'
      $('.root').hide()
    }
  }
}
</script>

<style scoped lang="scss">
.root {
  background-color: transparentize(#fff, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  backdrop-filter: blur(50px);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background-color: var(--dark-blue);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    span.btn {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
    }
    h2 {
      margin: 0;
      text-align: center;
    }
    ul {
      font-size: x-large;
    }
  }
}
</style>