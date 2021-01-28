<template>
  <div class="middleMain" id="middleMain">
    <h1 id="h1mid">Überschrift</h1>
    <button class="bmid" id="midB">Visit Solution</button>

  </div>
</template>

<script>
export default {
  name: "Middle"
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
  padding-right: 15px;
  padding-left: 15px;
}
#midB{
  display: none;
  background-color: #a2a2a2;
  position: relative;
  width: 30%;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  color: white;
  display: none;
}
#midB:hover{
  background-color: #858585;
}
#midB:active{
  background-color: #568679;
  transform: rotate(3deg);
}
.mmp{
  padding-left: 15px;
  padding-right: 15px;
}
</style>
