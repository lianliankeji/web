<template>
  <div id="about" class="about">
    <div class="content VerticleCenter">
      <common-header title="关于我们"></common-header>
      <p class="center">“快点”致力为企业提供极致、便利的零食自助购物体验，让员工感受到企业的人性化关怀，提升员工福利待遇及工作热情。业务覆盖国贸CBD地区高端商务写字楼多家金融、互联网企业团队成员来自百度、京东、华为、宇信科技等知名互联网金融科技公司，致力于利用大数据、人工智能与区块链技术给用户带来全新的智能零售购物体验。</p>
    </div>
    
  </div>
</template>

<script>
import CommonHeader from 'components/commonheader/CommonHeader.vue'
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

.about{
	height: 520px;
	background-color: #fff;
  position: relative;
  .content{
    width: 1200px;
    margin: 0 auto;
    
    .center{
      line-height: 2.5;
      padding: 0 100px;
    }
  } 
}
</style>
