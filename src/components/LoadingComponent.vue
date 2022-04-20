<template>
  <div>
    <span class="material-icons md-48">
      autorenew
    </span>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent"
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
}

span {
  cursor: progress;
  top: 1rem;
  right: 1rem;
  border: none;
  border-radius: 100px;
  color: var(--white);
  background-color: var(--dark-blue);
  padding: 0.5rem;
  user-select: none;
}
</style>