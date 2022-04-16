<template>
  <div id="div-buttons">
    <RouterLink class="link" to="rcok-paper-scissors">Rcok Paper Scissors</RouterLink>
    <RouterLink class="link" to="nft-card">NFT Card</RouterLink>
    <RouterLink class="link" to="timeline">Timeline</RouterLink>
    <RouterLink class="link" to="message-board">Message board</RouterLink>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'HomeView',
  mounted() {
    $("#back-button").fadeOut()
    $('a').click(function() {
      $("#back-button").fadeIn()
    })
  }
}
</script>

<style scoped lang="scss">
#div-buttons {
  display: flex;
  flex-direction: column;

  .link {
    border-radius: 100px 0 0 100px;
    text-decoration: none;
    background: none;
    color: var(--white);
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    padding: 1rem 1rem 1rem 2rem;
    border: none;
    border-right: 5px solid var(--white);
    text-align: right;
    &:hover {
      border-right-color: var(--cyan);
      background-color: var(--dark-blue);
      color: var(--cyan);
    }
  }
}
</style>
