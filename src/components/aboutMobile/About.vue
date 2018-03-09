<template>
  <div id="about" class="about">
      <h3 class="header">关于我们</h3>
      <div class="desc">
        <p>快点致力为企业提供极致、便利的零食自助购物体验，让员工感受到企业的人性化关怀，提升员工福利待遇及工作热情。</p>
        <p>业务覆盖国贸CBD地区高端商务写字楼多家金融、互联网公司，致力于利用大数据、人工智能给用户带来全新的智能零售购物验。</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.about{
  background-color: #fff;
  padding: 40px 20px 0 20px;
  position: relative;

  .header{
    text-align: center;
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

  .desc{
    margin-top: 40px;
    color: #333333;
    font-size: 14px;
    line-height: 1.5;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid #E8EFF8;
    text-indent: 2em;
  }

}
</style>
