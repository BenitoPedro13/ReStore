import { List } from "@mui/material";
import { ProductListComponent } from "../../app/models/productListComponent";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: ProductListComponent) => {
  return (
    <List>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </List>
  );
}

export default ProductList;