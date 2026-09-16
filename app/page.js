import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <main className="container">
      <div className="card">
        <h1>quer saber de um segredo?</h1>
        <Link href="/secreto" className="button">
          Descobrir
        </Link>
      </div>
    </main>
  );
}
