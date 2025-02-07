import SimpleNavbar from '@/app/components/SimpleNavbar/page'
import SimpleNavbarPreview from '@/app/components/SimpleNavbar/preview'
import { ReactNode } from 'react'

export interface ComponentData {
  id: string
  name: string
  preview: ReactNode
  code: JSX.Element
}


export const components: ComponentData[] = [
  {
    id: 'navbar',
    name: 'Simple Navigation Bar',
    preview: <SimpleNavbar />,
    code: <SimpleNavbarPreview/>
  },
]