<template>
	<header :class="['flex flex-col items-center w-full', headerStyles, bgColor]">
		<slot></slot>
	</header>
</template>

<script setup>
defineProps({
	headerStyles: {
		type: String,
		default: 'relative w-svw h-svh',
	},
	bgColor: {
		type: String,
		default: '',
	},
})
</script>
