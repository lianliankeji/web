<template>
  <div id="freeSettled" class="freeSettled">
    <div class="VerticleCenter">
      <div class="common-header">
        <h3 class="title">申请入驻</h3>
        <div class="line"></div>
      </div>
      <div class="content flex-row">
        <div>
          <img class="code" src="../../assets/image/settleCode.png" />
          <div class="info">
            <span class="info-left">扫二维码</span>
            <span>快速申请</span>
          </div>
        </div>
        
        <div class="guize">
          <p class="guize-item">北上广深的企业数量<span class="strong" style="">200万+</span>市场空间巨大</p>
          <p class="guize-item">白领<span class="strong">8+小时</span>消费场景，目标人群的<span class="strong">信用级高</span></p>
          <p class="guize-item">互联网公司Pantry茶水间文化升温</p>
          <p class="guize-item">休闲食品行业2016年<span class="strong">8224亿</span>元,2020年达<span class="strong">12984亿</span>元</p>
          <p class="guize-item"><span class="strong">9亿</span>微信用户移动扫码支付习惯养成</p>
          <p class="guize-item">数据沉淀精准营销<span class="strong">SKU优化</span> 供应管理  供应链金融</p>
          <p class="guize-item">便利店竞争激烈,无人货架渠道延伸成新赛道</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

import CommonHeader from 'components/commonheader/CommonHeader.vue'
export default {
  name: 'freeSettled',
  data () {
    return {

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
.freeSettled{
  position: relative;
  height: 785px;
  @include Background("freeSettledBg.png",center center);
  .common-header{

    padding-bottom:80px;
    .title{
      font-size: $font-large;
      text-align: center;
    }
    .line{
      width: 240px;
      height: 2px;
      background-color: #333333;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
  
  .content{
    width: 1000px;
    margin: 0 auto;
    justify-content: space-between;
    .code{
      width: 150px;
      height: 150;
    }
    .info{
      font-size: 16px;
      color: #333333;
      margin-top: 30px;
      .info-left{
        margin-right: 1em;
      }
    }
    .guize{
      .guize-item{
        font-size: 18px;
        color: #333333;
        line-height: 54px;
        .strong{
          color: #1695fd;
          font-size: 36px;
        }
        &:first-of-type{
          margin-top: -20px;
        }
      }

    }
  }
}
</style>
