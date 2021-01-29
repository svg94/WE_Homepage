<template>
  <div class="Main">  <!-- vorher class middleBox-->
    <LeftBar></LeftBar>
    <Middle></Middle>
    <RightBar></RightBar>
  </div>
</template>

<script>
import LeftBar from "@/components/MainComps/LeftBar";
import Middle from "@/components/MainComps/Middle";
import RightBar from "@/components/MainComps/RightBar";
export default {
  name: "Main",
  components:{
    LeftBar,
    Middle,
    RightBar
  }
}
</script>

<style scoped>
.Main{
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(20,5%);
  overflow-x: hidden;
}
@media screen and (max-width: 767px) {
  .Main{
    /*flex-direction: column;*/
  }
}
</style>
