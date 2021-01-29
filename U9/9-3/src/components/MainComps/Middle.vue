<template>
  <div class="middleMain" id="middleMain">
    <h1 id="h1mid">{{ getSubtopic }}</h1>
    <p id="MainText">{{getText}}</p>
  </div>
</template>

<script>
export default {
  name: "Middle",
  computed:{
    getSubtopic(){
      return this.$store.state.currentSubTopic;
    },
    getText(){
      let topic = this.$store.state.currentTopic;
      let subtopic = this.$store.state.currentSubTopic;
      let printedText = "";
      if(topic !== "" && subtopic !== ""){
        printedText = this.$store.state.webdata[topic][subtopic]["content"];
        console.log(printedText);
      }
      return printedText;
    }
  }
}
</script>

<style scoped>
.middleMain{
  flex: 70%;
  overflow: auto;
  text-align: left;
  background-color: #e9e9e9;
  border-bottom: 1px solid #999999;
  border-top: 1px solid #999999;
}
#h1mid{
  text-align: left;
  padding-right: 15px;
  padding-left: 15px;
}
#MainText{
  margin-left: 15px;
  margin-right: 15px;
}

</style>
