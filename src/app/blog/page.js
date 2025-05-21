"use client"
import { useState, useEffect } from "react";

import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();

  const fetchPosts = async () => {
    setLoading(true);
    setError();
    
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
    
      if (!res.ok) {
        throw new Error("データの取得に失敗しました");
      }
      
      setPosts(await res.json());
  
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000); // 1秒ローディング
      
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  

  return (
    <div style={{ padding: "2rem" }}>
      <h1>投稿一覧</h1>
      {loading && <p>読み込み中…</p>}
      {error && <p>エラー: {error}</p>}
      
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? "読み込み中" : "再読み込み"}
      </button>

      {!loading && (
        <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      )}
      
    </div>
  )
}