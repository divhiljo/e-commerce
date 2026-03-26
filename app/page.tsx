import { CartProvider } from '@/lib/cart-context'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { CategoriesSection } from '@/components/categories-section'
import { TrendingSection } from '@/components/trending-section'
import { HowItWorksSection } from '@/components/how-it-works-section'
import { Footer } from '@/components/footer'
import { CartSidebar } from '@/components/cart-sidebar'

export default function Home() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <HeroSection />
          <CategoriesSection />
          <TrendingSection />
          <HowItWorksSection />
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  )
}
