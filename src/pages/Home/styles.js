import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #333;
`;

export const ProductList = styled.FlatList.attrs({
  showsHorizontalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  background: #fff;
  height: 420px;
  width: 240px;
  margin: 0px 18px;
  border-radius: 4px;
  padding: 18px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 50px;
  background: #eee;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-align: center;
`;

export const Price = styled.Text`
  font-size: 38px;
  text-align: center;
  font-weight: bold;
  margin-top: auto;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: 12px;
`;

export const IconContainer = styled.View`
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
