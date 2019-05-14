<template>

	<transition-group 
		name="tag" 
		tag="div" 
		class="tags width-85 center-auto-h">

		<div
			v-for="(tag, index) in tags_all"
			v-bind:key="tag"
			v-on:click=tag_click(tag)
			v-bind:data-index="index"
			v-bind:style="{'--i': index + 1}"
			class="tag">

				{{ prepare_tag(tag) }}

		</div>

	</transition-group>

</template>

<script>

function isDupe( input, array){
	for( let a =0; a < array.length; a++){
		if(array[a].toLowerCase() == input.toLowerCase() ){
			return true;
		}
	}
	return false;
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
					let test = isDupe(this.default[b], this.tags);

					if( !test ){
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

			// beforeEnter: function (el) {
			// 	console.log(el);
			// 	// el.style.opacity = 0;
			// },
			// enter: function (el, done) {
			// 	console.log(el);
			// 	done();
			// 	// let delay = el.dataset.index * 1300
			// 	// setTimeout(function () {
			// 	// 	// el.style.opacity = 1;
			// 	// }, delay);
			// },
			// leave: function (el, done) {
			// 	console.log(el);
			// 	done();
			// 	// let delay = el.dataset.index * 1300
			// 	// setTimeout(function () {
			// 	// 	// el.style.opacity = 0;
			// 	// }, delay);
			// },

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
		/*opacity: 0;*/
	}

/*	.tag-enter {
		opacity: 0;
	} */	
	.tag-enter-to {
		opacity: 0;
	} 

/*	.tag-leave {
		opacity: 1;
	}*/
	.tag-leave-to {
		/*opacity: 0;*/
	}

	.tag-enter-active {
		animation: add-tag .66s cubic-bezier(.26,.03,0,.9) calc( .08s * var(--i));
	}

	.tag-leave-active {
		/*background-color: purple;*/
		position: absolute;
		animation: add-tag .66s reverse cubic-bezier(.26,.03,0,.9);
	}

	.tag-move {
		transition: transform .66s cubic-bezier(.26,.03,0,.9);
	}

	@keyframes add-tag {
		0% {
			transform: translateY(-1rem);
			opacity: 0;
		}		
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

</style>
