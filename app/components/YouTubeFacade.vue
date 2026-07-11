<script setup>
/**
 * YouTubeFacade.vue
 * Renders a lightweight thumbnail + play button on first paint.
 * The real YouTube iframe is only injected after the user clicks,
 * so Googlebot (and every visitor) sees a fast, real image instead
 * of a third-party embed / "Your browser can't play this video" text.
 *
 * Usage:
 *   <YouTubeFacade
 *     video-id="2nYtd-ewtuE"
 *     title="SEND IT Skatepark highlights video"
 *   />
 */
import { ref, computed } from 'vue'

const props = defineProps({
  videoId: { type: String, required: true },
  title: { type: String, required: true },
  /**
   * Optional: path to your own poster image (recommended).
   * Drop a photo in /public, e.g. /video-poster.jpg, and pass it here.
   * If omitted, YouTube's own thumbnail is used.
   */
  poster: { type: String, default: '' },
})

const activated = ref(false)
const connectionsWarmed = ref(false)

// Try the HD thumbnail first; fall back to hqdefault if YouTube
// has no maxres version for this video (a common case).
const ytThumb = ref(`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`)
const onThumbError = () => {
  ytThumb.value = `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`
}

const posterSrc = computed(() => props.poster || ytThumb.value)

const iframeSrc = computed(
  () =>
    `https://www.youtube-nocookie.com/embed/${props.videoId}` +
    `?rel=0&autoplay=1&loop=1&controls=1&playsinline=1`
)

// Warm up DNS/TLS to YouTube the moment the user shows intent
// (hover or focus), so the iframe loads faster on click.
const warmConnections = () => {
  if (connectionsWarmed.value) return
  connectionsWarmed.value = true
  const origins = [
    'https://www.youtube-nocookie.com',
    'https://www.google.com',
    'https://i.ytimg.com',
  ]
  for (const origin of origins) {
    const link = document.createElement('link')
    link.rel = 'preconnect'
    link.href = origin
    document.head.appendChild(link)
  }
}

const activate = () => {
  activated.value = true
}
</script>

<template>
  <div class="yt-facade">
    <!-- Facade: real content on first paint -->
    <button v-if="!activated" type="button" class="yt-facade__button" :aria-label="`Play video: ${title}`"
      @pointerover="warmConnections" @focus="warmConnections" @click="activate">
      <img :src="posterSrc" :alt="title" class="yt-facade__poster" width="1280" height="720" loading="lazy"
        decoding="async" @error="onThumbError" />
      <span class="yt-facade__play" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path class="yt-facade__play-bg"
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>

    <!-- Real embed, injected only after user intent -->
    <iframe v-else class="yt-facade__iframe" :src="iframeSrc" :title="title"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen />
  </div>
</template>

<style scoped>
.yt-facade {
  position: relative;
  width: 100%;
  height: stretch;
  aspect-ratio: 16 / 9;
  /* reserves space -> zero layout shift */
  overflow: hidden;
  background: #000;
}

.yt-facade__button {
  all: unset;
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: relative;
}

.yt-facade__button:focus-visible {
  outline: 3px solid #fff;
  outline-offset: -3px;
}

.yt-facade__poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.yt-facade__play {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
}

.yt-facade__play-bg {
  fill: rgba(0, 0, 0, 0.72);
  transition: fill 0.15s ease;
}

.yt-facade__button:hover .yt-facade__play-bg,
.yt-facade__button:focus-visible .yt-facade__play-bg {
  fill: #f03;
  /* YouTube red on intent */
}

.yt-facade__play svg {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
  transition: transform 0.15s ease;
}

.yt-facade__button:hover svg {
  transform: scale(1.08);
}

@media (prefers-reduced-motion: reduce) {

  .yt-facade__play svg,
  .yt-facade__play-bg {
    transition: none;
  }

  .yt-facade__button:hover svg {
    transform: none;
  }
}

.yt-facade__iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>