import Link from 'next/link';

export default function LovePage() {
  return (
    <main className="container">
      <div className="card message-card">
        <h1>Gordinha da minha vida &lt;3</h1>
        <Link href="/" className="button">Voltar</Link>
      </div>
    </main>
  );
}
