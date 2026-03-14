<template>
	<component
		:is="tag"
		class="heading-section"
		:class="colorClass"
	>
		<slot>{{ text }}</slot>
	</component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	text: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: 'yellow',
		validator: (value) => ['yellow', 'red', 'blue', 'green'].includes(value),
	},
	tag: {
		type: String,
		default: 'h2',
	},
})

const colorClass = computed(() => `heading-section--${props.color}`)
</script>

<style scoped>
.heading-section {
	display: inline-block;
	font-size: clamp(1.25rem, 3.5vw, 2.5rem);
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: black;
	padding: 0.25em 0.6em;
	line-height: 1.2;
	text-align: left;
	margin: 0;
}

.heading-section--yellow {
	background-color: #fff200;
}

.heading-section--red {
	background-color: #ed1c24;
}

.heading-section--blue {
	background-color: #007dc5;
}

.heading-section--green {
	background-color: #009659;
}
</style>
