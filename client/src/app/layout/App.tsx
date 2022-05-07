import { useEffect, useState } from 'react';
import Catalog from '../../features/Catalog';
import { Product } from '../models/product';

import { Typography } from '@mui/material';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7064/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Typography variant="h3" component="h3">Re-store</Typography>
      <Catalog products={products} setProducts={setProducts} />
    </>
  );
}

export default App;
