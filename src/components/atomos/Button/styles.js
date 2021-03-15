import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const ContainerButton = styled.View`
    margin: 8px 32px;
`;

export const TouchButton = styled(TouchableOpacity)`
    height: 40px;
    border-radius: 32px;
    elevation: 24;
    shadow-color: 'rgba(0, 0, 0, 0.1)';
    shadow-opacity: 0.8;
    shadow-radius: 32px;
    shadow-offset: {
        width: 1px;
        height: 13px;
    }
`;

export const ContainerLG = styled(LinearGradient).attrs(() => ({
    colors: ['#4a54df', '#15d4d8'],
    angle: 43,
    locations: [0.04, 0.69],
    start: {
        x: 0.0,
        y: 0.5,
    },
    end: {
        x: 0.8,
        y: 0.9,
    }
}))`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 32px;    
`;