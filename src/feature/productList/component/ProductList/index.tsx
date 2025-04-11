import { useEffect, useRef } from 'react'
import { useProductsQuery } from '../../api'

import ProductItem from '../ProductItem'
import ProductSkeleton from '../ProductSkeleton'
import Spinner from '@shared/Spinner'
import styles from './ProductList.module.css'

export const ProductList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useProductsQuery()

  const observerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!observerRef.current || !hasNextPage || isLoading || isFetchingNextPage)
      return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          console.log('🔥 Intersection detected')
          if (hasNextPage && !isFetchingNextPage) {
            console.log('🧃 Fetching next page')
            fetchNextPage()
          }
        }
      },
      { threshold: 1.0, rootMargin: '25px' }
    )

    const current = observerRef.current
    observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [hasNextPage, isLoading, isFetchingNextPage, fetchNextPage])

  if (isLoading)
    return (
      <div className={styles.grid}>
        {Array.from({ length: 12 }).map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      </div>
    )

  if (isError) return <p>Error loading products</p>

  return (
    <>
      <div className={styles.grid}>
        {data?.pages.map(page =>
          page.products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        )}
      </div>
      {isFetchingNextPage &&
        Array.from({ length: 4 }).map((_, idx) => (
          <ProductSkeleton key={idx} />
        ))}
      <div ref={observerRef} />
      {isFetchingNextPage && <Spinner />}
    </>
  )
}
