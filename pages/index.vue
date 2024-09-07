<template>
	<main class="w-svw h-svh">
		<header>
			<!-- <img
				class="absolute left-0 top-0 -z-0 bg-center bg-fixed lg:bg-contain h-full lg:h-svh lg:w-lvw"
				src="../assets/images/house-of-vans.jpg"
				alt="bg image"
			/> -->

			<nav>
				<img src="~/assets/images/send-it-skate-ramps-logo.png" alt="Send it portable skate parks" width="70" />

				<div class="nav-menu">
					<!-- <NuxtLink to="#bookings" class="bg-blue rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
					<NuxtLink to="#bookings">
						Book Us
					</NuxtLink>

					<!-- <NuxtLink to="/greet" class="bg-green mt-2 rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
					<NuxtLink to="#location">
						Location
					</NuxtLink>
					<!-- <NuxtLink to="/greet" class="bg-red mt-2 rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
					<NuxtLink to="#ramps">
						Ramps
					</NuxtLink>

					<!-- <NuxtLink to="/greet" class="bg-yellow mt-2 rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
					<NuxtLink to="#contact">
						Contact
					</NuxtLink>
				</div>
			</nav>

			<a href="#bookings" class="absolute bottom-0 left-1/2 m-3 font-bold text-6xl hover:cursor-pointer">↓</a>
		</header>

		<section id="bookings" class="p-5 bg-blue">
			<h2>
				<mark class="bg-yellow"> Book your next skate </mark>
			</h2>

			<iframe class="mt-5 w-full lg:w-1/2 mx-auto"
				src="https://docs.google.com/forms/d/e/1FAIpQLSclgSffLthp4IqrC4rBlOgosUPEsH57W8Gh92Qx-VhrEuqE-A/viewform?embedded=true"
				width="640" height="1659" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
		</section>

		<section id="location" class="p-5 bg-green">
			<h2>Find Us In Your Local Area</h2>

			<GMap
				class="bg-transparent"
				api-key="AIzaSyDWEqkzNgzXVCRUuzd1c4PPdjlfqy21KLA"
				:location="{lat: 53.406361973195494, lng: -2.1537673826365156}"
				:map-style-option="{ borderRadius: '9px', border: '4px solid orange' }"
			/>
		</section>
	</main>
</template>

<script lang="ts" setup>
import GMap from '~/components/GoogleMap.vue'

useHead({
		title: 'Send it Stockport - Portable Skate Ramps',
		meta: [
			{
				name: 'Portable skate ramps to hire, rent for birthdays and parties',
				content: 'Portable skate ramps to hire, rent for birthdays and parties',
			},
		],
})
</script>

<style lang="scss">
header {
	@apply relative p-4 w-svw h-svh flex flex-col lg:flex-row lg:items-start justify-between;
	//@apply bg-gradient-to-t from-orange-100 to-transparent from-0% to-20%;

	background-image: url('assets/images/house-of-vans.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

nav {
	@apply relative flex flex-col lg:flex-row justify-between gap-5 text-center w-full;

	.nav-menu {
		@apply flex flex-col lg:flex-row gap-5 items-center lg:items-start justify-center;
	}

	a {
		@apply hover:bg-blue-100 rounded-full p-5 border-4 border-black text-base text-black font-semibold;
		@apply hover:translate-y-1 transition duration-500;
	}

	a:nth-child(1) {
		@apply bg-blue hover:bg-blue-light;
	}

	a:nth-child(2) {
		@apply bg-green hover:bg-green-light;
	}

	a:nth-child(3) {
		@apply bg-red hover:bg-red-light;
	}

	a:nth-child(4) {
		@apply bg-yellow hover:bg-yellow-light;
	}
}
</style>
