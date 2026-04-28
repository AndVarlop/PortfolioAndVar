import { useEffect, useRef } from 'react'
import anime from 'animejs'

export const useAnimeIn = (selector, options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current?.querySelector(selector)
    if (!element) return

    const defaultOptions = {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 800,
      easing: 'easeOutQuad',
      delay: anime.stagger(100),
    }

    anime.set(element, { opacity: 0, translateY: 20 })
    anime(Object.assign(defaultOptions, options, { targets: element }))
  }, [selector, options])

  return ref
}

export const useAnimeScroll = (selector, options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current?.querySelector(selector)
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const defaultOptions = {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 700,
          easing: 'easeOutQuad',
        }

        anime(Object.assign(defaultOptions, options, { targets: element }))
        observer.unobserve(element)
      }
    }, { threshold: 0.2 })

    observer.observe(element)
    return () => observer.disconnect()
  }, [selector, options])

  return ref
}

export const useAnimeCountUp = (ref, target, duration = 2000) => {
  useEffect(() => {
    if (!ref.current) return

    anime({
      targets: ref.current,
      innerHTML: [0, target],
      round: 1,
      duration,
      easing: 'easeOutQuad',
    })
  }, [target, duration])
}

export const useAnimeBarFill = (ref, percent, duration = 1200) => {
  useEffect(() => {
    if (!ref.current) return

    anime({
      targets: ref.current,
      width: `${percent}%`,
      duration,
      easing: 'easeOutQuad',
    })
  }, [percent, duration])
}

export const useAnimeStagger = (selector, options = {}) => {
  const ref = useRef(null)

  useEffect(() => {
    const elements = ref.current?.querySelectorAll(selector)
    if (!elements || elements.length === 0) return

    const defaultOptions = {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 600,
      easing: 'easeOutQuad',
      delay: anime.stagger(80),
    }

    anime.set(elements, { opacity: 0, translateY: 20 })
    anime(Object.assign(defaultOptions, options, { targets: elements }))
  }, [selector, options])

  return ref
}

export default useAnimeIn
