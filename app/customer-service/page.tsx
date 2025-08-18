// app/customer-service/page.tsx
import Header from "@/components/header";
import Footer from "@/components/footer";
import CustomerServiceHero from "@/components/customer-service-hero";
import CustomerServiceTabbed from "@/components/customer-service-tabbed";

export default function CustomerServicePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <CustomerServiceHero />
        <CustomerServiceTabbed />
      </main>
      <Footer />
    </div>
  );
}
