import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
     <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout