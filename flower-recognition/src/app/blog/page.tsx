'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Post = {
  title: string;
  content: string;
  author: string;
  date: string;
};

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: 'Trandafirul',
      content: 'Trandafirul este simbolul iubirii.',
      author: 'Admin',
      date: new Date().toLocaleString()
    },
    {
      title: 'Lavanda',
      content: 'Lavanda are proprietăți calmante.',
      author: 'Admin',
      date: new Date().toLocaleString()
    }
  ]);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [user, setUser] = useState<string | null>(null);
 const router = useRouter();

  useEffect(() => {
    const loggedUser = localStorage.getItem('user');
    setUser(loggedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
     router.push('/logIn');
  };

  const handleLogin = () => {
    router.push('/logIn');
  };

  const handleSignup = () => {
     router.push('/signUp');
  };

  const addPost = () => {
    if (title && content && user) {
      const newPost: Post = {
        title,
        content,
        author: user,
        date: new Date().toLocaleString()
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="container">
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Blogul Florilor</h1>
        <div>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <button onClick={handleLogin}>Login</button>
              <button onClick={handleSignup} style={{ marginLeft: '10px' }}>
                Sign In
              </button>
            </>
          )}
        </div>
      </header>

      {user && (
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
      )}

      <section className="posts">
        <h2>Postări</h2>
        {posts.map((post, index) => (
          <article key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>
              Publicat de <strong>{post.author}</strong> pe <em>{post.date}</em>
            </small>
          </article>
        ))}
      </section>
    </div>
  );
};

export default BlogPage;