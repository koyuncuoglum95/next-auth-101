import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/login-btn'
import AccessToken from '@/components/accessToken'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Login />
      <AccessToken />
    </div>
  )
}
