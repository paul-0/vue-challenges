<template>
  <div>
    <span class="material-icons-round md-48 btn" @click="showNewMsgComponent=true">
      add
    </span>
  </div>
  <NewMessage v-if="showNewMsgComponent" @close="showNewMsgComponent=false" @send="saveMsg" />
  <MessageComponent v-for="(msg,index) in listMessages" @delete="deleteMsg"
                    :key="msg.id" :index="index" :message="msg" :modify-msg="modifyMsg"/>
  <WhatIsIt v-if="howItWorks" cookie="howItWorksMessagesBoard" :infos="infosHowItWorks" />
</template>

<script>
import NewMessage from "@/components/messages-board/NewMessage";
import MessageComponent from "@/components/messages-board/Message";
import WhatIsIt from "@/components/WhatIsIt";
export default {
  name: "MessagesBoard",
  components: {WhatIsIt, MessageComponent, NewMessage},
  data() {
    return {
      showNewMsgComponent: false,
      listMessages: [],
      howItWorks: document.cookie.indexOf("howItWorksMessagesBoard") === -1,
      infosHowItWorks: [
        "You can add a message vie the plus button at the center.",
        "You can move the messages on the board.",
        "The messages and their positions will be saved."
      ]
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
    document.title = 'Messages board';
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