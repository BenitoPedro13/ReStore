import { useEffect, useState } from 'react';
import Catalog from '../../features/Catalog';
import { Product } from '../models/product';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7064/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Re-store</h1>
      <Catalog products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
