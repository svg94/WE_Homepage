<template>
  <div class="footer">
    <div id="f1" class="f"><p id="pf">Footer:</p></div>
    <div id="f2" class="f"><a href="">Sitemap</a></div>
    <div id="f3" class="f"><a href="/~bsavic2s/">Home</a></div>
    <div id="f4" class="f"><a href="">News</a></div>
    <div id="f5" class="f"><a href="">Contact</a></div>
    <div id="f6" class="f"><a href="">About</a></div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.footer{
  background-color: #727272;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: 1px solid #8c8c8c;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
a{
  color: white;
  font-size: 20px;
}
.f{
  padding: 5px;
}
#pf{
  font-size: 30px;
}
</style>
