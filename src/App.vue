<template>
  <span id="back-button" class="material-icons-round md-36 btn" @click="this.$router.push('/')">
      arrow_back
  </span>
  <router-view class="component"/>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,400;0,500;0,700;0,800;0,900;1,500&family=Fredoka:wght@400;500;600&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round');

:root {
  --soft-blue: hsl(215, 51%, 70%);
  --cyan: hsl(178, 100%, 50%);

  --very-dark-blue: hsl(217, 54%, 11%);
  --very-dark-blue-trans: hsla(216, 54%, 11%, 0.5);
  --dark-blue: hsl(216, 50%, 16%);
  --blue: hsl(215, 32%, 27%);
  --white: hsl(0, 0%, 100%);

  --scissors: hsl(39, 89%, 49%);
  --paper:  hsl(230, 89%, 62%);
  --rock: hsl(349, 71%, 52%);
  --lizard: hsl(261, 73%, 60%);
  --spock: hsl(189, 59%, 53%);

  --transparent-gray: hsla(217, 51%, 15%, 0.51);
  --dark-text: hsl(229, 25%, 31%);
  --header-outline:  hsl(217, 16%, 45%);
}

html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: var(--white);
  background-color: var(--very-dark-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#back-button {
  position: absolute;
  z-index: 15;
  top: 2rem;
  left: 2rem;
}

.component {
  z-index: 10;
}

span.btn, button.btn {
  border: none;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--white);
  transition: all 0.2s ease-in-out;
  padding: 0.5rem;
  width: max-content;
  height: max-content;
  user-select: none;

  &:hover {
    transform: scale(1.1);
    background-color: transparentize(hsl(215, 32%, 27%), 0.2);
    box-shadow: white 0 0 10px;
  }
}
span.btn {
  background-color: var(--dark-blue);
}
button.btn {
  background-color: var(--dark-text);
  color: var(--soft-blue);
  font-size: large;
  padding: 0.5rem 2rem;
  font-weight: bold;
}
span.md-18 { font-size: 18px; }
span.md-24 { font-size: 24px; }
span.md-36 { font-size: 36px; }
span.md-48 { font-size: 48px; font-weight: bold; }
</style>
<script>
</script>