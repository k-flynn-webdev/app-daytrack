<template>

	<div class="task-input-panel">

		<c-panel
			v-bind:no_split="true">

				<div slot="header">
				</div>

				<form 
					class="form" 
					action="/api/task/create" 
					method ="POST" 
					@submit.prevent="onSubmit">

					<div class="field row-tight">
						<input 
							class="input-margin input-note1 text-bold text"
							ref="task"  
							type="string" 
							name="task" 
							v-model=input.task
							placeholder="task">

					</div>


					<div class="field row-tight">
						<input 
							class="input-margin input-note1 text-bold text"
							v-model=input.tags
							ref="tags"  
							type="string" 
							name="options" 
							placeholder="Tags eg #home new, done"
							v-on:change=lower>

						<c-button 
							type="submit"
							v-bind:class="{ 
								'is-loading' : input_waiting,
								'is-success' : input_success, 
								'is-error' : input_error }">
								Add
						</c-button>	

					</div>

				</form>

		</c-panel>
		
	</div>	

</template>

<script>



function isDupe( input, index, array){
	for( let a =0; a < array.length; a++){
		if(array[a].toLowerCase() == input.toLowerCase() && index !== a ){
			return true;
		}
	}
}

function splitFunc( item ){
	let splits = [];
	let temp = item.toLowerCase().split(/[,# ]+/);

	for( let b =0; b < temp.length; b++){

		let newOption = temp[b].trim();
		if( newOption.length > 1){
			if( !isDupe( newOption, b, temp) ){
				splits.push( newOption );
			}		
		}
	}

	return splits;
}


	import Panel from './c_panel.vue';
	import Button from './c_button.vue';

	export default {
		name: 'cTaskInput',
		data() {
			return {
				type : "--",
				input_waiting : false,
				input_success : false,
				input_error : false,
				input : {
					task : '',
					tags : '',
 				}
			}
		},
		computed : {
			contentState : function(){
				return this.input.display;
			},
		},
		methods : {
			lower : function(){
				this.input.tags = this.input.tags.toLowerCase();
			},
			reset : function(){
				this.input.task = '';
				this.input.tags = '';
				this.$refs.task.value = '';
				this.$refs.tags.value = '';
			},
			onClick : function(){
				this.input.display = false;
			},
			reset_button : function(){
				let self = this;
				setTimeout( function(){
					self.input_waiting = false;
					self.input_success = false;
					self.input_error = false;
				}, 1500 );
			},		
			onSubmit( event ){
				let self = this;
				this.input_waiting = true;

				this.$request.request_url_form( event, function(error, result){

					self.reset_button();

					if( error ){
						console.log( 'error' );
						console.log( error );

						self.input_error = true;

						// try to rety perhaps? TODO 
						self.$message.send({isType:'error',title:"error",message:error.message});
						return;
					}
						
					self.input_success = true;
					self.reset();
					
					setTimeout(function(){
						// self.$quid_bg.add_to_start( result.data );
						self.$root.$emit('tasks-change');
					},750);

				// 	// force an update 
						// TODO add a animated tick
				// 	self.$message.send({isType:'success',title:"success",message:result.message});

				});
			},
			update_from_tags : function( input ){
				let tempArray = splitFunc( this.input.tags );

				let tempIndex = tempArray.indexOf(input)
				
				if( tempIndex === -1 ){
					this.input.tags += ' ' + input;	
				}

				if( tempIndex >= 0 ){
					this.input.tags = this.input.tags.replace( input, '').trim();
				}
			},
			update_from_task : function( input ){

				let tempArray = splitFunc( this.input.tags );

				function isMatch(item){
					for( let a = 0; a < tempArray.length; a++){
						if( item.toLowerCase().trim() === tempArray[a].toLowerCase().trim() ){
							return true;
						}
					}
					return false;
				}

				let match = 0;
				for( let b = 0; b < input.length; b++){
					if( isMatch( input[b] ) ){
						match +=1;
					}
				}

				if( match === input.length ){
					for( let b = 0; b < input.length; b++){
						this.update_from_tags( input[b] );
					}
					return;
				}

				if( match > 0 && match < input.length ){
					for( let b = 0; b < input.length; b++){
						if( !isMatch( input[b] ) ){
							this.update_from_tags( input[b] );
						}
					}
					return;
				}

				if( !match){
					for( let b = 0; b < input.length; b++){
						this.update_from_tags( input[b] );
					}
					return;
				}
			}			
		},
		components: {
			'c-button' : Button,
			'c-panel' : Panel,
		},
		mounted(){
			this.$root.$on( 'tag-click', this.update_from_tags);
			this.$root.$on( 'task-click', this.update_from_task);
		},
	}

</script>

<style scoped >

	.task-input-panel {
		position: fixed;
		width: 100%;
		z-index: 2;

	}

	.input-margin {
		margin-right: 0.5rem;
	}	
	.row-tight {
		margin-top: 0.5rem !important;
		margin-bottom: 0.5rem !important;
	}

</style>
