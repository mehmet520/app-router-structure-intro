import Link from "next/link";

export default async function ProductsPage() {
  const products2 = [
    { obst: "Orange", name: "Ürün A" },
    { obst: "Kiwi", name: "Ürün B" },
  ];
  const res = await fetch('https://fakestoreapi.com/products');    const products = await res.json();

  return (
    <>
      <h1>Urunler</h1>
      <ol>
        {products2.map(({ obst, name }) => (
          <li key={obst}>
            <Link href={`/products/${obst}`}>{name}</Link>
          </li>
        ))}
      </ol>

      <ul>
        {products.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}
  