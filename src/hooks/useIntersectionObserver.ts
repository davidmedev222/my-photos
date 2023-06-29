import { useEffect, useRef, useState } from 'react'

type IntersectionTuple = [React.MutableRefObject<null>, boolean]
type IntersectionHook = (options: IntersectionObserverInit, unobserve: boolean) => IntersectionTuple

const useIntersectionObserver: IntersectionHook = (options, unobserve) => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const element = ref.current

    if (element !== null) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const { target, isIntersecting } = entry
          setIsIntersecting(isIntersecting)

          if (isIntersecting && unobserve) return intersectionObserver.unobserve(target)
        })
      }, options)

      intersectionObserver.observe(element)

      return () => intersectionObserver.unobserve(element)
    }
  }, [])

  return [ref, isIntersecting]
}

export default useIntersectionObserver
