import React from 'react';
import { HeaderProps } from './types';
import Avatar from '../../atomos/Avatar';
import * as SC from './styles';
import * as S from '../../../styles';
import { LinearTextGradient } from "react-native-text-gradient";

const Header: React.FC<HeaderProps> = ({ name, source, onPressAvatar }: HeaderProps) => {

    return (
        <SC.ContainerHeader>
            <SC.ContainerItems>
            <Avatar 
                name={name}
                accessibilityLabel="Ao clicar, você será redirecionado à tela de perfil"
                source={source}
                onPress={onPressAvatar}
            />
            </SC.ContainerItems>
            <SC.ContainerLogoText>
                <S.FontLg>R</S.FontLg>
                <LinearTextGradient
                    style={{ marginHorizontal: 4}}
                    locations={[0, 1]}
                    colors={['#4a54df', '#15d4d8']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                >
                    <S.FontXL>≡</S.FontXL>
                </LinearTextGradient>
                <S.FontLg>L O A D</S.FontLg>
            </SC.ContainerLogoText>
            <SC.ContainerItems>
                <SC.ContainerChatItem 
                accessibilityLabel="Ao clicar, será exibido o seu histórico de conversas" 
                source={require('./assets/chatIcon.png')} />
            </SC.ContainerItems>
        </SC.ContainerHeader>
    )
}

export default Header;