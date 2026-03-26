import { Suspense } from 'react'
import { CartProvider } from '@/lib/cart-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartSidebar } from '@/components/cart-sidebar'
import { CatalogueContent } from '@/components/catalogue-content'

export default function CataloguePage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-background">
          <Suspense fallback={
            <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
              <div className="animate-pulse flex flex-col gap-6">
                <div className="h-10 bg-muted rounded-xl w-48" />
                <div className="h-12 bg-muted rounded-xl" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-2xl" />
                  ))}
                </div>
              </div>
            </div>
          }>
            <CatalogueContent />
          </Suspense>
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  )
}
