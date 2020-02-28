import React, { Component } from 'react';

import { Container, ProductList, Product, Title } from './styles';

class Home extends Component() {
  state = {
    products: [],
  };

  render() {
    const { products } = this.state;

    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product>
              <Title>{item.title}</Title>
            </Product>
          )}
        />
      </Container>
    );
  }
}

export default Home;
