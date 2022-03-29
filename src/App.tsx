import React, { useState } from 'react';
import { useQuery } from 'react-query';

// components
import { Drawer, LinearProgress } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import Item from './Item/Item';
// Styles
import { Wrapper } from './App.styles';

// types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProduct = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProduct
  );

  const getTotalItmes = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something wrong</div>;

  return (
    <Wrapper>
      <Grid container spacing={3}>
        <p> Hello</p>
        {data?.map((item: CartItemType, index: number) => (
          <Grid item key={index} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
