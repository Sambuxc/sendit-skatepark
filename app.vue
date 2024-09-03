<script lang="ts" setup>
const Route = useRoute();
const {
	public: { baseUrl },
} = useRuntimeConfig();
</script>

<template>
	<div
		class="here v-theme--baseTheme d-flex flex-column justify-center align-center"
	>
		<NuxtPage />

		<NuxtLink
			v-if="Route.path !== baseUrl"
			:to="baseUrl"
			class="text-h6 text-primary mt-3"
		>
			Return Home
		</NuxtLink>
	</div>
</template>
