import { useEffect, useRef } from 'react'

interface Props {
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
  isLoading: boolean
  isFetchingNextPage: boolean
}

export const useInfiniteScroll = ({
  hasNextPage,
  fetchNextPage,
  isLoading,
  isFetchingNextPage
}: Props) => {
  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isLoading || isFetchingNextPage)
      return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage()
          }
        }
      },
      { threshold: 1.0, rootMargin: '30px' }
    )

    const current = observerRef.current
    observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [hasNextPage, isLoading, isFetchingNextPage, fetchNextPage])

  return { observerRef }
}
