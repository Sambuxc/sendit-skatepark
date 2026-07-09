<template>
	<div class="skate-ramp-bg" aria-hidden="true">
		<!-- Backdrop wall filling the full dialog, blending into the ramp's concrete tone -->
		<div class="skate-ramp-wall" />

		<div class="skate-ramp-floor">
			<svg class="skate-ramp-svg" viewBox="0 0 400 200" preserveAspectRatio="none">
				<defs>
					<linearGradient id="ramp-concrete" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stop-color="#3f3f46" />
						<stop offset="100%" stop-color="#18181b" />
					</linearGradient>
				</defs>

				<!-- Ramp cross-section: solid concrete block (flat decks + quarter-pipe transitions + flat bottom) -->
				<rect class="ramp-surface" x="0" y="0" width="400" height="200" />

				<!-- Shaded transition bowl for depth -->
				<path class="ramp-bowl" d="M 20,0 C 20,120 60,200 120,200 L 280,200 C 340,200 380,120 380,0 L 380,200 L 20,200 Z" />

				<!-- Coping (lip trim) along the ramp curve -->
				<path class="ramp-coping" d="M 20,0 C 20,120 60,200 120,200 L 280,200 C 340,200 380,120 380,0" />

				<!-- Skateboarder pictogram: bold rounded-stroke figure + deck + wheels, one accent color, travels via offset-path -->
				<g class="skateboard">
					<circle cx="2" cy="-27" r="4.5" class="rider-mark" />
					<path d="M 1,-22 L 0,-11" class="rider-mark" />
					<path d="M 1,-21 L 9,-15" class="rider-mark" />
					<path d="M 1,-21 L -7,-17" class="rider-mark" />
					<path d="M 0,-11 L 7,-4 L 9,1" class="rider-mark" />
					<path d="M 0,-11 L -6,-4 L -8,1" class="rider-mark" />
					<rect x="-16" y="1" width="32" height="5" rx="2.5" class="board-deck" />
					<circle cx="-9" cy="7.5" r="3" class="board-wheel" />
					<circle cx="9" cy="7.5" r="3" class="board-wheel" />
				</g>
			</svg>
		</div>
	</div>
</template>

<script setup></script>

<style scoped>
.skate-ramp-bg {
	position: absolute;
	inset: 0;
	overflow: hidden;
	pointer-events: none;
	z-index: -1;
}

.skate-ramp-wall {
	position: absolute;
	inset: 0;
	background: linear-gradient(to bottom, #52525b 0%, #3f3f46 100%);
}

.skate-ramp-floor {
	position: absolute;
	inset: auto 0 0 0;
	height: 25%;
}

.skate-ramp-svg {
	width: 100%;
	height: 100%;
	display: block;
}

.ramp-surface {
	fill: url(#ramp-concrete);
}

.ramp-bowl {
	fill: #000;
	opacity: 0.35;
}

.ramp-coping {
	fill: none;
	stroke: var(--color-yellow, #fff200);
	stroke-width: 4;
}

.skateboard {
	offset-path: path('M 20,0 C 20,120 60,200 120,200 L 280,200 C 340,200 380,120 380,0');
	offset-rotate: auto;
	animation: ride-ramp 5s ease-in-out infinite alternate;
}

.rider-mark {
	fill: var(--color-yellow, #fff200);
	stroke: var(--color-yellow, #fff200);
	stroke-width: 5;
	stroke-linecap: round;
	stroke-linejoin: round;
}

.board-deck,
.board-wheel {
	fill: var(--color-yellow, #fff200);
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
