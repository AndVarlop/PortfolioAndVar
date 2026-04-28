// Scroll Reveal using IntersectionObserver
// Elements with class 'scroll-reveal' will fade/slide into view when scrolled into viewport
export default function initScrollReveal() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const reveals = document.querySelectorAll('.scroll-reveal')
  if (!reveals.length) return

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Optional per-element delay support via data-scroll-delay (ms)
        const delay = parseInt(entry.target.getAttribute('data-scroll-delay') || '0', 10)
        if (!isNaN(delay) && delay > 0) {
          entry.target.style.transitionDelay = `${delay}ms`
        }
        entry.target.classList.add('is-visible')
        obs.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.15,
  })

  reveals.forEach((el) => observer.observe(el))
}
