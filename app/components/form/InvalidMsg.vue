<template>
	<span class="text-sm">{{ msg }}</span>
</template>

<script setup>
defineProps({
	msg: {
		type: String,
		default: '',
	},
})
</script>
