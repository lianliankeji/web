<template>
  <div class="goods-advantage">
    <div class="content VerticleCenter">
      <img src="../../assets/image/goodsPic.png">
      <side-header class="side-header" :goodsOk='goodsOk' title="商品优势" :info="info"></side-header>
    </div>
  </div>
</template>

<script>
import SideHeader from 'components/sideheader/SideHeader.vue'
export default {
  name: 'goods-advantage',
  data () {
    return {
      goodsOk:true,
      info: ["正规渠道","品质严选","价格诱人"]
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

.goods-advantage{
	height: 790px;
  
	@include Background('goodsBg.png');
  .content{
    position: relative;
    @include Background('goodsPot.png',right center);
    .side-header{
      position: absolute;
      right: 230px;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%);
    }
  }
}
</style>
