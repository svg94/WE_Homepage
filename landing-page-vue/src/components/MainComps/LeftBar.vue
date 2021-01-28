<template>
  <div class="leftBar">
    <button id="bleft1" class="bleft"></button>
    <button id="bleft2" class="bleft"></button>
    <button id="bleft3" class="bleft"></button>
    <button id="bleft4" class="bleft"></button>
    <button id="bleft5" class="bleft"></button>
  </div>
</template>

<script>
export default {
  name: "LeftBar"
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
  display: none;
  align-self: center;
}
.bleft:hover{
  background-color: #696969;
}
.bleft:active{
  background-color: #568679;
  transform: rotate(5deg);
}
#bleft1{
  margin-top: 10px;
}
</style>
