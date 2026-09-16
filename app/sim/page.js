import Link from 'next/link';

export default function YesPage() {
  return (
    <main className="container">
      <div className="card message-card">
        <h1>Te amo quer casar?</h1>
        <Link href="/" className="button">
          Voltar
        </Link>
      </div>
    </main>
  );
}
