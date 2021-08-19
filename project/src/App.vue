<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Check out the top 20 stories!"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  /*text-align: center;*/
  /*color: rgba(27, 128, 15, 0.95);*/
  color: #6c6c6c;
  margin-top: 60px;
  box-sizing: border-box;
  padding: 5vw;
}
img {
  width: 350px;
}
body{
  background-color: #1e1e1e;
}
</style>
