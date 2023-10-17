import { Inter } from 'next/font/google'
import SideBar from '@/component/common/SideBar'
import CustombodyHeader from '@/component/common/CustombodyHeader'
import Dashboard from '@/component/dashboard/Dashboard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='px-8 py-8 bg-[#F8F9FC] '>
      
      <Dashboard />
    </div>
  )
}
