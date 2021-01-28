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
  display: flex;
  flex: 75%;
}
@media screen and (max-width: 767px) {
  .Main{
    flex-direction: column;
  }
}
</style>
