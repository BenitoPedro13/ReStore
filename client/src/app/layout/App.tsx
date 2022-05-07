import { useEffect, useState } from 'react';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';

import { Product } from '../models/product';
import { Container, CssBaseline } from '@mui/material';

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
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} setProducts={setProducts} />
      </Container>
    </>
  );
}

export default App;
