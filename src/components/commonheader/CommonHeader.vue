<template>
  <div class="common-header">
    <img src="../../assets/image/spotLeft.png">
    <h3 class="title">{{title}}</h3>
    <img src="../../assets/image/spotRight.png">
  </div>
</template>

<script>
export default {
  name: 'common-header',
  data () {
    return {
      
    }
  },
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.common-header{
  @include flex(row,center)
  padding-bottom:80px;
  .title{
    font-size: $font-large;
    margin: 0 50px;
  }
}

</style>
