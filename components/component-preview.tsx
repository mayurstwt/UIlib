"use client"

import { Copy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ComponentData } from '@/lib/components-data'

interface ComponentPreviewProps {
  component: ComponentData
  view: 'preview' | 'code'
}

export default function ComponentPreview({ component, view }: ComponentPreviewProps) {
  const copyCode = () => {
    navigator.clipboard.writeText(component.code)
    toast.success('Code copied to clipboard!')
  }

  if (view === 'code') {
    return (
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          onClick={copyCode}
          className="absolute top-4 right-4"
        >
          <Copy className="h-4 w-4" />
        </Button>
        <pre className="p-4 rounded-lg bg-gray-950 text-gray-100 overflow-x-auto">
          <code>{component.code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className="p-4 border rounded-lg">
      {component.preview}
    </div>
  )
}