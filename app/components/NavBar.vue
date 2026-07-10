<template>
	<nav :class="[navFixed ? 'fixed left-0 top-0' : 'relative']"
		class="p-4 h-fit flex justify-between items-center gap-5 text-center w-full transition-transform duration-500 ease-in-out translate-y-0">
		<div class=" mb-4 h-12 w-12 hover:rotate-360 duration-500">
			<LogoHeader />
		</div>

		<!-- Desktop nav links (hidden on mobile) -->
		<div class="hidden md:flex md:gap-5 items-center lg:items-start justify-center">
			<div class="flex flex-col md:flex-row items-center gap-2 md:gap-5">
				<NuxtLink to="mailto:senditskatepark@hotmail.com" class="bg-red text-black no-underline">
					Book Us
				</NuxtLink>

				<NuxtLink to="#our-events" class="bg-blue text-black no-underline">
					Events
				</NuxtLink>
			</div>

			<div class="flex flex-col md:flex-row items-center gap-2 md:gap-5">
				<NuxtLink to="#contact-us" class="bg-green text-black no-underline">
					Contact
				</NuxtLink>

				<NuxtLink to="https://www.instagram.com/senditskatepark/" target="_blank"
					class="bg-yellow text-black no-underline" aria-label="Instagram">
					<img class="inline" :src="ig" />
				</NuxtLink>
			</div>
		</div>

		<!-- Mobile hamburger button (hidden on desktop) -->
		<button class="nav-menu-toggle-btn" style="border: none" @click="toggleMenu"
			:aria-label="menuOpen ? 'Close menu' : 'Open menu'" :aria-expanded="menuOpen" aria-controls="mobile-nav-menu">
			<div class="hamburger-icon" :class="{ open: menuOpen }">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</button>

		<!-- Mobile fullscreen nav dialog -->
		<dialog ref="dialogRef" id="mobile-nav-menu" aria-label="Navigation menu" class="mobile-nav-dialog"
			@close="onDialogClose">
			<PixelSkateboard />

			<button class="absolute top-5 right-5 m-4 max-w-12 z-999 cursor-pointer" @click="toggleMenu"
				aria-label="Close menu" aria-controls="mobile-nav-menu-close">
				<div class="hamburger-icon open">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</button>

			<nav aria-label="Mobile navigation">
				<NuxtLink to="mailto:senditskatepark@hotmail.com" class="bg-red text-black no-underline" @click="closeMenu">
					Book Us
				</NuxtLink>

				<NuxtLink to="#our-events" class="bg-blue text-black no-underline" @click="closeMenu">
					Events
				</NuxtLink>

				<NuxtLink to="#contact-us" class="bg-green text-black no-underline" @click="closeMenu">
					Contact
				</NuxtLink>

				<NuxtLink to="https://www.instagram.com/senditskatepark/" target="_blank"
					class="bg-yellow text-black no-underline text-center" aria-label="Instagram" @click="closeMenu">
					<img class="inline" :src="ig" />
				</NuxtLink>
			</nav>
		</dialog>
	</nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import xicon from '../assets/images/icon-x.svg'
import ig from '../assets/images/instagram.svg'

defineProps({
	navFixed: {
		type: Boolean,
		default: true,
	},
})

const menuOpen = ref(false)
const dialogRef = ref(null)

function toggleMenu() {
	if (menuOpen.value) {
		closeMenu()
	} else {
		openMenu()
	}
}

function openMenu() {
	menuOpen.value = true
	dialogRef.value?.showModal()
}

function closeMenu() {
	menuOpen.value = false
	dialogRef.value?.close()
}

// Sync state when dialog is closed natively (e.g. Escape key)
function onDialogClose() {
	menuOpen.value = false
}

const navHeight = 70 // scroll starts from (in px)
const trigger = 10 // how far to scroll (in px) before triggering
let lastScrollY = 0

function handleScroll() {
	// Don't hide nav while mobile menu is open
	if (menuOpen.value) return

	const header = document.getElementsByTagName('nav')[0]
	const currentY = window.scrollY

	if (Math.abs(lastScrollY - currentY) > trigger) {
		// hide nav
		if (currentY > lastScrollY && currentY > navHeight) {
			header.classList.add('-translate-y-48', window.scrollY > trigger)
			header.classList.remove('translate-y-0', window.scrollY > trigger)
		} else if (currentY < lastScrollY) {
			// show nav
			header.classList.remove('-translate-y-48', window.scrollY > trigger)
			header.classList.add('translate-y-0', window.scrollY > trigger)
		}
		// update current scroll point
		lastScrollY = currentY
	}
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="css">
@reference "tailwindcss";

.nav-menu-toggle-btn {
	@apply md:hidden flex items-center justify-center w-12 h-12 relative z-99 cursor-pointer bg-transparent;
}
</style>