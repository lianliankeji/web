<template>
  <div class="buy-ability">
      <h3 class="header">合作企业</h3>
      <ul class="process-content ">
        <li class="process-item" v-for="item in abilityList">
          <img :src='item.img' />
          <span style="opacity: 0;" class="info">{{item.info}}</span>
        </li>
      </ul>
  </div>
</template>

<script>

import img1 from '@/assets/imageMobile/xinhua.png'
import img2 from '@/assets/imageMobile/aiyi.png'
import img3 from '@/assets/imageMobile/wensli.png'

export default {
  name: 'buy-ability',
  data () {
    return {
      abilityList:[
        {
          img:img1,
          info:'新华联合冶金投资集团有限公司'
        },
        {
          img:img2,
          info:'北京艾亿新融资本管理有限公司'
        },
        {
          img:img3,
          info:'万事利集团有限公司'
        },
      ]
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

.buy-ability{
  padding: 40px 20px 60px 20px;
  background-color: #fff;
  .header{
    text-align: center;
  }
  // .content{
  //   margin: 0 auto;
  //   .process-content{
  //     margin-top: 50px;
  //     justify-content: space-between;
  //     .process-item{
  //       text-align: center;
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
