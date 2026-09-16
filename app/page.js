import Link from 'next/link';

const cats = [
  'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=300&q=85',
  'https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?auto=format&fit=crop&w=300&q=85',
];

export default function HomePage() {
  return (
    <main className="home-container">
      <div className="cats-around" aria-label="Gatinhos fofinhos">
        {cats.map((cat, index) => (
          <img key={cat} className={`cat cat-${index + 1}`} src={cat} alt={`Gatinho gordinho ${index + 1}`} />
        ))}
      </div>
      <div className="heart-frame">
        <div className="heart-ring" aria-hidden="true">
          {Array.from({ length: 24 }, (_, index) => <span key={index}>♥</span>)}
        </div>
        <div className="card home-card">
          <h1>Quer saber de um segredo?</h1>
          <Link href="/secreto" className="button">Descobrir</Link>
        </div>
      </div>
    </main>
  );
}
