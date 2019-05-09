<template>

	<div>

		<div 
			class="tags width-85 center-auto-h">
				<p 
					class="tag"
					v-for="(tag, index) in tags">
					{{ prepare_tag(tag) }}
				</p>
		</div>

		<c-task 
			v-for="(item, index) in tasks"
			v-bind:key="item.date"
			v-bind:style=get_style_task(index)
			v-bind:input=item>		
		</c-task>

	</div>

</template>

<script>

	let counter = null;

	import Task from './c_task.vue';
	import { submit } from '../mixins/h_submit.js';

	export default {
		name: 'cTask',
		mixins: [ submit ],
		data () {
			return {
				attrs : {
					action : {},
					timing : 5000,
					max_timeouts : 5,
					max_tasks :7,
					max_date_range : 10,
				},
				state : {
					timeouts : 0,
				},
				tasks : [],
				tags : [],
			}
		},
		computed: {
		},
		methods: {
			init : function(){
				let action = {
					url : '/api/task/' + this.get_date_range(),
					method : 'POST',
					JSON : false,
					body : '' };

				this.attrs.action = action;

				this.tasks_submit(); // one time pull ..

			},
			tasks_submit : function(){
				this.onSubmit( this.attrs.action , this, null, null, this.tasks_success, this.tasks_error);
			},
			tasks_success : function( input ){
				let min = Math.min(this.attrs.max_tasks, input.data.items.length);

				// console.log( input.data.items );

				// get all unique tags from data
				
				let tempTags = [];
				for( let i=0;i<input.data.items.length;i++){
					for( let b=0;b<input.data.items[i].options.length;b++){
						tempTags.push( input.data.items[i].options[b] );
					}					
				}

				function onlyUnique(value, index, self) { 
					return self.indexOf(value) === index;
				}
				this.tags = tempTags.filter( onlyUnique );
				// todo future have this be a dictionary based on tag popularity..

				// if items have been removed..
				if( this.tasks.length > min){
					for( let i =this.tasks.length-1; i >= min; i--){
						this.tasks.pop();
					}
				}

				for( let i =0; i < min; i++){
					this.$set(this.tasks, i, input.data.items[i]);
				}
			},
			tasks_error : function( input ){
				if( this.state.timeouts < this.attrs.max_timeouts ){
					let self = this;
					counter = setTimeout( function(){
						console.log( 'retrying connection.' );
						self.state.timeouts +=1
						self.tasks_submit();
					}, self.attrs.timing);	
				}
			},
			get_date_range : function(){
				let startDate = new Date();
				startDate.setDate( startDate.getDate() + 1);
				let startDate_Final = new Date(startDate).toISOString().split('T')[0];

				let endDate = new Date();
				endDate.setDate( endDate.getDate() - this.attrs.max_date_range);
				let endDate_Final = new Date(endDate).toISOString().split('T')[0];

				return (startDate_Final + '/' + endDate_Final);			
			},
			get_style_task : function( index ){
				let shade = 1 / this.tasks.length;
				return { 'opacity' : 1 - (index * shade) };
			},
			prepare_tag : function( tag ){
				let tag_prepared = '#' + tag;
				// todo make this a clickable link element in future!
				return tag_prepared;
			},			
		},
		mounted() {
			this.init();
			this.$root.$on('tasks-change', this.tasks_submit);
		},
		components: {
			'c-task' : Task,
		},	
	}
</script>

<style scoped>

.tags {
	position: relative;
	text-align: center;
}

.tag {
	display: inline-block;
	margin-right: .5rem;
}


</style>
