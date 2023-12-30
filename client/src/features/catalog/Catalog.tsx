
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelctor } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";





export default function Catalog(){

    
    const products = useAppSelctor(productSelectors.selectAll);
    const {productsLoaded,status}= useAppSelctor (state => state.catalog);
    const dispatch = useAppDispatch();
    

    useEffect(()=>{
     if(!productsLoaded) dispatch(fetchProductsAsync());
      },[productsLoaded,dispatch])
      if(status.includes('pending')) return <LoadingComponent message="Loading Products..."/>
      
      
    return (
        <>
        <ProductList products={products}/>
       
        </>
      )
}