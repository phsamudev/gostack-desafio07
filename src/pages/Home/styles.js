import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #333;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  background: #fff;
`;

export const Title = styled.Text`
  font-weight: bold;
`;
