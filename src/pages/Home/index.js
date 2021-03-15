import React from 'react';
import { Text } from 'react-native';
import Avatar from '../../components/atomos/Avatar';

import * as SC from './styles'

export default function HomePage() {
  return (
    <SC.Container>
      <Avatar name="Daniela Carvalho" />
      <Text>Teste</Text>
    </SC.Container>
  )
}