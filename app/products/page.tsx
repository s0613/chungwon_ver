import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductsHero from "@/components/products-hero";
import ProductsTabbed from "@/components/products-tabbed";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductsHero />
      <ProductsTabbed />
      <Footer />
    </div>
  );
}
