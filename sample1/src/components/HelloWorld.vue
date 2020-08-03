<template>
  <div id="pics">
    <img
      v-for="item in pics"
      :key="item.id"
      :src="item.pic"
      :class="{ redLine: jsMethods(item.id) }"
      @click="selectImage(item.id)"
    />
  </div>
</template>

<script>
export default {
  name: "HellowWord",
  data() {
    return {
      imageId: null,
      pics: [
        { name: "1", id: 1, pic: "/img/1.jpeg" },
        { name: "2", id: 2, pic: "/img/2.jpeg" },
        { name: "3", id: 3, pic: "/img/3.jpeg" },
        { name: "4", id: 4, pic: "/img/4.jpeg" },
        { name: "5", id: 5, pic: "/img/5.jpeg" },
        { name: "6", id: 6, pic: "/img/6.jpeg" },
        { name: "7", id: 7, pic: "/img/7.jpeg" },
        { name: "8", id: 8, pic: "/img/8.jpeg" },
        { name: "9", id: 9, pic: "/img/9.jpeg" },
      ],
    };
  },

  methods: {
    jsMethods: function(id) {
      return id == this.imageId;
    },
    selectImage: function(id) {
      this.imageId = id;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h1 {
  color: red;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1px;
  position: absolute;
  margin: 5% 20% auto;
}
#pics {
  width: 70vw;
  height: 70vh;
}
#pics img {
  width: 30%;
  height: 26vh;
  border-radius: 16px;
}
/* class for the selected picture  */
.redLine {
  border: 3px solid red;
  width: 100%;
}
</style>
