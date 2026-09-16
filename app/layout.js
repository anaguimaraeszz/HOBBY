import './globals.css';

export const metadata = {
  title: 'Segredo',
  description: 'Página com segredo especial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
