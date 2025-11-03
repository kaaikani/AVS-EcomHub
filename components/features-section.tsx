"use client"

import { useEffect, useRef, useState } from "react"

const AnimatedEcommerceDemo = ({ isActive }: { isActive: boolean }) => {
  const [cartItems, setCartItems] = useState(0)
  const [orders, setOrders] = useState([
    { id: "#1234", status: "processing", visible: false },
    { id: "#1235", status: "processing", visible: false },
    { id: "#1236", status: "completed", visible: false },
  ])

  useEffect(() => {
    if (!isActive) return

    const timer = setTimeout(() => {
      setCartItems(3)
      setTimeout(() => {
        setOrders((prev) => prev.map((order, i) => ({ ...order, visible: i === 0 })))
        setTimeout(() => {
          setOrders((prev) => prev.map((order, i) => ({ ...order, visible: i <= 1 })))
          setTimeout(() => {
            setOrders((prev) => prev.map((order, i) => ({ ...order, visible: true, status: i === 2 ? "completed" : "processing" })))
          }, 1000)
        }, 1000)
      }, 800)
    }, 500)

    return () => clearTimeout(timer)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden relative">
      {/* <div className="absolute top-2 right-2 flex items-center gap-1">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-slate-500 font-medium">Online</span>
      </div> */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-600">Cart: {cartItems} items</span>
          <span className="text-green-600 font-medium">₹{cartItems * 49}.00</span>
        </div>
        {orders.map((order, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-2 rounded transition-all duration-500 ${
              order.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            } ${order.status === "completed" ? "bg-green-100" : "bg-blue-100"}`}
          >
            <span className="text-xs text-slate-700">{order.id}</span>
            <span className={`text-xs font-medium ${order.status === "completed" ? "text-green-600" : "text-blue-600"}`}>
              {order.status === "completed" ? "✓ Shipped" : "Processing"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedMobileAppDemo = ({ isActive }: { isActive: boolean }) => {
  const [downloads, setDownloads] = useState(0)
  const [activeUsers, setActiveUsers] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const interval = setInterval(() => {
      setDownloads((prev) => Math.min(prev + 1, 1250))
      setActiveUsers((prev) => Math.min(prev + 2, 342))
    }, 100)

    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 flex flex-col justify-center relative">
      <div className="absolute top-2 right-2 flex items-center gap-1">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <span className="text-xs text-slate-500 font-medium">Active</span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">📱 Mobile App</span>
          <span className="text-xs font-bold text-green-600">{downloads}+</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">👥 Active Users</span>
          <span className="text-xs font-bold text-blue-600">{activeUsers}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-500" style={{ width: `${(activeUsers / 350) * 100}%` }}></div>
        </div>
      </div>
    </div>
  )
}

const AnimatedBillingDemo = ({ isActive }: { isActive: boolean }) => {
  const [invoices, setInvoices] = useState([
    { id: "INV-001", amount: 1250, status: "pending", visible: false },
    { id: "INV-002", amount: 890, status: "paid", visible: false },
    { id: "INV-003", amount: 2100, status: "pending", visible: false },
  ])

  useEffect(() => {
    if (!isActive) return

    invoices.forEach((_, index) => {
      setTimeout(
        () => {
          setInvoices((prev) => prev.map((inv, i) => (i === index ? { ...inv, visible: true } : inv)))
        },
        500 + index * 600,
      )
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-2">
        {invoices.map((invoice, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-2 rounded transition-all duration-500 ${
              invoice.visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
            } ${invoice.status === "paid" ? "bg-green-100" : "bg-yellow-100"}`}
          >
            <span className="text-xs text-slate-700">{invoice.id}</span>
            <span className="text-xs font-medium text-slate-700">₹{invoice.amount}</span>
            <span className={`text-xs font-medium ${invoice.status === "paid" ? "text-green-600" : "text-yellow-600"}`}>
              {invoice.status === "paid" ? "✓ Paid" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedInventoryDemo = ({ isActive }: { isActive: boolean }) => {
  const [products, setProducts] = useState([
    { name: "Product A", stock: 0, visible: false },
    { name: "Product B", stock: 0, visible: false },
    { name: "Product C", stock: 0, visible: false },
  ])

  useEffect(() => {
    if (!isActive) return

    products.forEach((_, index) => {
      setTimeout(() => {
        const targetStock = [45, 78, 32][index]
        const interval = setInterval(() => {
          setProducts((prev) =>
            prev.map((product, i) => {
              if (i === index && product.stock < targetStock) {
                return {
                  ...product,
                  stock: Math.min(product.stock + 2, targetStock),
                  visible: true,
                }
              }
              return product
            }),
          )
        }, 50)

        setTimeout(() => clearInterval(interval), 1000)
      }, index * 400)
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-2">
        {products.map((product, i) => (
          <div key={i} className={`transition-all duration-500 ${product.visible ? "opacity-100" : "opacity-0"}`}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-slate-700">{product.name}</span>
              <span className="text-xs font-medium text-slate-700">{product.stock} units</span>
            </div>
            <div className="flex-1 bg-slate-200 rounded-full h-1.5">
              <div className="bg-blue-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${(product.stock / 100) * 100}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const AnimatedSalesDemo = ({ isActive }: { isActive: boolean }) => {
  const [revenue, setRevenue] = useState(0)
  const [orders, setOrders] = useState(0)

  useEffect(() => {
    if (!isActive) return

    const revenueInterval = setInterval(() => {
      setRevenue((prev) => Math.min(prev + 25, 12500))
    }, 100)

    const ordersInterval = setInterval(() => {
      setOrders((prev) => Math.min(prev + 1, 156))
    }, 200)

    return () => {
      clearInterval(revenueInterval)
      clearInterval(ordersInterval)
    }
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32 overflow-hidden">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">💰 Revenue</span>
          <span className="text-xs font-bold text-green-600">₹{revenue.toLocaleString()}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">📦 Orders</span>
          <span className="text-xs font-bold text-blue-600">{orders}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${(revenue / 12500) * 100}%` }}></div>
        </div>
      </div>
    </div>
  )
}

const AnimatedERPDemo = ({ isActive }: { isActive: boolean }) => {
  const [modules, setModules] = useState([
    { name: "Inventory", synced: false },
    { name: "Orders", synced: false },
    { name: "Finance", synced: false },
    { name: "Reports", synced: false },
  ])

  useEffect(() => {
    if (!isActive) return

    modules.forEach((_, index) => {
      setTimeout(
        () => {
          setModules((prev) => prev.map((module, i) => (i === index ? { ...module, synced: true } : module)))
        },
        500 + index * 400,
      )
    })
  }, [isActive])

  return (
    <div className="bg-slate-50 rounded-lg p-4 h-32">
      <div className="grid grid-cols-2 gap-2">
        {modules.map((module, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-2 rounded transition-all duration-500 ${
              module.synced ? "bg-green-100" : "bg-white"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-colors duration-500 ${
                module.synced ? "bg-green-500" : "bg-slate-300"
              }`}
            />
            <span className="text-xs text-slate-700">{module.name}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs text-slate-500">{modules.filter((m) => m.synced).length}/4 modules synced</div>
      </div>
    </div>
  )
}

const features = [
  {
    title: "Complete E-commerce Platform",
    description:
      "Full-featured online store with product catalog, shopping cart, secure checkout, and order management. Everything you need to sell online.",
    demo: AnimatedEcommerceDemo,
    size: "large",
  },
  {
    title: "Mobile App (PWA)",
    description:
      "Progressive Web App that works like a native mobile app. Let customers shop on-the-go with offline capabilities and push notifications.",
    demo: AnimatedMobileAppDemo,
    size: "medium",
  },
  {
    title: "Automated Billing & Invoicing",
    description:
      "Streamlined billing system that generates invoices automatically, tracks payments, sends reminders, and manages your financial records.",
    demo: AnimatedBillingDemo,
    size: "medium",
  },
  {
    title: "Real-time Inventory Management",
    description:
      "Track stock levels across all channels, get low-stock alerts, manage suppliers, and automate reordering. Never oversell or run out.",
    demo: AnimatedInventoryDemo,
    size: "large",
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Monitor revenue, track orders, analyze customer behavior, and make data-driven decisions with comprehensive reporting tools.",
    demo: AnimatedSalesDemo,
    size: "medium",
  },
  {
    title: "Integrated ERP System",
    description:
      "Unified ERP that syncs inventory, orders, finance, and reports. All your business data in one place, fully integrated with your store.",
    demo: AnimatedERPDemo,
    size: "medium",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeDemo, setActiveDemo] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("[v0] Features Section is now visible") // Added debug log
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative z-10">
      <div className="bg-white rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-slate-200 rounded-full animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div
            className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.15.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
              All-in-One Platform - Ready to Deploy
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                Scale Your Business
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Complete e-commerce platform with mobile app, billing software, and ERP integration. Deploy in days and start selling immediately.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${feature.size === "large" ? "md:col-span-2" : ""}`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                }}
                onMouseEnter={() => setActiveDemo(index)}
                onMouseLeave={() => setActiveDemo(null)}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300">
                  <div className="mb-6">
                    <feature.demo isActive={activeDemo === index || isVisible} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
