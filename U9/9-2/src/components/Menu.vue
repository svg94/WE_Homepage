<template>
  <div id="flexbox" v-bind:class="{horizontal: isHorizontal, vertical: isVertical}">

    <a href="">Start</a>
    <a href="">Story</a>
    <a href="">Solutions</a>
    <a href="">Ending</a>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props:{
    horizontal: Boolean
  },
  data(){
    return{
      isHorizontal: this.horizontal,
      isVertical: !this.horizontal
    }
  }
}
</script>

<style scoped>
a{
  padding: 5px;
  background-color: #6ab8a2;
}
a:hover{
  background-color: #91ffe3;
}
#flexbox{
  display: flex;
}
.horizontal{
  flex-direction: row;
}
.horizontal a{
  padding: 10px;
}
.vertical{
  flex-direction: column;
}
.vertical a{
  min-width: 200px;
  width: 20%;
}

</style>
