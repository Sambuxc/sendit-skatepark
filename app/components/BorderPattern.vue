<template>
	<div class="border-pattern">
		<div class="border-pattern__edge border-pattern__edge--top" />
		<div class="border-pattern__edge border-pattern__edge--bottom" />
		<div class="border-pattern__edge border-pattern__edge--left" />
		<div class="border-pattern__edge border-pattern__edge--right" />

		<div
			class="border-pattern__content"
			:style="{ padding: `${thickness}px` }"
		>
			<slot />
		</div>
	</div>
</template>

<script setup>
defineProps({
	thickness: {
		type: Number,
		default: 32,
	},
})
</script>

<style scoped>
.border-pattern {
	position: relative;
	overflow: hidden;
}

.border-pattern__edge {
	position: absolute;
	background-image: url('~/assets/images/border-pattern-tile.svg');
	background-color: #000;
	z-index: 1;
}

/* Horizontal edges: tile repeats left-to-right */
.border-pattern__edge--top,
.border-pattern__edge--bottom {
	left: 0;
	right: 0;
	height: v-bind("`${thickness}px`");
	background-size: auto 100%;
	background-repeat: repeat-x;
}

.border-pattern__edge--top {
	top: 0;
}

.border-pattern__edge--bottom {
	bottom: 0;
	transform: scaleY(-1);
}

/* Vertical edges: same tile image, rotated via transform */
.border-pattern__edge--left,
.border-pattern__edge--right {
	top: 0;
	bottom: 0;
	width: v-bind("`${thickness}px`");
	background-size: auto v-bind("`${thickness}px`");
	background-repeat: repeat-x;
}

/*
	For the vertical edges we rotate a "virtual" horizontal strip.
	We set the element height = parent height, width = thickness,
	then use a rotated inner pseudo-element to render the pattern.
*/
.border-pattern__edge--left {
	left: 0;
	background: none;
}

.border-pattern__edge--right {
	right: 0;
	background: none;
}

.border-pattern__edge--left::after,
.border-pattern__edge--right::after {
	content: '';
	position: absolute;
	background-image: url('~/assets/images/border-pattern-tile.svg');
	background-color: #000;
	background-repeat: repeat-x;
	background-size: auto 100%;
}

.border-pattern__edge--left::after {
	/* Rotate the strip -90 degrees so it flows top-to-bottom */
	top: 0;
	left: 0;
	width: 100vh;
	height: v-bind("`${thickness}px`");
	transform-origin: top left;
	transform: rotate(90deg);
}

.border-pattern__edge--right::after {
	/* Rotate the strip 90 degrees, anchor top-right */
	top: 0;
	right: 0;
	width: 100vh;
	height: v-bind("`${thickness}px`");
	transform-origin: top right;
	transform: rotate(-90deg);
}

.border-pattern__content {
	position: relative;
	z-index: 2;
}
</style>
