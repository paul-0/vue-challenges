<template>
  <div class="div-msg" @mousedown.prevent.left="handleMouseDown"
       :style="{left:x+'%', top:y+'%'}">
    <span class="material-icons-round btn" @click="$emit('delete',message.id)">
      delete
    </span>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import $ from 'jquery'
import message from "@/components/messages-board/Message"

export default {
  name: "MessageComponent",
  props: {
    message: {
      id: Number,
      msg: String,
      x: Number,
      y: Number
    },
    modifyMsg: Function
  },
  data() {
    return {
      msg: "",
      x: 0,
      y: 0
    };
  },
  methods: {
    handleMouseDown(event) {
      let startPosX = event.clientX;
      let startPosY = event.clientY;
      let newX = 0;
      let newY = 0;

      let mouseMove = (event) => {
        newX = ((startPosX - event.clientX) / window.innerWidth) * 100;
        newY = ((startPosY - event.clientY) / window.innerHeight) * 100;
        startPosX = event.clientX;
        startPosY = event.clientY;
        this.x = this.x - newX;
        this.y = this.y - newY;
      }

      document.addEventListener("mousemove", mouseMove);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", mouseMove);
        this.modifyMsg(this.message, {id: message.id, msg:this.msg, x:this.x, y:this.y});
      });
    },
  },
  mounted() {
    $(this.$el).animate({
      opacity: 1
    }, 1000);
    this.msg = this.message.msg;
    this.x = this.message.x;
    this.y = this.message.y;
  }
}
</script>

<style scoped lang="scss">
.div-msg {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 0 5px var(--white);
  background-color: var(--dark-blue);
  width: max-content;
  height: max-content;
  min-height: 100px;
  min-width: 150px;
  max-width: 300px;
  max-height: 250px;
  overflow: hidden;
  &:hover {
    cursor: move;
    span.btn {
      opacity: 1;
    }
    animation: none;
  }
  p {
    max-height: 250px;
    overflow: auto;
  }

  animation: float 1s infinite ease-in-out alternate;
}
@keyframes float {
  100% {
    transform: translateY();
  }
}
span.btn {
  opacity: 0;
  position: absolute;
  right: 5px;
  top: 5px;
  transition: all 0.4s ease-in-out;
}
</style>