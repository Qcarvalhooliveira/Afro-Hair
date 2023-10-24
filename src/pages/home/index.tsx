import { useEffect, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { HighlightSection, HomeContainer } from './styles'
import { ProductCircle } from '../../components/productCircle/index'
import { useProducts } from '../../context/productContext'
import { useLanguage } from '../../context/LanguageContext'
import { Link } from 'react-router-dom'

export const stripeTest = import.meta.env
export function Home() {
  const { products } = useProducts() // pega os produtos por context
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

  const { translation } = useLanguage()
  const recommendatedProducts = products.filter((product) => product.category.includes('Best Seller'))
  const recentProducts = products.slice(-3)

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
            <Link to="/recommendations">
              <button>{translation.homePage.seeAll}</button>
            </Link>
          </div>
          <div className="highlightImages">
            {recommendatedProducts.slice(0, 3).map((product) => (
              <ProductCircle
                key={product.id}
                productImage={product.image}
                altText={`Product ${product.name + 1}`}
                productIndex={product.id}
              />
            ))}
          </div>
        </HighlightSection>

        <HighlightSection>
          <div className="highlightTitles">
            <h2>{translation.homePage.newArrivals}</h2>
            <Link to="/newArrivals">
              <button>{translation.homePage.seeAll}</button>
            </Link>
          </div>
          <div className="highlightImages">
            {recentProducts.map((product) => (
              <ProductCircle
                key={product.id}
                productImage={product.image}
                altText={`Product ${product.name + 1}`}
                productIndex={product.id}
              />
            ))}
          </div>
        </HighlightSection>
      </div>
    </HomeContainer>
  )
}
