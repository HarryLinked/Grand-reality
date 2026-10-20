import { Btn } from '../components/Shared.jsx';

export default function NotFound() {
  return (
    <section className="section">
      <div className="container center-copy">
        <h1 className="h-xl">Page not found</h1>
        <p>The page you are looking for doesn’t exist or has moved.</p>
        <Btn to="/">Back to Home</Btn>
      </div>
    </section>
  );
}
