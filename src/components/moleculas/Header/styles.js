import styled from 'styled-components';
import { LinearTextGradient } from "react-native-text-gradient";
import * as S from '../../../styles';

export const ContainerHeader = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background-color: ${S.colors.alabaster};
`;

export const ContainerLogoText = styled.View`
    flex-direction: row;
`

export const ContainerItems = styled.View`
    margin: 8px 16px;
`;

export const ContainerChatItem = styled.Image`
    width: 32px;
    height: 32px;
`;

export const TextGradient = styled(LinearTextGradient)`
    locations: [0, 1];
    colors: ['#4a54df', '#15d4d8'];
    start: { x: 0, y: 0 };
`;