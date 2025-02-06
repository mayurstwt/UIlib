import { ReactNode } from 'react'
import { Search, ShoppingCart, User, Menu, Bell, ChevronDown, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface ComponentData {
  id: string
  name: string
  preview: ReactNode
  code: string
}

// Basic Navbar
const SimpleNavbar = () => (
  <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="font-bold text-xl">Logo</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </div>
  </nav>
)

// E-commerce Navbar
const EcommerceNavbar = () => (
  <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="font-bold text-xl text-orange-500">Store</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

// Dashboard Navbar
const DashboardNavbar = () => (
  <nav className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-8">
          <span className="font-bold text-xl">Dashboard</span>
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Products</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Analytics</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
              <span>Settings</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  </nav>
)

// Modern Hero Section
const ModernHero = () => (
  <div className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Build faster with
            <span className="text-orange-500"> beautiful components</span>
          </h1>
          <p className="text-xl text-gray-400">
            Streamline your development process with our production-ready UI components.
            Built with React and Tailwind CSS.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Components
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="aspect-video rounded-lg bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-1">
            <div className="h-full w-full bg-black rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export const components: ComponentData[] = [
  {
    id: 'navbar-simple',
    name: 'Simple Navbar',
    preview: <SimpleNavbar />,
    code: `export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl">Logo</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}`
  },
  {
    id: 'navbar-ecommerce',
    name: 'E-commerce Navbar',
    preview: <EcommerceNavbar />,
    code: `export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-orange-500">Store</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <User className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}`
  },
  {
    id: 'navbar-dashboard',
    name: 'Dashboard Navbar',
    preview: <DashboardNavbar />,
    code: `export default function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <span className="font-bold text-xl">Dashboard</span>
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <span>Analytics</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                <span>Settings</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}`
  },
  {
    id: 'hero-modern',
    name: 'Modern Hero',
    preview: <ModernHero />,
    code: `export default function Hero() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Build faster with
              <span className="text-orange-500"> beautiful components</span>
            </h1>
            <p className="text-xl text-gray-400">
              Streamline your development process with our production-ready UI components.
              Built with React and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Components
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-orange-500 via-orange-400 to-orange-600 p-1">
              <div className="h-full w-full bg-black rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`
  }
]