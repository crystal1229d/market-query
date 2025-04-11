import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import styles from './Banner.module.css'

const bannerImages: string[] = [
  '/img/banner_01.png',
  '/img/banner_02.jpg',
  '/img/banner_03.jpg'
]

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(1)

  return (
    <div className={styles.wrapper}>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSlideChange={swiper => setCurrentSlide(swiper.realIndex + 1)}
        className="swiper">
        {bannerImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className={styles.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles['page-indicator']}>
        {currentSlide} / {bannerImages.length}
      </div>
    </div>
  )
}
