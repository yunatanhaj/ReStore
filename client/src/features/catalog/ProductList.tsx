import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import { useAppSelctor } from "../../app/store/configureStore";
import ProductCardSkeleton from "./ProductCardSkeleton";

interface Props {

    products: Product[];
}

export default function ProductList({products} : Props){
    const {productsLoaded}=useAppSelctor(state=>state.catalog);
    return (
    <Grid container spacing={3}>
        {products.map(product => (
            <Grid key={product.id} item xs={4}>
                {!productsLoaded?(
                <ProductCardSkeleton/>
            ) : (
                <ProductCard  product={product}/>
            )}
                
            </Grid>
          
        ))}
      </Grid>
      )

}