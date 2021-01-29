<template>
  <div class="leftBar">
    <button v-for="(text,index) in buttons" :key="text" class="bleft" :id="'bleft'+index" @click="pickSubtopic($event)">{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "LeftBar",
  methods:{
    pickSubtopic(event){
      let subtopic = event.target.innerText;
      this.$store.commit("setCurrentSubTopic",subtopic);
    }
  },
  computed:{
    buttons(){
      let topic = this.$store.state.currentTopic;
      let subtopics= [];
      if(topic !== ""){
        subtopics = Object.keys(this.$store.state.webdata[topic]);
      }
      return subtopics;
    },
    getTopic(){
      return this.$store.state.currentTopic;
    }
  }
}
</script>

<style scoped>
.leftBar{
  flex: 15%;
  background-color: #d0d0d0;
  border: 1px solid #999999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: black;
}
.bleft{
  background-color: #949494;
  position: relative;
  width: 60%;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  color: white;
  display: inline-block;
  align-self: center;
}
.bleft:hover{
  background-color: #696969;
}
.bleft:active{
  background-color: #568679;
  transform: rotate(5deg);
}
#bleft0{
  margin-top: 10px;
}
</style>
