<script setup>
defineProps({
	title: {
		type: String,
	},
	description: {
		type: String,
	},
});
</script>

<template>
	<div class="absolute mb-5 mx-4 p-12 flex flex-col justify-center items-center bg-slate-50 bg-opacity-85 rounded-lg z-10">
		<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-black">
			{{ title }}
		</h1>
		<p v-if="description"
			v-html="description"
			class="mb-5 pt-5 text-center text-xl md:text-2xl lg:text-3xl">
		</p>
	</div>
</template>
