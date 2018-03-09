<template>
  <div class="buy-ability-mobile">
    <div class="content-mobile VerticleCenter">
      <h3 class="header">购物流程</h3>
      <ul class="process-content">
        <li class="process-item" v-for="(item,index) in abilityList">
          <img class="img" :src='item.img' />
          <div>
            <h3 class="title">{{item.prompt}}</h3>
            <span class="info">{{item.info}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import buy1 from '@/assets/imageMobile/into.png'
import buy2 from '@/assets/imageMobile/sao.png'
import buy3 from '@/assets/imageMobile/pay.png'

export default {
  name: 'buy-process-mobile',
  data() {
    return {
      abilityList: [
        {
          img: buy1,
          prompt: "进入小程序",
          info: '微信扫描左侧二维码'
        },
        {
          img: buy2,
          prompt: "扫码购物",
          info: '扫描商品包装条形码'
        },
        {
          img: buy3,
          prompt: "微信支付",
          info: '支付订单完成购物'
        }
      ]
    }
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.buy-ability-mobile {
  height: 320px;
  box-sizing: border-box;
  padding: 40px 20px;
  background-color: #E8EFF8;
  position: relative;


  .header {
    font-size: 18px;
    color: #333333;
    text-align: center;
    position: relative;

    &:after{
      content: "";
      display: block;
      position: absolute;
      bottom: -8px;
      width: 26px;
      height: 2px;
      background-color: #D2D2D2;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  .process-content {
    margin-top: 34px;
    .process-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      .img {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-right: 35px;
      }

      .title{
        font-size: 14px;
        color: #333333;
      }

      .info{
        font-size: 12px;
        color: #666666;
        margin-top: 3px;
      }

      &:nth-of-type(2) {
        margin: 30px 0;
      }
    }
  } // position: relative;
  // .content{
  //   margin: 0 auto;
  //   .process-content{
  //     margin-top: 50px;
  //     justify-content: space-around;
  //     .process-item{
  //       .info{
  //         display: block;
  //         width: 100%;
  //         text-align: center;
  //         margin-top: 62px;
  //       }
  //     }
  //   }
  // }
}
</style>
