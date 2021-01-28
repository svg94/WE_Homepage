<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  min-height: 800px;
  height: 100vh;
  display: grid;
  grid-template-rows: 10% 85% 5%;
  grid-template-columns: auto;
}
@media screen and (max-height: 940px){
  #app{
    grid-template-rows: 13% 80% 5%;
  }
  @media screen and (max-width: 990px) {
    #app{
      grid-template-rows: 15% 80% 5%;
    }
  }

}
</style>
