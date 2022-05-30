import React,{ useState}from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
 import Product from './Product'
 import taskdata from "..db.json"
 
const Products = () => {
 
  const [task,setTask] =useState(taskdata)
 
console.log(taskdata)
  // TODO: Remove below const and instead import them from chakra
  const Flex = () => <div />;
  const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct />
      <Grid>{/* List of Products */}
       <Product />
      </Grid>
      {/* Pagination */}
      <Pagination />
    </Flex>
  );
};

export default Products;
