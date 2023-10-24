import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/index.tsx'
import { Product } from './pages/product/index.tsx'
import { Checkout } from './pages/checkout/index.tsx'
import { Categorie } from './pages/categorie/index.tsx'
import { NewArrivals } from './pages/newArrivals/index.tsx'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/categorie/:category" element={<Categorie />} />
      <Route path="/newArrivals" element={<NewArrivals />} />
    </Routes>
  )
}
