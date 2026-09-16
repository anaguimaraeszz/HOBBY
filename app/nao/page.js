import Link from 'next/link';

export default function NoPage() {
  return (
    <main className="container">
      <div className="card message-card">
        <h1>quer saber sim</h1>
        <Link href="/" className="button">
          Voltar
        </Link>
      </div>
    </main>
  );
}
