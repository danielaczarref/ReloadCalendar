import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import * as S from '../../styles';

export const Container = styled.View`
  flex: 1;
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

export const ContentModal = styled.View`
  background-color: ${S.colors.white};
  height: 50%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalHeader = styled(TouchableOpacity)`
  margin: 8px 16px;
`;