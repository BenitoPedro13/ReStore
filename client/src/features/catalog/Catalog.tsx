import { Product } from "../../app/models/product";
import { CatalogComponent } from "../../app/models/catalogComponent"

import { Button } from "@mui/material";
import ProductList from "./ProductList";

const Catalog = ({ products, setProducts }: CatalogComponent) => {

  const addProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      name: "New Product",
      price: Math.random() * 100,
      description: "New Product Description",
      pictureUrl: "https://picsum.photos/200",
      type: "Keyboard",
      quantityInStock: Math.random() * 100,
    };
    setProducts([...products, newProduct]);
  }

  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
  );
};

export default Catalog;
