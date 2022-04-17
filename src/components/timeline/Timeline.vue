<template>
  <div id="timeline">
    <TimestampComponent :timestamp="timestamps[0]" />
  </div>
  <WhatIsIt v-if="showWhatIsIt" cookie="whatIsItTimeline" :infos="infosWhatIsIt" />
</template>

<script>
import TimestampComponent from "@/components/timeline/TimestampComponent";
import WhatIsIt from "@/components/WhatIsIt";
export default {
  name: "TimelineComponent",
  components: {WhatIsIt, TimestampComponent},
  data() {
    return {
      timestamps: [
        {
          id: 0,
          title: "Timeline",
          date: "2020-01-01",
          height: 50,
          x: 50,
          y: 50
        }
      ],
      showWhatIsIt: true, //document.cookie.indexOf("whatIsItTimeline") === -1,
      infosWhatIsIt: [
          "This is still under construction. 🚧"
      ]
    };
  },
  mounted() {
    document.title = "The Timeline"
  }
}
</script>

<style scoped lang="scss">
#timeline {
  height: 50%;
  width: 100%;
  border-bottom: 5px solid var(--white);
  cursor: move;
  position: relative;
  filter: blur(5px);
}

#not-finish {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--very-dark-blue-trans);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    width: max-content;
    height: max-content;
  }
}
</style>