<template>
		<main>
			<v-footer></v-footer>
			<router-view></router-view>
		</main>
</template>

<script>
		import vfooter from './component/index/footer.vue'
		export default{
		    components:{
		    	'v-footer':vfooter
		    }
			
		}
</script>

<style>
</style>
