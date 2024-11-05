'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [user, setUser] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch('/api/user');
      const data = await res.json();
      setUser(data);
    };

    const fetchNewsData = async () => {
      const res = await fetch('/api/news');
      const data = await res.json();
      setNews(data);
    };

    fetchUserData();
    fetchNewsData();
  }, []);

  if (!user || !news) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User: {user.name}</h1>
      <h2>News:</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}



