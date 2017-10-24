<template>
  <div class="ability-advantage">
    <div class="content">
      <side-header class="side-header" title="能力优势" :info="info"></side-header>
      <img class="ability-picture" src="../../assets/image/abilityPic.png">
    </div>
  </div>
</template>

<script>
import SideHeader from 'components/sideheader/SideHeader.vue'
export default {
  name: 'ability-advantage',
  data () {
    return {
      info: ["消费行为分析","进销存管理","供应链金融服务"]
    }
  },
  components:{
    SideHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.ability-advantage{
  .content{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    @include Background("abilityPot.png",left center)
    height: 700px;
    .side-header{
      position:absolute;
      left: 100px;
      top: 40%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
    .ability-picture{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
  }
  

}
</style>
