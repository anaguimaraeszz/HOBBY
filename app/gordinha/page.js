import Link from 'next/link';

export default function LovePage() {
  return (
    <main className="container">
      <div className="card message-card">
        <h1>Gordinha da minha vida &lt;3</h1>
        <p className="love-message">
          Vou sempre te apoiar em tudo, meu amor. Obrigada por sempre me apoiar
          e acolher. Quero sempre me interessar por tudo que você se interessa
          e conseguir ser seu porto seguro.
        </p>
        <Link href="/" className="button">Voltar</Link>
      </div>
    </main>
  );
}
