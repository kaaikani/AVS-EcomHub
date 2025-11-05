"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const ACCENT = "#FF6600"

export function PricingServices() {
  return (
    <section id="pricing" className="text-white">
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mx-auto mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", border: `1px solid ${ACCENT}` }}
          >
            Transparent pricing
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Packages.</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-neutral-300">
            Choose the perfect plan for your business needs.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Starter Plan */}
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <h3 className="text-sm font-semibold text-neutral-100">Starter</h3>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">Free</div>
                <span className="pb-0.5 text-[11px] text-neutral-300">trial</span>
              </div>
              <Button
                className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
              >
                Get Started
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "Unlimited products",
                  "Basic customization",
                  "Standard support",
                  "Mobile responsive",
                  "Basic analytics",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Professional Plan */}
          <Card className="relative overflow-hidden rounded-2xl liquid-glass shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300">
            <CardHeader className="space-y-3 pb-4">
              <h3 className="text-sm font-semibold text-neutral-100">Professional</h3>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">Custom</div>
                <span className="pb-0.5 text-[11px] text-neutral-300">pricing</span>
              </div>
              <Button
                className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: "#0a0a0a", color: "#ffffff", border: "1px solid #333" }}
              >
                Contact Sales
              </Button>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="grid gap-2">
                {[
                  "Everything in Starter",
                  "Advanced customization",
                  "Priority support",
                  "Advanced analytics",
                  "API access",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative overflow-hidden rounded-2xl liquid-glass-enhanced shadow-[0_16px_50px_rgba(0,0,0,0.4)] transition-all duration-300">
            <CardHeader className="relative space-y-3 pb-4">
              <h3 className="text-sm font-semibold text-neutral-100">Enterprise</h3>
              <div className="flex items-end gap-2 text-white">
                <div className="text-xl font-bold tracking-tight">Custom</div>
                <span className="pb-0.5 text-[11px] text-neutral-300">pricing</span>
              </div>
              <Button
                className="w-full rounded-full px-4 py-2 text-sm font-medium transition-colors"
                style={{ backgroundColor: ACCENT, color: "#000000" }}
              >
                Contact Sales
              </Button>
            </CardHeader>
            <CardContent className="relative pt-0">
              <ul className="grid gap-2">
                {[
                  "Everything in Professional",
                  "White-label solution",
                  "Dedicated support",
                  "Custom integrations",
                  "SLA guarantee",
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: ACCENT }} />
                    <span className="text-sm text-neutral-100">{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter />
          </Card>
        </div>
      </div>
    </section>
  )
}

