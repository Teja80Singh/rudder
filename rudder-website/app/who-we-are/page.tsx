import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function WhoWeAre() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Button variant="ghost" size="sm" className="text-white" asChild>
            <Link href="/">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-xl font-bold">WHO WE ARE</h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About Rudder</h2>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">
              Rudder is a leading technology solutions provider with over 20 years of experience delivering innovative
              IT services to businesses across various industries.
            </p>

            <p className="mb-6">
              Founded in 2003, our company has grown from a small IT consulting firm to a comprehensive technology
              partner offering end-to-end solutions for businesses of all sizes. Our team of experts brings together
              deep technical knowledge and business acumen to help our clients navigate the complex digital landscape.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Our Mission</h3>
            <p className="mb-6">
              To empower organizations through technology, enabling them to achieve their business objectives
              efficiently and securely.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Our Vision</h3>
            <p className="mb-6">
              To be the most trusted technology partner, known for our expertise, reliability, and commitment to client
              success.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Our Values</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Excellence in everything we do</li>
              <li className="mb-2">Integrity in all our relationships</li>
              <li className="mb-2">Innovation that drives meaningful results</li>
              <li className="mb-2">Collaboration with our clients and partners</li>
              <li>Responsibility towards our community and environment</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
