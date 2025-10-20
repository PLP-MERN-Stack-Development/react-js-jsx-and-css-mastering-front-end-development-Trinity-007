import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner.jsx';
import Card from '../components/Card.jsx';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPosts() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`, { signal: controller.signal });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
    return () => controller.abort();
  }, [page]);

  const filtered = posts.filter(p => p.title.includes(query) || p.body.includes(query));

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>
      <div className="flex gap-2 mb-4">
        <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search posts..." className="flex-1 border p-2 rounded" />
      </div>

      {loading && <Spinner />}
      {error && <div className="text-red-500">{error}</div>}

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(p => (
          <Card key={p.id} title={p.title}>
            <p className="text-sm text-gray-700 dark:text-gray-200">{p.body}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center mt-4">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
        <div>Page {page}</div>
        <button onClick={()=>setPage(p=>p+1)} className="px-3 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
}
