import { Product } from "./product"

export interface CatalogComponent {
  products: Product[],
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}