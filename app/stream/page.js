'use client'
import { useState, useEffect, Suspense } from 'react'

function User () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch('/api/user')
      const data = await res.json()
      setUser(data)
    }
    fetchUserData()
  }, [])

  if (!user) {
    throw new Error('User data not loaded') // Suspense 会捕获这个错误
  }

  return <h1>User: {user.name}</h1>
}

function News () {
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNewsData = async () => {
      const res = await fetch('/api/news')
      const data = await res?.json()
      setNews(data)
    }
    fetchNewsData()
  }, [])

  if (!news) {
    throw new Error('News data not loaded') // Suspense 会捕获这个错误
  }

  return (
    <div>
      <h2>News:</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Home () {
  return (
    <div>
      <Suspense fallback={<p>Loading user...</p>}>
        <User />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <News />
      </Suspense>
    </div>
  )
}
