import Header from "@/components/header";
import Footer from "@/components/footer";
import CompanyHero from "@/components/company-hero";
import CompanyTabbed from "@/components/company-tabbed";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CompanyHero />
      <CompanyTabbed />
      <Footer />
    </div>
  );
}
