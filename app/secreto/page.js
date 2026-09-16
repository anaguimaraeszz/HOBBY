import Link from 'next/link';

export default function SecretPage() {
  return (
    <main className="container">
      <div className="card">
        <h2>Você quer saber?</h2>
        <div className="options">
          <Link href="/sim" className="button button-success">
            Sim
          </Link>
          <Link href="/nao" className="button button-danger">
            Não
          </Link>
        </div>
      </div>
    </main>
  );
}
