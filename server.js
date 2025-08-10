import express from 'express';
import path from 'path';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { database, generateId } from './src/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function sanitize(input) {
  if (typeof input !== 'string') return '';
  return input.trim();
}

app.get('/', async (req, res) => {
  const db = await database();
  const posts = [...db.data.posts]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 5)
    .map((p) => ({
      id: p.id,
      title: p.title,
      created_at: p.created_at,
      excerpt: (p.content || '').slice(0, 160),
    }));
  res.render('index', { title: 'Home', posts });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', form: { name: '', email: '', message: '' }, errors: {}, query: req.query });
});

app.post('/contact', async (req, res) => {
  const db = await database();
  const name = sanitize(req.body.name);
  const email = sanitize(req.body.email);
  const message = sanitize(req.body.message);

  const errors = {};
  if (!name) errors.name = 'Name is required';
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = 'Valid email is required';
  if (!message || message.length < 10) errors.message = 'Message must be at least 10 characters';

  if (Object.keys(errors).length) {
    return res.status(400).render('contact', { title: 'Contact', form: { name, email, message }, errors, query: {} });
  }

  db.data.contacts.push({ id: generateId(db.data.contacts), name, email, message, created_at: new Date().toISOString() });
  await db.write();
  res.redirect('/contact?success=1');
});

app.get('/posts', async (req, res) => {
  const db = await database();
  const posts = [...db.data.posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  res.render('posts/index', { title: 'Posts', posts });
});

app.get('/posts/new', (req, res) => {
  res.render('posts/new', { title: 'New Post', form: { title: '', content: '' }, errors: {} });
});

app.post('/posts', async (req, res) => {
  const db = await database();
  const title = sanitize(req.body.title);
  const content = sanitize(req.body.content);
  const errors = {};
  if (!title) errors.title = 'Title is required';
  if (!content || content.length < 20) errors.content = 'Content must be at least 20 characters';
  if (Object.keys(errors).length) {
    return res.status(400).render('posts/new', { title: 'New Post', form: { title, content }, errors });
  }
  const id = generateId(db.data.posts);
  const now = new Date().toISOString();
  db.data.posts.push({ id, title, content, created_at: now, updated_at: null });
  await db.write();
  res.redirect(`/posts/${id}`);
});

app.get('/posts/:id', async (req, res) => {
  const db = await database();
  const id = Number(req.params.id);
  const post = db.data.posts.find((p) => p.id === id);
  if (!post) return res.status(404).render('404', { title: 'Not Found' });
  res.render('posts/show', { title: post.title, post });
});

app.get('/posts/:id/edit', async (req, res) => {
  const db = await database();
  const id = Number(req.params.id);
  const post = db.data.posts.find((p) => p.id === id);
  if (!post) return res.status(404).render('404', { title: 'Not Found' });
  res.render('posts/edit', { title: `Edit: ${post.title}`, form: { title: post.title, content: post.content }, errors: {}, id });
});

app.post('/posts/:id', async (req, res) => {
  const db = await database();
  const id = Number(req.params.id);
  const title = sanitize(req.body.title);
  const content = sanitize(req.body.content);
  const errors = {};
  if (!title) errors.title = 'Title is required';
  if (!content || content.length < 20) errors.content = 'Content must be at least 20 characters';
  if (Object.keys(errors).length) {
    return res.status(400).render('posts/edit', { title: 'Edit Post', form: { title, content }, errors, id });
  }
  const post = db.data.posts.find((p) => p.id === id);
  if (!post) return res.status(404).render('404', { title: 'Not Found' });
  post.title = title;
  post.content = content;
  post.updated_at = new Date().toISOString();
  await db.write();
  res.redirect(`/posts/${id}`);
});

app.post('/posts/:id/delete', async (req, res) => {
  const db = await database();
  const id = Number(req.params.id);
  db.data.posts = db.data.posts.filter((p) => p.id !== id);
  await db.write();
  res.redirect('/posts');
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Not Found' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});