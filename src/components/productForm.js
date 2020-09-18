import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "./useForm";
import Input from "./controls/Input";
import Button from "./controls/Button";
import Checkbox from "./controls/Checkbox";

const initialValues = {
  name: "",
  price: Number(null),
  salePrice: Number(""),
  stock: Number(""),
  notes: "",
  description: "",
  display: true,
  instructions: "",
  tags: [],
  media: [],
};

export default function ProductForm() {
  const { values, setValues, handleInputChange } = useForm(initialValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Input
            label="Product Name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
          />
          <Input
            label="Price"
            name="price"
            value={values.price}
            onChange={handleInputChange}
          />
          <Input
            label="Sale Price"
            name="salePrice"
            value={values.salePrice}
            onChange={handleInputChange}
          />
          <Input
            label="Stock"
            name="stock"
            value={values.stock}
            onChange={handleInputChange}
          />
          <Input
            label="Notes"
            name="notes"
            value={values.notes}
            onChange={handleInputChange}
          />
          <Input
            label="Description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          />
          <Checkbox
            label="Show Product?"
            name="display"
            value={values.display}
            onChange={handleInputChange}
          />
          <Input
            label="Instructions"
            name="instruction"
            value={values.instructions}
            onChange={handleInputChange}
          />
          <Input
            label="Tags"
            name="tags"
            value={values.tags}
            onChange={handleInputChange}
          />
          <Input
            label="Media"
            name="media"
            value={values.media}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Form>
  );
}
