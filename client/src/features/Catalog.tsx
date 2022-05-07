import { Product } from "../app/models/product";
import { CatalogComponent } from "../app/models/catalogComponent"

import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

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
      <List id="productList">
        {products.map((product) => {
          return (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <Avatar src={product.pictureUrl} alt={product.name} />
              </ListItemAvatar>
              <ListItemText primary={product.name} secondary={product.description} />
            </ListItem>
          );
        })}
      </List>
      <Button variant="contained" onClick={addProduct}>Add Product</Button>
    </>
  );
};

export default Catalog;
