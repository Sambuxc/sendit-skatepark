<script setup lang="ts">

useHead({
	title: 'Send it Stockport - Portable Skate Ramps',
	meta: [
		{
			name: 'Portable skate ramps to hire, rent for birthdays and parties',
			content: 'Portable skate ramps to hire, rent for birthdays and parties',
		},
	],
});
</script>

<template>
	<main class="w-svw h-svh">
		<header>
			<!-- <img
				class="absolute left-0 top-0 -z-0 bg-center bg-fixed lg:bg-contain h-full lg:h-svh lg:w-lvw"
				src="../assets/images/house-of-vans.jpg"
				alt="bg image"
			/> -->

			<div class="relative flex gap-5">
				<img src="~/assets/images/send-it-skate-ramps-logo.png" alt="Send it portable skate parks" width="70" />

				<!-- <h1 class="text-h5 font-weight-bold">
					<mark class="p-2 rounded bg-white">
						Portable skate ramps to hire, rent for birthdays and parties
					</mark>
				</h1> -->
			</div>

			<!-- <nav class="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 flex flex-column justify-center align-center mt-4 text-center"> -->
			<nav>
				<!-- <NuxtLink to="#bookings" class="bg-blue rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
				<NuxtLink to="#bookings">
					Book Us
				</NuxtLink>

				<!-- <NuxtLink to="/greet" class="bg-green mt-2 rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
				<NuxtLink to="/greet">
					Location
				</NuxtLink>
				<!-- <NuxtLink to="/greet" class="bg-red mt-2 rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
				<NuxtLink to="/greet">
					Ramps
				</NuxtLink>

				<!-- <NuxtLink to="/greet" class="bg-yellow mt-2 rounded-full p-8 border-8 border-black text-black font-semibold w-40"> -->
				<NuxtLink to="/greet">
					Contact
				</NuxtLink>
			</nav>

			<span></span>
		</header>

		<section id="bookings" class="h-svh mt-5 p-4">
			<h2>
				<mark class="bg-blue"> Book your next skate </mark>
			</h2>

			<iframe class="mt-5 lg:w-1/2 mx-auto"
				src="https://docs.google.com/forms/d/e/1FAIpQLSclgSffLthp4IqrC4rBlOgosUPEsH57W8Gh92Qx-VhrEuqE-A/viewform?embedded=true"
				width="640" height="1659" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
		</section>
	</main>
</template>

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
	@apply relative flex flex-col lg:flex-row justify-center align-middle gap-5 text-center;

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
