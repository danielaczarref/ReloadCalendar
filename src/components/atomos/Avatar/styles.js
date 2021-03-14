import styled from 'styled-components';
import FastImage from 'react-native-fast-image';
import { Pressable } from 'react-native';
import * as S from '~/styles';

export const ContainerAvatar = styled(Pressable)`
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    margin-right: 8px;
    background-color: ${S.colors.cultured};
    border-radius: 100px;
    position: relative;
`;

export const AvatarImageContainer = styled(FastImage)`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    margin-right: 8px;
    position: absolute;
`;

export const AvatarNameContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: 48px;
    widht: 48px;
    border: 1px;
    border-color: ${S.colors.davys_grey};
    background-color: ${S.colors.alabaster};
    margin-right: 8px;
    border-radius: 100px;
    position: absolute;
`;