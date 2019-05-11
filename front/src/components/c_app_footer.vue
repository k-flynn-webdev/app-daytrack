<template>

	<footer 
		class="anim-6 colour-bg-inv"> 

		<div 
			class="footer-content center-auto-h width-85 anim-6">


			<div class="text text-small1 text-center">
				<p class="colour-fill-bg">Made with 

					<span>

						<svg 
							class="icon" 
							viewBox="0 0 907 828" 
							version="1.1" 
							xmlns="http://www.w3.org/2000/svg" 
							xmlns:xlink="http://www.w3.org/1999/xlink" 
							xml:space="preserve" 
							xmlns:serif="http://www.serif.com/">

							<path class="" d="M730.084,312.85c4.226,113.133 -40.828,236.381 -79.883,320.702c-29.137,63.033 -92.165,103.467 -161.607,103.675c-58.148,0.184 -129.832,0.398 -188.066,0.573c-68.886,0.206 -131.752,-39.215 -161.569,-101.314c-43.597,-90.793 -96.522,-224.663 -88.059,-325.713"/>
							<path class="" d="M710,410.13l137.329,0c0,0 27.947,188.444 -226.001,233.406"/>

						</svg>

					</span> 
					by 

					<a class="colour-fill-accent" target="_blank" href="https://github.com/k-flynn-webdev"> k-flynn-webdev </a>

					<p class="text app-version">
						v: {{ version }}
					</p>

				</p>
			</div>

		</div>

	</footer>

</template>

<script>

export default {
	name: 'cFooter',
	data(){
		return {
			version : '',
		}
	},	
	methods : {
		get_version : function(){
			this.version = process.env.VUE_APP_VERSION || '0.0.0';
		},
	},
	mounted(){
		this.get_version();
	},
	beforeDestroy(){
	},
}

</script>

<style scoped >

	footer {
		/*position: absolute;*/
		/*bottom: 0;*/
		/*left: 0;*/
		width: 100%;
		/*z-index: 1;*/
		/*overflow: hidden;*/
		/*opacity: 0;*/
		/*pointer-events: none;*/
	}

	.footer-content {
		/*pointer-events: visible;*/
		/*opacity: 0;*/
		/*transform: translateY(4rem);*/
	}
	

	.app-version {
		font-size: .85rem;
		position: absolute;
		right: 0;
		bottom: 0;
		margin: 0 .7rem;
	}

	.footer-content div{
		margin: .25rem;
	}
	.icon {
		transform: translateY(.15rem);
		width: 1.5rem;
	}

</style>

















