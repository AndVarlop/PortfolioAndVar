// Note: anime.js is loaded dynamically to support various bundlers/environments

// Initialize a set of tasteful, non-intrusive animations using Anime.js
// - Keeps DOM manipulation minimal and only runs on mount
// - Respects users preferring reduced motion
export const initAnime = async () => {
  try {
  // Respect users with reduced motion preference
  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  // Dynamically load Anime.js (robust across environments)
  let animeLib = null
  try {
    const mod = await import('animejs')
    animeLib = mod.default ?? mod
  } catch (e) {
    // If import fails, abort gracefully
    return
  }

  // Hero content fade-in and slide-up
  if (document.querySelector('.hero__content')) {
    animeLib.timeline({ targets: '.hero__content' })
    .add({ opacity: [0, 1], translateY: [20, 0], duration: 800 })
  }

  // Hero visual container fade-in from right
  if (document.querySelector('.hero__visual')) {
    animeLib.timeline({ targets: '.hero__visual' })
    .add({ opacity: [0, 1], translateX: [40, 0], duration: 800 }, '-=600')
  }

  // Portfolio cards reveal with staggered entrance
  const cards = document.querySelectorAll('.portfolio__grid .project')
  if (cards && cards.length > 0) {
    animeLib({
      targets: cards,
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutQuad',
      delay: animeLib.stagger(120, { start: 300 }),
      duration: 600
    })
  }

  // Subtle continuous micro-animations for badges
  if (document.querySelectorAll('.hero__badge').length > 0) {
    animeLib({
      targets: '.hero__badge',
      translateY: [-6, 6, -6],
      direction: 'alternate',
      loop: true,
      duration: 3200,
      easing: 'easeInOutSine'
    })
  }

  // Scroll cue gentle bob
  if (document.querySelector('.hero__scroll')) {
    animeLib({
      targets: '.hero__scroll',
      translateY: [0, 6, 0],
      duration: 1000,
      easing: 'easeInOutSine',
      loop: true
    })
  }
  // Decorative SVG ornament drawing
  const svgPath = document.querySelector('#logo-ornament path')
  if (svgPath && typeof svgPath.getTotalLength === 'function') {
    const length = svgPath.getTotalLength()
    svgPath.style.strokeDasharray = String(length)
    svgPath.style.strokeDashoffset = String(length)
    try {
      animeLib({ targets: svgPath, strokeDashoffset: [length, 0], duration: 900, easing: 'easeOutQuad' })
    } catch (_) {
      // ignore drawing animation if it fails
    }
  }
  } catch (err) {
    // Fail softly to avoid breaking the app if animation initialization fails
    if (typeof console !== 'undefined' && console.error) {
      console.error('[animeInit] Animation initialization failed:', err)
    }
  }
}

export default initAnime
