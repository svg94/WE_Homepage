<template>
  <div class="header">
    <h1 class="head1">WWW-Navigator</h1>
    <div class="head2">
        <button v-for="(value,key) in getData" :key="value[0]" class="hB" @click="displayLeftButtons($event)">{{key}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods:{
    displayLeftButtons(event){
      const topic = event.target.innerText;
      this.$store.commit("emptyTopics");
      this.$store.commit("setCurrentTopic",topic);
    }
  },
  computed:{
    getData(){
      return this.$store.state.webdata;
    }
  }
}
</script>

<style scoped>
  .header{
    background-color: #6ab8a2;
    grid-row: 1;
    /*text-shadow: 2px 2px 5px #8d8d8d;*/
    display: grid;
    grid-template-columns: auto;
    grid-template-rows:50% 50% ;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  .head1{
    margin-top: 21px;
    margin-bottom: 21px;
  }
  .head2{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .hB{
    padding: 5px 10px;
    background-color: #7fb0a3;
    border-radius: 8px;
    margin-left: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-bottom: 3px solid #002b28;
    border-left: 1px solid #7a7a7a;
    border-top: 1px solid #c3c3c3;
    border-right: 1px solid #d2d2d2;
    font-family: "Arial";
    color: #000000;
  }
  .hB:hover{
    background-color: #729f93;
  }
  .hB:active{
    background-color: #568679;
    transform: rotate(5deg);
  }

</style>
