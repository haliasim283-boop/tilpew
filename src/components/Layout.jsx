import { Outlet } from 'react-router-dom'
import TopHeader from './TopHeader'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import ScrollManager from './ScrollManager'

export default function Layout() {
  return (
    <div className="min-h-screen bg-canvas">
      <ScrollManager />
      <TopHeader />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
