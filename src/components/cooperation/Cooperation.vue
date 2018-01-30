<template>
  <div class="buy-ability">
    <div class="content VerticleCenter">
      <common-header class="common-header" title="合作企业"></common-header>
      <ul class="process-content flex-row">
        <li class="process-item" v-for="item in abilityList">
          <img :src='item.img' />
          <span style="opacity: 0;" class="info">{{item.info}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import CommonHeader from 'components/commonheader/CommonHeader.vue'
import img1 from '@/assets/image/cooperation1.png'
import img2 from '@/assets/image/cooperation2.png'
import img3 from '@/assets/image/cooperation3.png'
import img4 from '@/assets/image/cooperation4.png'

export default {
  name: 'buy-ability',
  data () {
    return {
      abilityList:[
        {
          img:img1,
          info:'北京链链信息技术有限公司'
        },
        {
          img:img2,
          info:'万事利集团有限公司'
        },
        {
          img:img3,
          info:'新华联合冶金投资集团有限公司'
        },
        {
          img:img4,
          info:'北京艾亿新融资本管理有限公司'
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
  height: 530px;
  background-color: #fff;
  position: relative;
  .content{
    margin: 0 auto;
    .process-content{
      margin-top: 50px;
      justify-content: space-between;
      .process-item{
        text-align: center;
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
