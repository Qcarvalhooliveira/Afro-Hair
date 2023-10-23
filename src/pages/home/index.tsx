import {  useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { HighlightSection, HomeContainer } from './styles'
import { ProductCircle } from '../../components/productCircle/index'
import {  useProducts } from '../../context/productContext'
import { useLanguage } from '../../context/LanguageContext'

export const stripeTest = import.meta.env
export function Home() {
  const {products} = useProducts() // pega os produtos por context
  const slideInterval = 2000
  const [_currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({ loop: true })

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider && slider.current) {
        slider.current.next()
        setCurrentSlide((prevSlide) => {
          if (prevSlide === products.length - 1) {
            return 0
          } else {
            return prevSlide + 1
          }
        })
      }
    }, slideInterval)

    return () => {
      clearInterval(interval)
    }
  }, [slider])

  const { translation } = useLanguage();

  return (
    <HomeContainer>
      <div ref={sliderRef} className="keen-slider">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className={`keen-slider__slide number-slide${product.id}`}
          >
            <div className="sliderImgContainer">
              <img src={product.image} alt={`Product ${product.name}`} />
            </div>
          </div>
        ))}
      </div>
      <div className="highligths">
        <HighlightSection>
          <div className="highlightTitles">
            <h2>{translation.homePage.recommendations}</h2>
            <button>{translation.homePage.seeAll}</button>
          </div>
          <div className="highlightImages">
            {products.slice(4, 7).map((product) => (
              <ProductCircle
                key={product.id}
                productImage={product.image}
                altText={`Product ${product.name + 1}`}
              />
            ))}
          </div>
        </HighlightSection>

        <HighlightSection>
          <div className="highlightTitles">
            <h2>{translation.homePage.newArrivals}</h2>
            <button>{translation.homePage.seeAll}</button>
          </div>
          <div className="highlightImages">
            {products.slice(7, 10).map((product) => (
              <ProductCircle
                key={product.id}
                productImage={product.image}
                altText={`Product ${product.name + 1}`}
              />
            ))}
          </div>
        </HighlightSection>
        
      </div>
    </HomeContainer>
  )
}
