  import Image from "next/image"
  import Header from "@/components/header"
  import Footer from "@/components/footer"
  import Hero from "@/components/hero"
  import TrustedFoodCompany from "@/components/sections/TrustedFoodCompany"
  import ProductCarousel from "@/components/product-carousel"

  export default function LandingPage() {


    return (
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <TrustedFoodCompany />



      {/* Product Carousel Section */}
        <ProductCarousel />


        <Footer />
      </div>
    )
  }
