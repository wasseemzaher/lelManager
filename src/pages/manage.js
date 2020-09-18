import React from "react";
import Product from "../components/product";
import ProductForm from "../components/productForm";
import ListProducts from "../components/listProducts";
import {Paper, makeStyles} from '@material-ui/core';
// import classes from "*.module.css";


const useStyles = makeStyles(theme => ({
  pageContent:{
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  }
}))

export default function Manage() {
  const classes = useStyles();
  
  return (
    <div>
      <Paper className={classes.pageContent}>
        <ProductForm />
      </Paper>
      <Product mode="create" />
      <h3>Defined Products:</h3>
      {/* <Product mode="edit"/> */}
      <ListProducts />
    </div>
  );
}
