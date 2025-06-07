import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const businessSectors = [
  {
    title: "Home Appliances",
    image: "/images/home-appliances.png",
    href: "/services/home-appliances",
  },
  {
    title: "Energy & Industrial Markets",
    image: "/images/energy-industrial.jpg",
    href: "/services/energy-industrial",
  },
  {
    title: "Heavy Equipment",
    image: "/images/heavy-equipment.jpg",
    href: "/services/heavy-equipment",
  },
  {
    title: "Travel Services",
    image: "/images/travel-services.jpeg",
    href: "/services/travel-services",
  },
  {
    title: "Medical Equipment",
    image: "/images/medical-equipment.jpg",
    href: "/services/medical-equipment",
  },
  {
    title: "Logistics",
    image: "/images/logistics.jpeg",
    href: "/services/logistics",
  },
  {
    title: "Facility Management",
    image: "/images/facility-management.jpg",
    href: "/services/facility-management",
  },
  {
    title: "Automotive",
    image: "/images/automotive.jpg",
    href: "/services/automotive",
  },
  {
    title: "Manufacturing",
    image: "/images/manufacturing.jpg",
    href: "/services/manufacturing",
  },
];

const whatWeDo = [
  {
    title: "Automotive",
    image: "/images/automotive.jpg",
    description: "Comprehensive automotive solutions and services",
  },
  {
    title: "Manufacturing",
    image: "/images/manufacturing.jpg",
    description: "Advanced manufacturing technologies and processes",
  },
  {
    title: "Information & Communication Tech",
    image: "/images/ict-service.jpg",
    description: "Cutting-edge IT and communication solutions",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between bg-slate-900 text-white">
        {/* <div className="flex items-center p-4">
          <Button variant="ghost" className="text-white" asChild>
            <Link href="#activities" className="text-xs font-medium">
              ACTIVITIES
            </Link>
          </Button>
        </div> */}
        <div className="flex items-center p-4 px-8">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logos/rudder-logo.png"
              alt="Rudder Logo"
              className="h-12"
            />
            {/* <span className="font-bold text-lg">RUDDER</span> */}
          </Link>
        </div>
        {/* <div className="flex items-center p-4">
          <Button variant="ghost" className="text-white" asChild>
            <Link href="#corporate" className="text-xs font-medium">
              CORPORATE
            </Link>
          </Button>
        </div> */}
      </header>

      <main className="flex-1">
        <section className="relative h-screen">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-slate-800/70 z-10"></div>
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-bg.webp')",
            }}
          ></div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white py-40">
            <div className="text-center px-4 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                RUDDER – YOUR TRUSTED PARTNER.
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                Delivering excellence across multiple industries with innovative
                solutions
              </p>
            </div>

            <div className="w-full max-w-4xl mx-auto grid grid-cols-2 mt-auto">
              <Link
                href="#who-we-are"
                className="bg-slate-900 bg-opacity-80 hover:bg-opacity-90 transition-all py-6 text-center font-medium border-r border-slate-700"
              >
                WHO WE ARE
              </Link>
              <Link
                href="#what-we-do"
                className="bg-slate-800 bg-opacity-80 hover:bg-opacity-90 transition-all py-6 text-center font-medium"
              >
                WHAT WE DO
              </Link>
            </div>
          </div>
        </section>

        <section id="who-we-are" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-semibold mb-6 text-slate-900">
                About Rudder
              </h2>

              <p className="text-lg mb-10 text-slate-600 leading-relaxed">
                Rudder Ltd offers the broadest range of products and services
                with core activities include automotive and heavy equipment
                distribution and service, Manufacturing, IT, jewelry and luxury
                goods, retail, home appliances and electronics, travel,
                engineering services to the oil & gas sector, logistics and
                warehousing, geotechnical, geological and material testing
                services, trading and representation.
              </p>

              <p className="text-lg mb-16 text-slate-600 leading-relaxed">
                Always a strong leader in innovation and local participation
                Rudder Ltd has entered the twenty-first century with the same
                flare and dynamism that supported its growth, tempered with
                sound business practices based on quality of products and
                services, safety, risk management and loss prevention.
              </p>

              <div className="bg-slate-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl  mb-12 text-slate-900">
                  Our Specialties
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Automotive",
                    "Information & Communication Technology",
                    "Home Appliances",
                    "Energy & Industrial Markets",
                    "Heavy Equipment",
                    "Travel Services",
                    "Medical Equipment",
                    "Logistics",
                    "Facilities Management",
                    "Geological Testing",
                    "Engineering Services",
                    "Jewelry",
                    "Luxury Goods",
                  ].map((specialty, index) => (
                    <span
                      key={index}
                      className="bg-slate-200 text-slate-800 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="business-sectors" className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              Our Business Sectors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessSectors.map((sector, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-md shadow-md transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
                    <div className="aspect-w-16 aspect-h-9 relative">
                      <img
                        src={sector.image || "/placeholder.svg"}
                        alt={sector.title}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-semibold text-center">
                      {sector.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-do" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-slate-900">
              WHAT WE DO
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              {whatWeDo.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg"
                >
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="bg-slate-900 text-white p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Rudder</h3>
              <p className="text-slate-300 mb-4">
                Your trusted partner for a wide range of products and services
                across multiple industries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#who-we-are"
                    className="text-slate-300 hover:text-white"
                  >
                    Who We Are
                  </Link>
                </li>
                <li>
                  <Link
                    href="#what-we-do"
                    className="text-slate-300 hover:text-white"
                  >
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link
                    href="#business-sectors"
                    className="text-slate-300 hover:text-white"
                  >
                    Business Sectors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-white"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <address className="not-italic text-slate-300">
                <p>Rudder Headquarters</p>
                <p>123 Business Avenue</p>
                <p>Dubai, UAE</p>
                <p className="mt-2">Email: info@rudder.com</p>
                <p>Phone: +971 4 123 4567</p>
              </address>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Rudder Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* <Button
        size="icon"
        className="fixed bottom-6 right-6 bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg z-50"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">Contact</span>
      </Button> */}
    </div>
  );
}
