import { useProductsQuery } from '../../api'
import ProductItem from '../ProductItem'
import Spinner from '@shared/Spinner'
import ProductSkeletonList from '../ProductSkeletonList'
import styles from './ProductList.module.css'
import { useInfiniteScroll } from '@/hook/useInfiniteScroll'

export const ProductList = () => {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useProductsQuery()

  const { observerRef } = useInfiniteScroll({
    hasNextPage,
    fetchNextPage,
    isLoading,
    isFetchingNextPage
  })

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
