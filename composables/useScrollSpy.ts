export const useScrollspy = () => {
  const observer = ref<IntersectionObserver>()

  const visibleHeadings = ref<string[]>([])

  const activeHeadings = ref<string[]>([])

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const id = entry.target.id

      if (entry.isIntersecting) {
        visibleHeadings.value = [...visibleHeadings.value, id]
      } else {
        visibleHeadings.value = visibleHeadings.value.filter(h => h !== id)
      }
    })
  }

  const startObservingHeadings = (headings: Element[]) => {
    headings.forEach((heading) => {
      if (!observer.value) return

      observer.value.observe(heading)
    })
  }

  watch(visibleHeadings, (newHeadings) => {
    if (newHeadings.length === 0) {
      activeHeadings.value = []
      history.replaceState(null, "", window.location.pathname)
    } else {
      activeHeadings.value = newHeadings

      const activeSectionId = newHeadings[0]
      if (activeSectionId) {
        history.replaceState(null, "", `#${activeSectionId}`)
      }
    }
  })

  onBeforeMount(() => {
    observer.value = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    })
  })

  onBeforeUnmount(() => {
    observer.value?.disconnect()
  })

  return {
    visibleHeadings,
    activeHeadings,
    startObservingHeadings
  }
}
