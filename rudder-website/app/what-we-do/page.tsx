import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WhatWeDo() {
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
          <h1 className="text-xl font-bold">WHAT WE DO</h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>IT Infrastructure</CardTitle>
                <CardDescription className="text-slate-300">Building robust foundations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Network design and implementation</li>
                  <li>Server infrastructure and virtualization</li>
                  <li>Storage solutions</li>
                  <li>Disaster recovery planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Cloud Services</CardTitle>
                <CardDescription className="text-slate-300">Enabling digital transformation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Cloud migration strategies</li>
                  <li>Hybrid cloud solutions</li>
                  <li>Cloud security and compliance</li>
                  <li>Managed cloud services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription className="text-slate-300">Protecting your digital assets</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Security assessments and audits</li>
                  <li>Threat detection and response</li>
                  <li>Data protection solutions</li>
                  <li>Security awareness training</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Managed Services</CardTitle>
                <CardDescription className="text-slate-300">Ongoing support and optimization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>24/7 monitoring and support</li>
                  <li>Proactive maintenance</li>
                  <li>Help desk services</li>
                  <li>IT strategy and consulting</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
            <p className="mb-6 text-slate-300">
              Contact us today to discuss how Rudder can help your business succeed.
            </p>
            <Button className="bg-slate-700 hover:bg-slate-600">Contact Us</Button>
          </div>
        </div>
      </main>
    </div>
  )
}
