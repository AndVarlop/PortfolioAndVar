import { useState, useEffect, useRef } from 'react'

const useTypewriter = (words, speed = 90, pause = 1800) => {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const pauseRef = useRef(false)

  useEffect(() => {
    if (pauseRef.current) return

    const current = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1))
        if (text.length + 1 === current.length) {
          pauseRef.current = true
          setTimeout(() => {
            pauseRef.current = false
            setIsDeleting(true)
          }, pause)
        }
      } else {
        setText(current.substring(0, text.length - 1))
        if (text.length - 1 === 0) {
          setIsDeleting(false)
          setWordIndex(i => (i + 1) % words.length)
        }
      }
    }, isDeleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, speed, pause])

  return text
}

export default useTypewriter
