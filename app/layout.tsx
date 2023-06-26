import Modal from './components/Modals/Modal'
import RegisterModal from './components/Modals/RegisterModal'
import NavBar from './components/Navbar/NavBar'
import './globals.css'

import {Nunito} from "next/font/google"

const font = Nunito({
  subsets:['latin']
})

export const metadata = {
  title: 'Airbnb - Keep Your Tour Safe and Comfortable',
  description: 'Airbnb is a trusted online marketplace for people to list, discover, and book unique accommodations and experiences around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={font.className}>
        <RegisterModal/>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
