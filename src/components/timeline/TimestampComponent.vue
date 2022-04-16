<template>
  <div class="timestamp" :style="{left:x+'%', height:height+'px'}">

  </div>
</template>

<script>
export default {
  name: "TimestampComponent",
  props: {
    timestamp: {
      height: Number,
      x: Number,
      y: Number,
      date: Date,
      title: String
    }
  },
  data() {
    return {
      x: this.timestamp.x,
      y: this.timestamp.y,
      height: this.timestamp.height
    }
  },
}
</script>

<style scoped lang="scss">
.timestamp {
  position: absolute;
  bottom: 0;
  background-color: var(--white);
  width: 0.3rem;
  border-radius: 100px 100px 0 0;
  cursor: pointer;
  &:hover {
    background-color: var(--cyan);
  }
}
</style>