<template>
  <div>
    <input type="text" v-model="inp">
    <p>{{charlen}}</p>
    <p>{{whitespaces}}</p>
    <p>{{wordscount}}</p>
  </div>
</template>

<script>
export default {
  name: "textio",
  data(){
    return{
      inp: ""
    }
  },
  computed:{
    charlen: function (){
      let noWspace = this.inp.replace(/\s/g, "");
      return noWspace.length;
    },
    whitespaces: function (){
      let wSpace = this.inp.split(" ").length-1;
      return wSpace;
    },
    wordscount: function (){
      if (this.inp === ""){return 0}
      let wordCount = this.inp.match(/(\w+)/g).length;
      return wordCount;}
  }
}
</script>

<style scoped>

</style>
