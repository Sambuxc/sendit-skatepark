<script lang="ts" setup>
</script>

<template>
	<section class="py-12 relative bg-yellow-50 w-full color-border">
		<div class="p-9 container mx-auto w-full h-full flex flex-col items-start">
			<h2 class="mb-9 uppercase text-left">Upcoming Events</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				<!-- April half term R-TIME -->
				<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
					<h3 class="text-xxl pb-4">April</h3>
					<ul class="mt-2 space-y-2">
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">H T.&nbsp; </span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">R-TIME</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">14th</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Unity Park</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">15th</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Parish Park</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">16th</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Brinny Leisure Center</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">22nd</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Lancashire Hill</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">23rd</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Alexandra Park</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">24th</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">1:30-5:30</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Greg Street</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">25th</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Dial Park Primary</span>
						</div>
					</ul>
				</div>

				<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
					<h3 class="text-xxl pb-4">May</h3>
					<ul class="mt-2 space-y-1">
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">tba</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">tba</span>
						</div>
					</ul>
				</div>

				<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
					<h3 class="text-xxl pb-4">June</h3>
					<ul class="mt-2 space-y-1">
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">tba</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">tba</span>
						</div>
					</ul>
				</div>

				<div class="bg-gray-800 text-white p-4 rounded-lg shadow-md">
					<h3 class="text-xxl pb-4">July</h3>
					<ul class="mt-2 space-y-1">
						<div class="flex items-center space-x-4">
							<span class="bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-semibold">8th</span>
							<span class="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">8am-4pm @ Pioneer House School</span>
						</div>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.color-border {
  border: 10px solid;
  border-image-source: url('/assets/images/colourful-border.svg');
  border-image-slice: 30;
}
</style>
