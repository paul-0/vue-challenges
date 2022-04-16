<template>
  <div class="root">
    <form id="new-msg" @submit.prevent="send">
      <span class="material-icons-round md-24 btn" @click="close">
        close
      </span>
      <textarea placeholder="Insert a lovely message here..." required></textarea>
      <button class="btn" type="submit">Send</button>
    </form>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "NewMessage",
  methods: {
    close() {
      $(this.$el).fadeOut(() => {
        $(this.$el).find('textarea').val('')
        this.$emit('close')
      })
    },
    send() {
      this.$emit('send', $(this.$el).find('textarea').val())
    }
  },
  mounted() {
    $("#new-msg").hide().fadeIn()
  }
}
</script>

<style scoped lang="scss">
.root {
  background-color: var(--transparent-gray);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  backdrop-filter: blur(50px);
}

#new-msg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  min-height: 400px;
  background-color: var(--dark-blue);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  //box-shadow: white 0 0 10px;

  span.btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}

@media (max-width: 600px) {
  #new-msg {
    width: 100%;
    box-sizing: border-box;
  }
}

textarea {
  resize: none;
  background-color: var(--blue);
  color: var(--white);
  border: none;
  border-radius: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  flex-grow: 1;
  font-size: 1rem;
}
button.btn {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: var(--dark-blue);
  color: var(--white);
}
</style>