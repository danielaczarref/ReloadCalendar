import styled from 'styled-components';
import * as S from '../../styles';

export const Container = styled.View`
  flex: 1;
  backgroundColor: #F5F5F5;
`;

export const Logo = styled.Image`
  height: 30%;
  marginBottom: 40px;
`;

export const Input = styled.TextInput`
  paddingHorizontal: 20px;
  paddingVertical: 15px;
  borderRadius: 5px;
  backgroundColor: #FFF;
  alignSelf: stretch;
  marginBottom: 15px;
  marginHorizontal: 20px;
  fontSize: 16px;
`;

export const ContainerLifeStyle = styled.Image`
  width: ${S.dimensions.fullWidth};
`;

export const FooterHome = styled.View`
  background-color: ${S.colors.alabaster};
  flex: 1;
`;

export const RowOptions = styled.View`
  flex-direction: row;
  margin: 8px 48px;
  justify-content: space-between;
`;