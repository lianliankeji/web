<template>
  <div class="buy-ability">
    <div class="content VerticleCenter">
      <common-header class="common-header" title="购物流程"></common-header>
      <ul class="process-content flex-row">
        <li class="process-item" v-for="item in abilityList">
          <img :src='item.img' />
          <span class="info">{{item.info}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import CommonHeader from 'components/commonheader/CommonHeader.vue'
import buy1 from '@/assets/image/buy1.png'
import buy2 from '@/assets/image/buy2.png'
import buy3 from '@/assets/image/buy3.png'

export default {
  name: 'buy-ability',
  data () {
    return {
      abilityList:[
        {
          img:buy1,
          info:'微信扫描二维码'
        },
        {
          img:buy2,
          info:'扫描商品条形码'
        },
        {
          img:buy3,
          info:'微信支付完成购物'
        }
      ]
    }
  },
  components:{
    CommonHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.buy-ability{
	height: 650px;
	background-color: #f0f9ff;
  position: relative;
  .content{
    margin: 0 auto;
    .process-content{
      margin-top: 50px;
      justify-content: space-around;
      .process-item{
        .info{
          display: block;
          width: 100%;
          text-align: center;
          margin-top: 62px;
        }
      }
    }
    
  }
}
</style>
