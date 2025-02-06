import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-green-400 to-orange-500 bg-clip-text text-transparent animate-gradient">
          Beautiful UI Components
          <br />
          For Modern Web Apps
        </h1>
        
        <p className="mt-6 text-lg sm:text-xl text-gray-300">
          Production-ready components built with React and Tailwind CSS.
        </p>
        
        <Link 
          href="/components"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
        >
          Browse Components
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </main>
  )
}