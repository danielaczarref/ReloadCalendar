import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const colors = {
    davys_grey: '#595959',
    alabaster: '#DCE0D9',
    cultured: '#F5F3F5',
    xiketic: '#1B1725',
    taupe_gray: '#8C8A93',
    white: '#ffffff',
}

export const fonts = {
    small: 12,
    medium: 14,
    large: 16,
    fontRegular: 'Roboto-Regular',
    fontBold: 'Roboto-Bold'
};

export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
}

export const FontMd = styled.Text.attrs((props) => ({
    maxFontSizeMultiplier: props.maxFontSizeMultiplier || 2,
}))`
    color: ${(props) => props.color || colors.xiketic};
    font-family: ${fonts.fontRegular};
    line-height: 21px;
    font-size: 14px;
    text-align: ${(props) => props.textAlign || 'left'};
`;

export const FontLg = styled.Text.attrs((props) => ({
    maxFontSizeMultiplier: props.maxFontSizeMultiplier || 2,
}))`
    color: ${(props) => props.color || colors.xiketic};
    font-family: ${fonts.fontBold};
    font-size: 16px;
    line-height: 24px;
    text-align: ${(props) => props.textAlign || 'left'};
`;

export const FontXL = styled.Text.attrs((props) => ({
    maxFontSizeMultiplier: props.maxFontSizeMultiplier || 2,
}))`
    color: ${(props) => props.color || colors.xiketic};
    font-family: ${fonts.fontBold};
    font-size: 24px;
    line-height: 29px;
    text-align: ${(props) => props.textAlign || 'left'};
`;

export const Separator = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${colors.taupe_gray};
    margin-vertical: ${(props) => props.marginVertical || 0};
    margin-horizontal: ${(props) => props.marginHorizontal || 0};
`;