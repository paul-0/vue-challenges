<template>
  <div>
    <LoadingComponent id="loading" />
    <div id="add-btn">
      <span class="material-icons-round md-48 btn" @click="showNewMsgComponent=true">
        add
      </span>
    </div>
    <NewMessage v-if="showNewMsgComponent" @close="showNewMsgComponent=false" @send="saveMsg" />
    <MessageComponent v-for="(msg, index) in listMessages" @delete="deleteMsg"
                      :key="msg.id" :index="index" :message="msg" :modify-msg="modifyMsg"/>
    <WhatIsIt v-if="howItWorks" cookie="howItWorksMessagesBoard" :infos="infosHowItWorks" />
  </div>
</template>

<script>
import $ from 'jquery'
import NewMessage from "@/components/messages-board/NewMessage"
import MessageComponent from "@/components/messages-board/Message"
import WhatIsIt from "@/components/WhatIsIt"
import {faunacl, fauna_query} from "@/fauna"
import LoadingComponent from "@/components/LoadingComponent"
export default {
  name: "MessagesBoard",
  components: {LoadingComponent, WhatIsIt, MessageComponent, NewMessage},
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
    async saveMsg(msg) {
      this.toggleLoading()
      this.showNewMsgComponent = false;
      faunacl.query(
          fauna_query.Create(
              fauna_query.Collection("challenges-vue"),
              {data: {msg: msg, x: 50, y: 50}}
          )
      ).then(res => {
        this.toggleLoading()
        this.listMessages.push({id: res.ref.id, ref: res.ref, msg: msg, x: 50, y: 50});
      })
    },
    async modifyMsg(index, old, msg) {
      this.toggleLoading()
      faunacl.query(
          fauna_query.Update(
              old.ref,
              {data: {x: msg.x, y: msg.y}}
          )
      ).then(() => {
        this.toggleLoading()
        this.listMessages[index].x = msg.x
        this.listMessages[index].y = msg.y
      }).catch(() => {
        this.toggleLoading()
      })
    },
    async deleteMsg(index) {
      this.toggleLoading()
      faunacl.query(
          fauna_query.Delete(
              this.listMessages[index].ref
          )
      ).then(() => {
        this.toggleLoading()
        this.listMessages.splice(index, 1);
      })
    },
    toggleLoading() {
      $("#loading").stop(true).fadeToggle()
    }
  },
  created() {
    document.title = 'Messages board'
    faunacl.query(
        fauna_query.Map(
            fauna_query.Paginate(fauna_query.Documents(fauna_query.Collection("challenges-vue"))),
            fauna_query.Lambda("ref", fauna_query.Get(fauna_query.Var("ref")))
        )
    ).then(res => {
      if (res.data.length > 0) {
        this.listMessages = res.data.map(e => {
          return {id: e.ref.value.id, ref: e.ref, msg: e.data.msg, x: e.data.x, y: e.data.y}
        })
      }
      this.toggleLoading()
    })
  }
}
</script>

<style scoped>
div#add-btn {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>