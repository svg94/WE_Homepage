<template>
  <div class="middleMain" id="middleMain">
    <h1 id="h1mid">{{ getSubtopic }}</h1>
    <button id="solutionB">Visit Solution</button>
    <div id="MainText" v-for="(question, index) in getQuestions" :key="index">
      <p class="question">{{question}}</p>
      <p class="answer" >{{getAnswers[index]}}</p>
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
    },
    buttonNecessary(){
      return true;      //TODO: Add Button only when theres a link showing sum solution.
    }
  }
}
</script>

<style scoped>
.middleMain{
  grid-column: 4 / span 14;
  overflow: auto;
  text-align: left;
  background-color: #e9e9e9;
  border-bottom: 1px solid #999999;
  border-top: 1px solid #999999;
}
.middleMain::-webkit-scrollbar{
  background: transparent;
  display: none;

}
.middleMain::-webkit-scrollbar-thumb{
  background-color: rgba(0, 0, 0, 0.5);
}
#h1mid{
  text-align: left;
  padding-right: 15px;
  padding-left: 15px;
}
#solutionB{
  /*display: none;*/
  background-color: #a2a2a2;
  width: 30%;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  color: white;
}
#solutionB:hover{
  background-color: #858585;
}
#solutionB:active{
  background-color: #568679;
  transform: rotate(3deg);
}
#MainText{
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
}
.question{
  font-weight: bold;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
.answer{
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

</style>
