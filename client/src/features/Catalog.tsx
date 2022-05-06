import { useState, useEffect } from "react";
import { Product } from "../app/models/product";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:7064/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

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
      <ul id="productList">
        {products.map((product) => {
          return (
            <li key={product.id} style={{ marginBottom: '1rem' }}>
              Name: {product.name} <br />
              Price: {product.price} <br />
              Description: {product.description} <br />
              Picture: <img src="https://picsum.photos/200" alt={product.name} /> <br />
              Type: {product.type} <br />
              Quantity in Stock: {product.quantityInStock} <br />
              {product.brand ? "Brand: " + product.brand : ""}
            </li>
          );
        })}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </>
  );
};

export default Catalog;
