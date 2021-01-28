<template>
  <div class="rightBar">
    <p>Additional Information: Links to external sources</p>
    <p id="source"></p>
    <p id="">Random Funfact:</p>
    <p id="rdmFunFact"></p>
  </div>
</template>

<script>
export default {
  name: "RightBar"
}
</script>

<style scoped>
.rightBar{
  flex: 15%;
  background-color: #d0d0d0;
  color: black;
  border: 1px solid #999999;
}
#rdmFunFact{
  align-self: baseline;
}
</style>
