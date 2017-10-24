<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #333333;
  font-size: 18px;
  /*margin-top: 60px;*/
}
.flex-row{
  display: flex;
  flex-direction: row;
}

</style>
