import { Grid } from "@mui/material";
import { ProductListComponent } from "../../app/models/productListComponent";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: ProductListComponent) => {
  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;