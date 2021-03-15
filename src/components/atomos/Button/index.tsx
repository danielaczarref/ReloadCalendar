import React from 'react';
import { ButtonProps } from './types';
import * as SC from './styles';
import * as S from '../../../styles';

const Button: React.FC<ButtonProps> = ({ label, onPress, accessibilityLabel }: ButtonProps) => {

    return (
        <SC.ContainerButton accessibilityLabel={accessibilityLabel}>
            <SC.TouchButton onPress={onPress}>
            <SC.ContainerLG>
        <S.FontLg color={S.colors.white}>{label}</S.FontLg>
        </SC.ContainerLG>
            </SC.TouchButton>
        </SC.ContainerButton>
    )
}

export default Button;