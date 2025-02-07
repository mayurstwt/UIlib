"use client"

import { useState } from 'react'
import { Code2, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ComponentPreview from '@/components/component-preview'
import { components } from '@/lib/components-data'

export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState(components[0])
  const [view, setView] = useState<'preview' | 'code'>('preview')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Banner */}
      <div className="h-[50vh] bg-black flex items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center">
          Craft Beautiful Interfaces
          <br />
          <span className="text-orange-500">With Ready-to-Use Components</span>
        </h1>
      </div>

      {/* Components Section */}
      <div className="min-h-[100vh] xl:mx-40 flex flex-col md:flex-row">
        {/* Mobile Sidebar Toggle */}
        <div className="md:hidden p-4">
          <Button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full"
          >
            {isSidebarOpen ? 'Hide Components' : 'Show Components'}
          </Button>
        </div>

        {/* Sidebar */}
        <div className={cn(
          "w-full md:w-[30%] border-r",
          "md:block", // Always visible on desktop
          isSidebarOpen ? "block" : "hidden" // Toggle on mobile
        )}>
          <nav className="p-4 space-y-1">
            {components.map((component) => (
              <button
                key={component.id}
                onClick={() => {
                  setSelectedComponent(component)
                  setIsSidebarOpen(false) // Close sidebar on mobile after selection
                }}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-lg transition-colors",
                  selectedComponent.id === component.id
                    ? "bg-orange-500 text-white"
                    : ""
                )}
              >
                {component.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Preview Area */}
        <div className="w-full md:w-[70%] p-4 md:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold">{selectedComponent.name}</h2>
            <div className="flex space-x-2">
              <Button
                variant={view === 'preview' ? 'default' : 'outline'}
                onClick={() => setView('preview')}
                size="sm"
              >
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Button
                variant={view === 'code' ? 'default' : 'outline'}
                onClick={() => setView('code')}
                size="sm"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Code
              </Button>
            </div>
          </div>

          <ComponentPreview
            component={selectedComponent}
            view={view}
          />
        </div>
      </div>
    </div>
  )
}