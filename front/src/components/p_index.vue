<template>
	<div style="position:relative;">
		<template v-if="isLoggedIn" >

			<c-task-input></c-task-input>

			<c-tasks></c-tasks>

		</template>
		
		<template v-else>
			
			<div> login please </div>

		</template>	
	</div>
</template>

<script>

	import Tasks from './c_tasks.vue';
	import TaskInput from './c_task_input.vue';


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
			'c-tasks' : Tasks,
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
	/*margin: 1rem;*/
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
