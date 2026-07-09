<template>
	<div class="skate-ramp-bg" aria-hidden="true">
		<svg class="skate-ramp-svg" viewBox="0 0 400 200" preserveAspectRatio="none">
			<defs>
				<linearGradient id="ramp-concrete" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stop-color="#71717a" />
					<stop offset="100%" stop-color="#3f3f46" />
				</linearGradient>
			</defs>

			<!-- Ramp cross-section: solid concrete block (flat decks + quarter-pipe transitions + flat bottom) -->
			<rect class="ramp-surface" x="0" y="0" width="400" height="200" />

			<!-- Shaded transition bowl for depth -->
			<path class="ramp-bowl" d="M 20,0 C 20,120 60,200 120,200 L 280,200 C 340,200 380,120 380,0 L 380,200 L 20,200 Z" />

			<!-- Coping (lip trim) along the ramp curve -->
			<path class="ramp-coping" d="M 20,0 C 20,120 60,200 120,200 L 280,200 C 340,200 380,120 380,0" />

			<!-- Skateboarder: rider + deck + two wheels, travels along the ramp curve via offset-path -->
			<g class="skateboard">
				<circle cx="0" cy="-26" r="6" class="rider-head" />
				<path d="M 0,-20 L 0,-8 M 0,-16 L -8,-10 M 0,-16 L 8,-10 M 0,-8 L -6,2 M 0,-8 L 6,2" class="rider-body" />
				<rect x="-16" y="0" width="32" height="6" rx="3" class="board-deck" />
				<circle cx="-9" cy="7" r="3.5" class="board-wheel" />
				<circle cx="9" cy="7" r="3.5" class="board-wheel" />
			</g>
		</svg>
	</div>
</template>

<script setup></script>

<style scoped>
.skate-ramp-bg {
	position: absolute;
	inset: auto 0 0 0;
	height: 25%;
	overflow: hidden;
	pointer-events: none;
	z-index: -1;
}

.skate-ramp-svg {
	width: 100%;
	height: 100%;
	display: block;
}

.ramp-surface {
	fill: url(#ramp-concrete);
	opacity: 0.9;
}

.ramp-bowl {
	fill: #27272a;
	opacity: 0.45;
}

.ramp-coping {
	fill: none;
	stroke: var(--color-yellow, #fff200);
	stroke-width: 5;
	opacity: 0.9;
}

.skateboard {
	offset-path: path('M 20,0 C 20,120 60,200 120,200 L 280,200 C 340,200 380,120 380,0');
	offset-rotate: auto;
	animation: ride-ramp 5s ease-in-out infinite alternate;
}

.rider-head {
	fill: none;
	stroke: var(--color-blue, #007dc5);
	stroke-width: 3;
}

.rider-body {
	fill: none;
	stroke: var(--color-blue, #007dc5);
	stroke-width: 3;
	stroke-linecap: round;
}

.board-deck {
	fill: #111;
}

.board-wheel {
	fill: var(--color-red, #ed1c24);
}

@keyframes ride-ramp {
	0% {
		offset-distance: 0%;
	}
	100% {
		offset-distance: 100%;
	}
}

@media (prefers-reduced-motion: reduce) {
	.skateboard {
		animation: none;
		offset-distance: 50%;
	}
}
</style>
