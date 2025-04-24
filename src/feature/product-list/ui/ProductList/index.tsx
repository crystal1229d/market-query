import { useProductsQuery } from '@feature/product-list/hook/useProductsQuery'
import { useInfiniteScroll } from '@hook/useInfiniteScroll'
import ProductItem from '@product/ui/ProductItem'
import Spinner from '@ui/Spinner'
import ProductSkeletonList from '@product/ui/ProductSkeletonList'
import styles from './ProductList.module.css'

interface Props {
  sortBy?: 'discountPercentage' | 'rating'
  keyword?: string
}

export const ProductList = ({ sortBy, keyword }: Props) => {
  const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductsQuery({ sortBy, keyword })

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
          page.products.map(product => <ProductItem key={product.id} product={product} />)
        )}
      </div>
      {isFetchingNextPage && <ProductSkeletonList count={4} />}
      <div ref={observerRef} />
      {isFetchingNextPage && <Spinner />}
    </>
  )
}
