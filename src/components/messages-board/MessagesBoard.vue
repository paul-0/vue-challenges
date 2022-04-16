<template>
  <div>
    <span class="material-icons-round md-48 btn" @click="showNewMsgComponent=true">
      add
    </span>
  </div>
  <NewMessage v-if="showNewMsgComponent" @close="showNewMsgComponent=false" @send="saveMsg" />
  <MessageComponent v-for="(msg,index) in listMessages" @delete="deleteMsg"
                    :key="msg.id" :index="index" :message="msg" :modify-msg="modifyMsg"/>
</template>

<script>
import NewMessage from "@/components/messages-board/NewMessage";
import MessageComponent from "@/components/messages-board/Message";
export default {
  name: "MessagesBoard",
  components: {MessageComponent, NewMessage},
  data() {
    return {
      showNewMsgComponent: false,
      listMessages: []
    }
  },
  methods: {
    saveMsg(msg) {
      this.showNewMsgComponent = false;
      this.listMessages.push({id: this.listMessages.length, msg:msg, x:50, y:50});
      this.saveListMessages()
    },
    modifyMsg(old, msg) {
      this.listMessages[this.listMessages.indexOf(old)] = msg;
      this.saveListMessages()
    },
    deleteMsg(index) {
      console.log(index);
      console.log(this.listMessages.splice(index, 1))
      this.saveListMessages()
    },
    saveListMessages() {
      localStorage.setItem("listMessages", JSON.stringify(this.listMessages));
    }
  },
  mounted() {
    this.listMessages = JSON.parse(localStorage.getItem("listMessages")) || [];
  }
}
</script>

<style scoped>
div {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>