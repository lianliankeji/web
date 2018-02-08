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
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
  	Category: () => import('components/category/Category.vue'),
  	HeaderTab: () => import('components/header/Header.vue'),
  	About: () => import('components/about/About.vue'),
  	Advantage: () => import('components/goodsadvantage/GoodsAdvantage.vue'),
  	Ability: () => import('components/abilityadvantage/AbilityAdvantage.vue'),
  	Process: () => import('components/buyprocess/BuyProcess.vue'),
  	Cooperation: () => import('components/cooperation/Cooperation.vue'),
  	FreeSettled: () => import('components/freeSettled/FreeSettled.vue'),
  	Contact: () => import('components/contact/Contact')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
