import React from 'react';
import { AvatarProps } from './types';
import * as SC from './styles';
import { Text } from 'react-native';

const Avatar: React.FC<AvatarProps> = ({ name, source, onPress, accessibilityLabel, }: AvatarProps) => {
    let initials = (name && name.match(/\b\w/g)) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

    const labelDefault = source ? 'Foto de perfil' : `Iniciais ${initials}`;

    return (
        <SC.ContainerAvatar
            onPress={onPress}
            accessibilityLabel={accessibilityLabel || labelDefault}
        >
            {!!initials && (
                <SC.AvatarNameContainer>
                <Text>
                    {initials}
                </Text>
                </SC.AvatarNameContainer>
            )}

            <SC.AvatarImageContainer
                accessibilityRole="image"
                source={{ uri: source }}
            />

        </SC.ContainerAvatar>
    )

}

export default Avatar;
