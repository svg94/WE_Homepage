<template>
  <div class="rightBar">
    <p id="headP">Additional Information: Links to external sources</p>
    <p v-for="(ref,index) in getRefs" :key="ref" :id="'source'+index" class="refs">{{ref}}</p>
  </div>
</template>

<script>
export default {
  name: "RightBar",
  computed:{
    getRefs(){
      let topic = this.$store.state.currentTopic;
      let subtopic = this.$store.state.currentSubTopic;
      let printedText = "";
      if(topic !== "" && subtopic !== ""){
        printedText = this.$store.state.webdata[topic][subtopic]["references"];
        //console.log(printedText.toString());
      }
      return printedText;
    }
  }
}
</script>

<style scoped>
.rightBar{
  grid-column: 18 / span 3;
  background-color: #d0d0d0;
  color: black;
  border: 1px solid #999999;
}
#headP{
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
}
.refs{
  margin-left: 5px;
  margin-right: 5px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
@media screen and (max-width: 767px) {
  .rightBar{
    grid-column: 1;
    grid-row: 18 / span 3;
  }
}
</style>
