import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/damr9jzpb/video/upload/v1738861286/1350205-hd_1280_720_30fps_nkofmq.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Black tint overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
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
