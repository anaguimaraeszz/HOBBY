import Link from 'next/link';

const cats = [
  'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=500&q=85',
  'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=500&q=85',
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=500&q=85',
];

export default function HomePage() {
  return (
    <main className="container home-container">
      <div className="card home-card">
        <div className="heart-ring" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index}>♥</span>
          ))}
        </div>
        <div className="cats" aria-label="Gatinhos fofinhos">
          {cats.map((cat, index) => (
            <img key={cat} src={cat} alt={`Gatinho gordinho ${index + 1}`} />
          ))}
        </div>
        <h1>Quer saber de um segredo?</h1>
        <Link href="/secreto" className="button">
          Descobrir
        </Link>
      </div>
    </main>
  );
}
