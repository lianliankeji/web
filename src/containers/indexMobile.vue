<template>
  <div id="home">
    <category />
    <advantage />
    <process />
    <about />
    <cooperation />
    <!-- <advantage />
    <ability />
    <process />
    <cooperation />
    <freeSettled />
    <contact />  -->
  </div>
</template>

<script>
// import HeaderTab from 'components/headerMobile/Header.vue'
// import Category from 'components/categoryMobile/Category.vue'
import About from 'components/about/About.vue'
// import Advantage from 'components/goodsadvantage/GoodsAdvantage.vue'
import Ability from 'components/abilityadvantage/AbilityAdvantage.vue'
import Cooperation from 'components/cooperation/Cooperation.vue'
import FreeSettled from 'components/freeSettled/FreeSettled.vue'
import Contact from 'components/contact/Contact'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	Category: () => import('components/categoryMobile/Category.vue'),	
    Advantage: () => import('components/advantageMobile/Advantage.vue'),
    Process: () => import('components/buyprocessMobile/BuyProcess.vue'),
    About: () => import('components/aboutmobile/About.vue'),
  	Cooperation: () => import('components/cooperationMobile/Cooperation.vue'),
  	FreeSettled,
  	Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
