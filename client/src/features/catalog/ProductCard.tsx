import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { ProductCardComponent } from "../../app/models/productCardComponent";

const ProductCard = ({ product }: ProductCardComponent) => {
  return (
    <ListItem key={product.id}>
      <ListItemAvatar>
        <Avatar src={product.pictureUrl} alt={product.name} />
      </ListItemAvatar>
      <ListItemText primary={product.name} secondary={product.description} />
    </ListItem>
  );
}

export default ProductCard;