import { useEffect, useRef } from 'react'
import { useProductsQuery } from '../../api'

import ProductItem from '../ProductItem'
import Spinner from '../../../../component/shared/Spinner'
import ProductSkeleton from '../ProductSkeleton'
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
    if (!observerRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1.0 }
    )

    const current = observerRef.current
    observer.observe(current)

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  if (isLoading)
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, idx) => (
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
      <div
        ref={observerRef}
        style={{ height: '3px' }}
      />
      {isFetchingNextPage && <Spinner />}
    </>
  )
}
