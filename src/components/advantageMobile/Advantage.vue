<template>
  <div class="advantage">
    <div class="item" v-for="(item,index) in infos">
      <img class="signImg" :src="item.img" />
      <div>
        <h3 class="title">{{item.name}}</h3>
        <div class="elem" v-for="(elem,i) in item.detail">
          <img class="detailimg" :src="elem.img" />
          <div class="detailname">{{elem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideHeader from 'components/sideheader/SideHeader.vue'
import goodsAd from '../../assets/imageMobile/goodsAd.png'
import abilityAd from '../../assets/imageMobile/abilityAd.png'

import zhengguiqudao from '../../assets/imageMobile/zhengguiqudao.png'
import pinzhi from '../../assets/imageMobile/pinzhiyanxuan.png'
import jiage from '../../assets/imageMobile/jiageyouren.png'
import xiaofeixingwei from '../../assets/imageMobile/xiaofeixingwei.png'
import jinxiaocun from '../../assets/imageMobile/jinxiaocun.png'
import gongyinglian from '../../assets/imageMobile/gongyinglian.png'
export default {
  name: 'goods-advantage',
  data () {
    return {
      infos:[
        {
          name: "商品优势",
          img: goodsAd,
          detail:[
            {
              name: "正规渠道",
              img: zhengguiqudao
            },
            {
              name: "品质严选",
              img: pinzhi
            },
            {
              name: "价格诱人",
              img: jiage
            }
          ]
        },
        {
          name: "能力优势",
          img: abilityAd,
          detail:[
            {
              name: "消费行为分析",
              img: xiaofeixingwei
            },
            {
              name: "进销存管理",
              img: jinxiaocun
            },
            {
              name: "供应链金融",
              img: gongyinglian
            }
          ]
        }
      ]
    }
  },
  components:{
    SideHeader,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.advantage{
  padding: 60px 20px;
  .item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:nth-of-type(1) {
      border-bottom: 1px #DDDDDD solid;
      padding-bottom: 40px;

      .elem:nth-of-type(2) {
        margin: 0 30px;
      }
    }

    &:nth-of-type(2) {
      padding-top: 40px;

      .elem:nth-of-type(2) {
        margin: 0 11px;
      }
    }

    .signImg{
      display: inline-block;

      &:nth-of-type(1) {
        width: 118px;
        height: 104px;
      }

      &:nth-of-type(2) {
        width: 106px;
        height: 115px;
      }
    }

    .title{
      font-size: 18px;
      color: #333333;
      text-align: center;
      position: relative;
    }

    .title:after{
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

    .elem{
      display: inline-block;
      margin-top: 40px;
      text-align: center;

      .detailimg{
        display: inline-block;
        width: 20px;
        height: 20px;
      }

      .detailname{
        font-size: 12px;
        margin-top: 12px;
      }
    }
  }
  
}
</style>
