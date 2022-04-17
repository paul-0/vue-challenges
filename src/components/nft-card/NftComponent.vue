<template>
  <div id="nft-root">
    <span class="material-icons-round icon left" @click="turnLeft">
      chevron_left
    </span>
    <h1 id="no-nft" v-if="nfts.length<=0">No NFT here.</h1>
    <CardComponent v-else id="card" :nft="nftShow" :show-image="showImage" />
    <span class="material-icons-round icon right" @click="turnRight">
      chevron_right
    </span>
    <ImageViewer class="img-viewer" :image="img.src" :close="closeImage" />
  </div>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    Coded by <a href="https://github.com/paul-0" target="_blank">Paul Devilliers</a>.
  </div>
  <WhatIsIt v-if="showWhatIsIt" cookie="whatIsItNFT" :infos="infoWhatIsIt" />
</template>

<script>
import $ from 'jquery'
import CardComponent from "./CardComponent"
import ImageViewer from "./ImageViewer";
import WhatIsIt from "@/components/WhatIsIt";

export default {
  name: 'NftComponent',
  components: {WhatIsIt, ImageViewer, CardComponent},
  data() {
    return {
      nfts: [],
      nftShow: {},
      index: 0,
      img: {
        src: ''
      },
      showWhatIsIt: document.cookie.indexOf('whatIsItNFT') === -1,
      infoWhatIsIt: [
          "This is just a simple NFT Cards visualiser",
          "There's two cards you can slide",
          "And cool animations"
      ]
    }
  },
  methods: {
    turnLeft() {
      this.index--
      if (this.index<0)
        this.index = this.nfts.length-1

      let card = $("#card")
      card.animate({
        opacity: 0
      })
      setTimeout(() => {
        this.nftShow = this.nfts[this.index]
        card.animate({
          opacity: 1
        })
      }, 650)
    },
    turnRight() {
      this.index++
      if (this.index>=this.nfts.length)
        this.index = 0

      let card = $("#card")
      card.animate({
        opacity: 0
      })
      setTimeout(() => {
        this.nftShow = this.nfts[this.index]
        card.animate({
          opacity: 1
        })
      }, 650)
    },
    closeImage() {
      $(".img-viewer").fadeOut()
    },
    showImage(src) {
      this.img.src = src
      $(".img-viewer").fadeIn()
    }
  },
  mounted() {
    document.title = "My NFTs"
    this.nfts = require("@/assets/nfts.json")
    this.nftShow = this.nfts[0]
    $(".img-viewer").hide()
  }
}
</script>

<style lang="scss">

#nft-root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  a:hover {
    color: var(--cyan) !important;
  }
}

p {
  font-size: 18px;
}

a {
  text-decoration: none;
}

span.icon {
  font-size: 80px;
  color: var(--soft-blue);
  cursor: pointer;
  background-color: var(--dark-blue);
  border-radius: 100%;
  margin: 1rem;
  transition: all 0.3s ease-in-out;
  user-select: none;

  &:hover {
    transform: scale(1.2);
    box-shadow: white 0 0 10px;
  }
}
#no-nft {
  color: var(--soft-blue);
}

#card {
  z-index: 10;
}
.img-viewer {
  z-index: 20;
}
#nft-root .attribution {
  color: var(--white);
  font-size: 11px;
  text-align: center;
  position: absolute;
  bottom: 1rem;
  width: 100%;
}
#nft-root .attribution a { color: hsl(228, 45%, 44%); }

@media screen and (max-width: 620px), screen and (max-height: 600px) {
  span.icon {
    position: absolute;
    bottom: 3rem;
    &.left {
      left: 1rem;
    }
    &.right {
      right: 1rem;
    }
  }

  #nft-root {
    #card {
      position: absolute;
      top: 3rem;
      left: 0;
      right: 0;
      margin: auto;
      box-sizing: border-box;
    }
  }
}
</style>
