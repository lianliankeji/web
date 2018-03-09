<template>
  <div id="contact" class="contact">
    <h3 class="header">联系我们</h3>
    <div class="tel">电话：(010) 8587 5500 - 8617</div>
    <div class="line"></div>
    <p class="compony">北京链链信息技术有限公司 京ICP备16055742号-3</p>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";
.contact{
  position: relative;
	padding: 40px 20px 0;
  background: #E8EFF8;
  text-align: center;

  .header{
    font-size: 18px;
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

  .tel{
    margin-top: 25px;
    font-size: 15px;
    color: #999999;
  }
	
  .line{
    height: 1px;
    background-color: #fff;
    margin-top: 40px;
    transform: scaleY(0.5);
  }

  .compony{
    font-size: 12px;
    color: #999999;
    padding: 20px 0;
    text-align: center;
  }
}
</style>
