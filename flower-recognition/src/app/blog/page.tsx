'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
type Post = {
  title: string;
  content: string;
};

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Trandafirul', content: 'Trandafirul este simbolul iubirii.' },
    { title: 'Lavanda', content: 'Lavanda are proprietăți calmante.' }
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
     router.push('/logIn');
  };

  const addPost = () => {
    if (title && content) {
      setPosts([...posts, { title, content }]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Blogul Florilor</h1>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <section className="add-post">
        <h2>Adaugă o postare nouă</h2>
        <input
          type="text"
          placeholder="Titlu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Conținut"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button onClick={addPost}>Adaugă</button>
      </section>

      <section className="posts">
        <h2>Postări</h2>
        {posts.map((post, index) => (
          <article key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;
