import { useEffect, useRef } from 'react'
import { useProductsQuery } from '../../api'

import ProductItem from '../ProductItem'
import Spinner from '@shared/Spinner'
import ProductSkeletonList from '../ProductSkeletonList'
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

  if (isLoading) return <ProductSkeletonList count={12} />
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
      {isFetchingNextPage && <ProductSkeletonList count={4} />}
      <div ref={observerRef} />
      {isFetchingNextPage && <Spinner />}
    </>
  )
}
