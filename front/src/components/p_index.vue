<template>
	<div style="position:relative;">
		<template v-if="isLoggedIn" >

			<c-task-input></c-task-input>

			<c-tasks-tags></c-tasks-tags>

		</template>
		
		<template v-else>
			
			<div> login please </div>

		</template>	

		<c-app-footer></c-app-footer>

	</div>
</template>

<script>

	import TasksTags from './c_tasks_tags.vue';
	import TaskInput from './c_task_input.vue';
	import Footer from './c_app_footer.vue';


	export default {
		name: 'Index',
		data () {
			return {
			}
		},
		computed: {
			isLoggedIn : function(){
				if( this.$auth.session !== undefined ){
					return this.$auth.session.active;
				}
				return false;
			},
		},
		// methods : function(){

		// },
		// created : function(){
		// 	this.$root.$on('itemClicked', this.input );
		// },
		components: {
			'c-app-footer' : Footer,
			'c-tasks-tags' : TasksTags,
			'c-task-input' : TaskInput,
		},	
		mounted() {

		},
		// beforeRouteLeave (to, from, next) {
		// 	console.log('leaving.');
		// 	next();
		// }	
	}
</script>

<style scoped>
.logo{
	width: 100%;
	text-align: right;
}
.logo-full{
	width: 18rem;
	text-align: right;
	margin-right: 1rem;
}

.mid-section{
	margin: 6rem 0;
	height: 1rem;
	width: 100%;
	position: relative;
	text-align: right;
}
.strap-line{
	float: right;
	margin: 1rem;
	padding: 0;
	margin-bottom: 20rem;
	/*display: none;*/
	/*margin: 1rem;*/
	/*width: 15rem;*/
	/*margin-left: auto !important;*/
}
.phone-mock{
	/*filter: brightness(85%);*/
	/*top:-12rem;*/
	left: -3vmin;
	position: absolute;
	width: 65%;
	max-width: 18rem;
	z-index: -10;
}
</style>
