import { useSession, signIn, signOut } from "next-auth/react"

export default function AccessToken() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  // Check if the session and accessToken exist
  if (loading) return <div>Loading...</div>
  if (!session) return <button onClick={() => signIn()}>Sign in</button>

  // Safely access accessToken since session exists
  const { accessToken } = session

  return <div>Access Token: {accessToken}</div>
}
