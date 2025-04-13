import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './page.module.css'

export default function CreateProductPage() {
  const [images, setImages] = useState<File[]>([])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files)
      setImages(prev => [...prev, ...fileArray])
    }
  }

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>상품 등록</h1>
      <form className={styles.form}>
        <div className={styles.imageWrapper}>
          <label className={styles.label}>이미지 업로드</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileChange}
            className={styles.fileInput}
          />

          {images.length > 0 && (
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              className={styles.thumbnailSwiper}>
              {images.map((file, index) => (
                <SwiperSlide
                  key={index}
                  className={styles.thumbnailSlide}>
                  <div className={styles.thumbnailBox}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`preview-${index}`}
                      className={styles.thumbnailImage}
                    />
                    <button
                      type="button"
                      className={styles.deleteButton}
                      onClick={() => removeImage(index)}>
                      ✕
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        <input
          type="text"
          name="title"
          placeholder="상품명"
          className={styles.input}
        />
        <textarea
          name="description"
          placeholder="상품 설명"
          className={styles.textarea}
        />
        <input
          type="text"
          name="category"
          placeholder="카테고리"
          className={styles.input}
        />
        <input
          type="number"
          name="price"
          placeholder="가격 (숫자)"
          className={styles.input}
        />
        <input
          type="number"
          name="discountPercentage"
          placeholder="할인율 (%)"
          className={styles.input}
        />
        <input
          type="text"
          name="tags"
          placeholder="태그 (쉼표로 구분)"
          className={styles.input}
        />

        <button
          type="submit"
          className={styles.submitButton}>
          상품 등록
        </button>
      </form>
    </div>
  )
}
