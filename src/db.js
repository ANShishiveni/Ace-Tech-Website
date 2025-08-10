import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import path from 'path';
import { fileURLToPath } from 'url';

let dbInstance = null;

function getDbPath() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, '..', 'data.json');
}

export async function database() {
  if (dbInstance) return dbInstance;
  const adapter = new JSONFile(getDbPath());
  const db = new Low(adapter, { posts: [], contacts: [] });
  await db.read();
  db.data ||= { posts: [], contacts: [] };
  await db.write();
  dbInstance = db;
  return db;
}

export function generateId(collection) {
  if (!Array.isArray(collection) || collection.length === 0) return 1;
  return Math.max(...collection.map((item) => item.id || 0)) + 1;
}