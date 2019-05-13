<template>

	<transition-group name="tag" tag="div" class="tags width-85 center-auto-h">

		<div
			v-for="(tag, index) in tags_all"
			v-bind:key="tag"
			v-on:click=tag_click(tag)
			class="tag">

				{{ prepare_tag(tag) }}

		</div>

	</transition-group>

</template>

<script>

function isDupe( input, index, array){
	for( let a =0; a < array.length; a++){
		if(array[a].toLowerCase() == input.toLowerCase() && index !== a ){
			return true;
		}
	}
}

	export default {
		name: 'cTaskTags',
		data () {
			return {
				default : ['work'],
			}
		},
		props : {
			tags : Array,
		},
		computed: {
			tags_all : function(){
				let temp = [];
				for(let i = 0; i < this.tags.length; i++){
					temp.push( this.tags[i] );
				}
				for(let b = 0; b < this.default.length; b++){
					if( !isDupe(this.default[b], b, this.tags) ){
						temp.push( this.default[b] );
					}
				}
				return temp;				
			}, 
		},
		methods: {
			prepare_tag : function( tag ){
				let tag_prepared = '#' + tag.toLowerCase();
				// todo make this a clickable link element in future!
				return tag_prepared;
			},
			tag_click : function( tag ){
				this.$root.$emit( 'tag-click', tag.toLowerCase());
			},
		},
		mounted() {
			// this.init();
		},
		components: {
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

	.tag-enter-active {
		animation: add-tag 1s cubic-bezier(.26,.03,0,.9);
	}

	.tag-leave-active {
		position: absolute;
		animation: add-tag 1s reverse cubic-bezier(.26,.03,0,.9);
	}

	.tag-move {
		transition: transform .5s cubic-bezier(.26,.03,0,.9);
	}

	@keyframes add-tag {
		0% {
			transform: translateY(-2rem);
			opacity: 0;
		}
		50% {
			opacity: 0.2;
		}		
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

</style>
