<template>
  <div id="root">
    <div id="box">
      <span class="material-icons-round" @click="close">
        close
      </span>
      <img :src="getSrc(image)" alt=" " />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageViewer",
  props: {
    image: String,
    close: Function
  },
  methods: {
    getSrc(img) {
      if (img)
        return require('@/assets/images/' + img)
      else return ""
    }
  }
}
</script>

<style scoped>
#root {
  width: 100vw;
  height: 100vh;
  background-color: rgba(60, 75, 103, 0.36);
  position: fixed;
  top: 0;
  left: 0;
}

#box {
  background-color: var(--dark-blue);
  color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2rem;
  padding: 1rem;
}

span {
  font-size: 3rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

img {
  border-radius: 1rem;
}

#box, img {
  max-width: 100%;
  max-height: 100%;
  height: max-content;
  width: max-content;
  box-sizing: border-box;
}
</style>