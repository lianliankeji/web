<template>
  <header class="header-tab">
    <div class="header-content">
      <div class="header-left">
        <img class="header-logo" src="../../assets/image/logo.png">
        <div class="header-slogan">
          <div class="header-slogan-title">新零售 新生活</div>
          <div class="header-link">kuaidian.lianlianchains.com</div>
        </div>
      </div>
      <!-- <div class="header-right">
        <div class="nav center" v-for="(item,index) in navList"><a @click="swichTab(index,item.id)" class="nav-child" :class="{'nav-active': item.active}"  href="javascript:void(0)">{{item.name}}</a></div>
      </div> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-tab',
  data () {
    return {
      navList:[
        {
          name: "首页",
          id: "#home",
          active: true
        },
        {
          name: "申请入驻",
          id: "#freeSettled",
          active: false
        },
        {
          name: "联系我们",
          id: "#contact",
          active: false
        }
      ]
    }
  },
  methods:{
    swichTab(index,id) {
      this.navList.forEach((item,i) => {
        if(item.active === true) {
          item.active = false;
          return false;
        }
      })

      this.navList[index].active = true;
      var anchor = document.querySelector(id)
      document.body.scrollTop = anchor.offsetTop; // chrome
      document.documentElement.scrollTop = anchor.offsetTop; // firefox
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.header-tab {
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #fff;


  .header-content{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    @include flex;
    .header-left{
      height: 100%;
      @include flex;
      .header-logo{
        margin-right: 22px;
      }
      .header-slogan{
        color: $theme-color;
        line-height: 26px;
      }
    }
    .header-right{
      height: 100%;
      .nav{
        display: inline-block;
        width: 130px;
        height:100%;
        .nav-child{
          height: 100%;
          width: 100%;
          line-height: 80px;
        }
      }
    }
    
  }
  
}

.nav-active{
  color: $color-nav-select;
  background-color: $background-color-nav;
}
</style>
