import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useForm, Form } from "./useForm";
import Controls from "./controls/Controls";

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
          <Grid item xs={12}>
            <Controls.Input
              label="Product Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
            </Grid>
                    <Grid item xs={12}>
            <Controls.Input
              label="Price"
              name="price"
              value={values.price}
              onChange={handleInputChange}
            />
            </Grid>
                    <Grid item xs={12}>
            <Controls.Input
              label="Sale Price"
              name="salePrice"
              value={values.salePrice}
              onChange={handleInputChange}
              />
              </Grid>
                              <Grid item xs={12}>
            <Controls.Input
              label="Stock"
              name="stock"
              value={values.stock}
              onChange={handleInputChange}
              />
              </Grid>
            <Controls.Checkbox
              label="Show Product?"
              name="display"
              value={values.display}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item xs={12} >
            <Controls.Input
              label="Notes"
              name="notes"
              value={values.notes}
              onChange={handleInputChange}
            />
            <Controls.Input
              label="Description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
            <Controls.Input
              label="Instructions"
              name="instruction"
              value={values.instructions}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Controls.Input
          label="Tags"
          name="tags"
          value={values.tags}
          onChange={handleInputChange}
        />
        <Controls.Input
          label="Media"
          name="media"
          value={values.media}
          onChange={handleInputChange}
        />
        <Controls.Button
          text="Add Product"
          size="large"
          color="primary"
          variant="contained"
          type="submit"
        ></Controls.Button>
        <Controls.Button
          text="Clear"
          size="large"
          color="secondary"
          variant="contained"
        ></Controls.Button>
      {/* </Grid> */}
    </Form>
  );
}
