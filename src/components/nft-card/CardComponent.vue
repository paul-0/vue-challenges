<template>
  <div :id="id" class="card">
    <div id="nft">
      <div id="img">
        <img id="nft-img" :src="getSrc(nft.image)" alt="NFT image">
        <span id="icon-view" @click="showImage(nft.image)">
          <img src="@/assets/images/icon-view.svg" alt="">
        </span>
      </div>
      <h3 id="title"><a :href="nft.url" target="_blank">{{nft.title}} {{nft.id}}</a></h3>
      <div id="info">
        <p id="description">{{nft.description}}</p>
        <span>
          <span id="price">
            <img src="@/assets/images/icon-ethereum.svg"  alt="Icon of Ethereum"/>
            <span>{{nft.price}}</span>
          </span>
          <span>
            <img src="@/assets/images/icon-clock.svg"  alt=""/>
            <span>{{getDayLeft()}} days left</span>
          </span>
        </span>
      </div>
    </div>
    <div id="creator">
      <img id="avatar" :src="getSrc(nft.creator.avatar)" alt="Creator avatar">
      Creation of
      <a target="_blank" :href="nft.creator.url">{{nft.creator.name}}</a>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: "CardComponent",
  props: {
    nft: {
      id: String,
      title: String,
      description: String,
      image: String,
      price: String,
      creator: {
        name: String,
        avatar: String
      },
      expireDate: Date
    },
    id: String,
    showImage: Function
  },
  methods: {
    getDayLeft() {
      let date = new Date(this.nft.expireDate)
      return Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    },
    getSrc(img) {
      if (img)
        return require('@/assets/images/' + img)
      else return ""
    }
  },
  mounted() {
    $('#'+this.id + " #info").hide()
    $('#'+this.id + " #icon-view").hide()

    let info = $('#'+this.id + ' #info')
    $("#"+this.id).hover(() => {
      info.stop(true).animate({
        height: 'toggle'
      }, 300)
    })

    let icon = $('#'+this.id + ' #icon-view')
    $("#"+this.id + " #img").hover(() => {
      icon.stop(true).fadeToggle()
    })
  }
}
</script>

<style scoped lang="scss">
.card {
  background-color: var(--dark-blue);
  color: var(--soft-blue);
  padding: 1rem;
  width: 350px;
  max-height: 600px;
  border-radius: 1rem;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: white 0 0 20px;
  }
}

#nft {
  #title {
    font-size: 1.5rem;
    margin-bottom: 0;
    cursor: pointer;
    width: max-content;
    a {
      color: var(--white);
    }
  }
  #description {
    margin-bottom: 0;
  }
  #info > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    font-weight: bold;
    background-color: var(--dark-blue);

    span {
      display: flex;
      gap: 0.5rem;
    }
    #price {
      color: var(--cyan);
    }
  }

  #img {
    position: relative;
    cursor: pointer;

    * {
      border-radius: 1rem;
    }
    #nft-img {
      width: 100%;
      height: 100%;
    }

    #icon-view {
      position: absolute;
      background-color: transparentize(hsl(178, 100%, 50%), 0.7);
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 5rem;
      }
    }
  }
}

#creator {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-top: var(--blue) 1px solid;
  padding-top: 1rem;
  margin-top: 1rem;

  #avatar {
    height: 50px;
    border: white solid 1px;
    border-radius: 100%;
  }
  a {
    color: var(--white);
    font-weight: bold;
    margin-left: -10px;
    cursor: pointer;
  }
}

</style>