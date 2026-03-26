import { notFound } from 'next/navigation'
import { CartProvider } from '@/lib/cart-context'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CartSidebar } from '@/components/cart-sidebar'
import { ProductDetail } from '@/components/product-detail'
import { catalogueProducts } from '@/lib/data'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = catalogueProducts.find((p) => p.id === id)

  if (!product) {
    notFound()
  }

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 bg-background">
          <ProductDetail product={product} />
        </main>
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  )
}

export function generateStaticParams() {
  return catalogueProducts.map((product) => ({
    id: product.id,
  }))
}
