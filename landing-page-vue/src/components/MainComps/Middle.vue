<template>
  <div class="middleMain" id="middleMain">
    <h1 id="h1mid">{{ getSubtopic }}</h1>
    <div id="MainText" v-for="(question, index) in getQuestions" :key="index">
      <p class="question">{{question}}</p>
      <p class="answer">{{getAnswers[index]}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Middle",
  methods:{
    getText(str){
      let topic = this.$store.state.currentTopic;
      let subtopic = this.$store.state.currentSubTopic;
      let printedText = "";
      if(topic !== "" && subtopic !== ""){
        printedText = this.$store.state.webdata[topic][subtopic]["content"][str];
        console.log(printedText);
      }
      return printedText;
    }
  },
  computed:{
    getSubtopic(){
      return this.$store.state.currentSubTopic;
    },
    getQuestions(){
      return this.getText("questions");
    },
    getAnswers(){
      return this.getText("answers");
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
  margin-bottom: 30px;
}
.question{
  font-weight: bold;
}
</style>
