<template>
  <div id="contact" class="contact">
    <div class="content flex-row VerticleCenter">
      <ul class="info">
        <li class="info-item" v-for="item in infoList">{{item}}</li>
      </ul>
      <img src="../../assets/image/contact.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      infoList: [
        "联系我们",
        "微信：maidouer1984",
        "电话：15801234157",
        "地址：北京市朝阳区呼家楼街道光华路5号院1号楼26层",
        "北京链链信息技术有限公司  京ICP备16055742号-3"
      ]
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
	height: 360px;
  color: #e8ebeb;
  background-color: #2e3235;
	.content{
    width: 1000px;
    margin: 0 auto;
    justify-content: space-between;
    .info{
      .info-item{
        margin-top: 30px;
        font-size: 16px;
      }
    }
  }
}
</style>
