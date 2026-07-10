<template>
	<div class="pixel-skateboard-track" aria-hidden="true">
		<svg class="pixel-skateboard-sprite" viewBox="0 0 64 24">
			<!-- kicktail tips -->
			<rect x="8" y="0" width="4" height="4" class="deck" />
			<rect x="52" y="0" width="4" height="4" class="deck" />

			<!-- deck body -->
			<rect x="8" y="4" width="48" height="4" class="deck" />

			<!-- wood rail -->
			<rect x="12" y="8" width="40" height="4" class="rail" />

			<!-- trucks -->
			<rect x="16" y="12" width="4" height="4" class="truck" />
			<rect x="44" y="12" width="4" height="4" class="truck" />

			<!-- wheels -->
			<rect x="12" y="16" width="8" height="8" class="wheel" />
			<rect x="40" y="16" width="8" height="8" class="wheel" />

			<!-- wheel hubs -->
			<rect x="14" y="18" width="4" height="4" class="deck" />
			<rect x="42" y="18" width="4" height="4" class="deck" />
		</svg>
	</div>
</template>

<script setup></script>

<style scoped>
.pixel-skateboard-track {
	position: absolute;
	inset: auto 0 12px 0;
	height: 36px;
	overflow: hidden;
	pointer-events: none;
	z-index: -1;
}

.pixel-skateboard-sprite {
	position: absolute;
	left: -15%;
	width: 96px;
	height: 36px;
	shape-rendering: crispEdges;
	animation:
		roll-across 6s linear infinite,
		bob 0.5s ease-in-out infinite alternate;
}

.deck {
	fill: #18181b;
}

.rail {
	fill: #a16207;
}

.truck {
	fill: #a1a1aa;
}

.wheel {
	fill: var(--color-yellow, #fff200);
}

@keyframes roll-across {
	from {
		left: -15%;
	}
	to {
		left: 115%;
	}
}

@keyframes bob {
	from {
		transform: translateY(0) rotate(-1deg);
	}
	to {
		transform: translateY(-2px) rotate(1deg);
	}
}

@media (prefers-reduced-motion: reduce) {
	.pixel-skateboard-sprite {
		animation: none;
		left: 50%;
	}
}
</style>
