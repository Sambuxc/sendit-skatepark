<template>
	<div class="heading-main">
		<template
			v-for="(line, index) in lines"
			:key="index"
		>
			<span
				class="heading-main__divider"
				:class="dividerColorClass"
			/>
			<span class="heading-main__line">
				{{ line }}
			</span>
		</template>
		<span
			class="heading-main__divider"
			:class="dividerColorClass"
		/>
	</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: 'yellow',
		validator: (value) => ['yellow', 'red', 'blue', 'green'].includes(value),
	},
})

const lines = computed(() => {
	return props.text
		.split('\n')
		.map((line) => line.trim())
		.filter((line) => line.length > 0)
})

const dividerColorClass = computed(() => `heading-main__divider--${props.color}`)
</script>

<style scoped>
.heading-main {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.heading-main__line {
	font-size: clamp(1.75rem, 5vw, 3.5rem);
	font-weight: 900;
	text-transform: uppercase;
	color: white;
	line-height: 1.1;
	letter-spacing: 0.05em;
	padding: 0.15em 0;
}

.heading-main__divider {
	display: block;
	width: 100%;
	height: 3px;
}

.heading-main__divider--yellow {
	background-color: #fff200;
}

.heading-main__divider--red {
	background-color: #ed1c24;
}

.heading-main__divider--blue {
	background-color: #007dc5;
}

.heading-main__divider--green {
	background-color: #009659;
}
</style>
