import styled from 'styled-components';

export const colors = {
    davys_grey: '#595959',
    alabaster: '#DCE0D9',
    cultured: '#F5F3F5',
    xiketic: '#1B1725',
}

export const fonts = {
    small: 12,
    medium: 14,
    large: 16,
    fontRegular: 'Roboto-Regular',
    fontBold: 'Roboto-Bold'
};

export const FontMd = styled.Text.attrs((props) => ({
    maxFontSizeMultiplier: props.maxFontSizeMultiplier || 2,
}))`
    color: ${(props) => props.color || colors.xiketic};
    font-family: ${fonts.fontRegular};
    line-height: 21px;
    font-size: 14px;
    text-align: ${(props) => props.textAlign || 'left'};
`;