export default function ProductsLayout({ children }) {
    return (
      <div style={{ border: '2px solid #0070f3', padding: '1rem' }}>
        <h2>🛍 Ürünler Sayfası</h2>
        <section>{children}</section>
      </div>
    );
  }
  