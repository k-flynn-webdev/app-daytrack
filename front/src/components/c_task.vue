<template>

	<div class="width-85 center-auto-h">

		<div class="task">

			<div class="task-content">

				<p class="text">
					{{ input.task }}
				</p>

			</div>

			<div class="task-bottom">

				<div class="task-tags">
					
					<p 	
						class="tag" 
						v-for="(tag, index) in get_tags"
						v-on:click=tag_click(tag)>
						
						{{ prepare_tag(tag) }}

					</p>

				</div>

				<p class="date text-small">
					{{ get_date }}
				</p>

			</div>

		</div>

	</div>

</template>

<script>

	export default {
		name: 'cTrack',
		props: {
			input : Object,
		},
		data(){
			return{
			}
		},
		computed: {
			get_date : function(){
				let dateSplit = this.input.date.split('T')
				let date = dateSplit[0];

				let temptTime = dateSplit[1].split('.');
				temptTime = temptTime[0].split(':');
				return date + '\n' + temptTime[0] + ':' + temptTime[1];
			},
			get_tags : function(){
				return this.input.options;
			},
		},
		methods: {
			prepare_tag : function( tag ){
				let tag_prepared = '#' + tag;
				// todo make this a clickable link element in future!
				return tag_prepared;
			},
			tag_click : function( tag ){
				this.$root.$emit( 'tag-click', tag.toLowerCase());
			},			
		},
		mounted(){
		}
	}

</script>

<style scoped>

	.task {
		position: relative;
		width: 100%;
		background-color: hsl(30,20%,90%);
		border-radius: .33rem;
		margin: 1rem 0;
		transition: .3s;
		box-sizing: border-box;
	}

	.task:hover {
		transform: scale(1.04);
		border-bottom: solid black 1px;
	}

	.task-content {
		margin: .5rem;
		padding: .35rem 0;
	}

	.task-bottom {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: .35rem 0;
	}

	.task-tags {
		display: inline-block;
		width: calc(70% - .5rem);
		text-align: left;
	}
	.task-tags .tag{
		display: inline-block;
		margin-right: .2rem;
	}	
	.date {
		display: inline-block;
		width: calc(30% - .5rem);
		text-align: right;
	}

</style>
