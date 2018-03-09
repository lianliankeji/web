<template>
  <div id="freeSettled" class="freeSettled">
    <h3 class="header">申请入驻</h3>
    <img class="code" src="../../assets/imageMobile/qrcode.png" />
    <img class="mubiao" src="../../assets/imageMobile/mubiao.png" />
    <img class="amounts" src="../../assets/imageMobile/amounts.png" />
    <img class="hobby" src="../../assets/imageMobile/hobby.png" />
    <img class="enviro" src="../../assets/imageMobile/enviro.png" />
    <img class="SKU" src="../../assets/imageMobile/SKU.png" />
    <div class="line"></div>

  </div>
</template>

<script>

import CommonHeader from 'components/commonheader/CommonHeader.vue'
export default {
  name: 'freeSettled',
  data() {
    return {

    }
  },
  components: {
    CommonHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";
.freeSettled {
  position: relative;
  height: 344px;
  background-color: #E8EFF8;
  padding: 40px 20px; 
  box-sizing: border-box;
  .header {
    font-size: 18px;
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

  .code {
    position: absolute;
    top: 126px;
    left: 50%;
    transform: translateX(-50%);
    width: 87px;
    height: 89px;
  }

  .mubiao{
    position: absolute;
    left: 36px;
    top: 119px;
    width: 117px;
    height: 32px;
  }

  .amounts{
    position: absolute;
    top: 120px;
    right: 20px;
    width: 138px;
    height: 48px;
  }

  .hobby{
    position: absolute;
    left: 19px;
    top: 206px;
    width: 157px;
    height: 32px;
  }

  .enviro{
    position: absolute;
    right: 30px;
    top: 195px;
    width: 131px;
    height: 32px;
  }

  .SKU{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 289px;
    height: 38px;
  }

  .line{
    height: 2px;
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    transform: scaleY(0.5);
  }

  .content {
    width: 1000px;
    margin: 0 auto;
    justify-content: space-between;
    .code {
      width: 87px;
      height: 89px;
    }
    .info {
      font-size: 16px;
      color: #333333;
      margin-top: 30px;
      .info-left {
        margin-right: 1em;
      }
    }
    .guize {
      .guize-item {
        font-size: 18px;
        color: #333333;
        line-height: 54px;
        .strong {
          color: #1695fd;
          font-size: 36px;
        }
        &:first-of-type {
          margin-top: -20px;
        }
      }
    }
  }
}
</style>
