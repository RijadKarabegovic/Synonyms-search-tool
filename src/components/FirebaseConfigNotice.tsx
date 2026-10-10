import { FIREBASE_ENV_VARS } from "../config/firebase";

export function FirebaseConfigNotice() {
  return (
    <div className="config-notice" role="status">
      <p className="config-notice-title">Community dictionary unavailable</p>
      <p className="config-notice-text">
        Search still works using the static WordNet file and Datamuse. To enable
        Firestore (search + add your own words), set these environment variables
        in <strong>Vercel → Settings → Environment Variables</strong>, then{" "}
        <strong>redeploy</strong> (Vite embeds them at build time):
      </p>
      <ul className="config-notice-list">
        {FIREBASE_ENV_VARS.map((name) => (
          <li key={name}>
            <code>{name}</code>
          </li>
        ))}
      </ul>
      <p className="config-notice-text text-sm">
        Locally: copy <code>.env.example</code> to <code>.env</code> and fill in
        the same values.
      </p>
    </div>
  );
}
