<template>

		<div 
			class="app-version">
			<p 
				class="text text-small text-bold colour-minor">
					V : {{ version }}	
			</p>
		</div>

</template>

<script>
export default {
	name: 'cAppVersion',
	data(){
		return {
			version : '0.0',
		}
	},
	methods : {
		getVersion : function(){
			this.version = process.env.VUE_APP_VERSION || '0.0.0';
		},
	},
	mounted(){
		this.getVersion();
	},
}
</script>

<style scoped>

	.app-version {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 10;
	}
	.app-version .text {
		margin: .66rem;
		padding: 0;
	}

</style>
