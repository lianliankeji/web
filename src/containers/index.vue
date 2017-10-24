<template>
  <div id="home">
  	<header-tab />
    <category />
    <about />
    <advantage />
    <ability />
    <process />
    <cooperation />
    <freeSettled />
    <contact />
  </div>
</template>

<script>
import HeaderTab from 'components/header/Header.vue'
import Category from 'components/category/Category.vue'
import About from 'components/about/About.vue'
import Advantage from 'components/goodsadvantage/GoodsAdvantage.vue'
import Ability from 'components/abilityadvantage/AbilityAdvantage.vue'
import Process from 'components/buyprocess/BuyProcess.vue'
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
  	Category,
  	HeaderTab,
  	About,
  	Advantage,
  	Ability,
  	Process,
  	Cooperation,
  	FreeSettled,
  	Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
