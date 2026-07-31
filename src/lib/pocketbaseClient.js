import PocketBase from 'pocketbase';

// Public, browser-safe PocketBase client for frontend use only.
// Do NOT add auth, credentials, or dotenv here — this file is bundled
// into the public JS shipped to every visitor's browser.
// For admin/server-side operations, use pocketbaseClient.server.js instead.

const POCKETBASE_URL = import.meta.env.VITE_POCKETBASE_URL || 'http://localhost:8090';

const pb = new PocketBase(POCKETBASE_URL);

export default pb;
export { pb as pocketbaseClient };
