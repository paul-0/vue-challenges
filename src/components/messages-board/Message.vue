<template>
  <div :id="message.id" class="div-msg" @mousedown.prevent.left="handleMouseDown" @touchstart="handleTouch"
       :style="{left:x+'%', top:y+'%'}">
    <span class="material-icons-round btn" @click="$emit('delete',index)">
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
    index: Number,
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
        this.modifyMsg(this.index, this.message, {id: message.id, msg:this.msg, x:this.x, y:this.y});
      });
    },
    handleTouch(evt) {
      let startPosX = evt.targetTouches[0].clientX;
      let startPosY = evt.targetTouches[0].clientY;
      let newX = 0;
      let newY = 0;

      let touchMove = (event) => {
        newX = ((startPosX - event.targetTouches[0].clientX) / window.innerWidth) * 100;
        newY = ((startPosY - event.targetTouches[0].clientY) / window.innerHeight) * 100;
        startPosX = event.targetTouches[0].clientX;
        startPosY = event.targetTouches[0].clientY;
        this.x = this.x - newX;
        this.y = this.y - newY;
      }

      document.addEventListener("touchmove", touchMove);
      document.addEventListener("touchend", () => {
        document.removeEventListener("touchmove", touchMove);
        this.modifyMsg(this.index, this.message, {id: message.id, msg:this.msg, x:this.x, y:this.y});
      });
    }

  },
  mounted() {
    $(this.$el).animate({
      opacity: 1
    }, 1000);
    this.msg = this.message.msg;
    this.x = this.message.x;
    this.y = this.message.y;

    let width = $(this.$el).width()
    let height = $(this.$el).height()
    $(this.$el).hover(() => {
      $(this.$el).stop(true).animate({
        width: width*1.2,
        height: height*1.2
      });
    }, () => {
      $(this.$el).stop(true).animate({
        width: width,
        height: height
      });
    });
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
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
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