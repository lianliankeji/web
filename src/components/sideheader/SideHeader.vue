<template>
  <div class="side-header">
  	<h3 class="title">{{title}}</h3>
  	<div class="line"></div>
  	<ul class="infolist">
  		<li class="info" v-for="item in info" :class="{'goodsOk':goodsOk}">{{item}}</li><br />
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'side-header',
  data () {
    return {

    }
  },
  props:{
  	goodsOk:{
  		type: Boolean,
  		default:function(value) {
  			return value
  		}
  	},
  	title:{
  		type: String,
  		default:function(value) {
  			return value
  		}
  	},
  	info:{
  		type: Array,
  		default:function(value) {
  			return value
  		}
  	},

  }
  // props: ['title','info']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
@import "../../commen/css/mixins.scss";
@import "../../commen/css/theme.scss";

.side-header{
	.title{
		font-size: $font-large;
	}
	.line{
		width: 80px;
		height: 4px;
		background-color: #000;
		margin-top: 18px;
		margin-bottom: 22px;
	}
	.infolist {
		.info{
			width: 150px;
			
			margin-top:32px;
			&.goodsOk{
				@include Background("goodsOk.png",right center);
			}
		}

	}
}
</style>
