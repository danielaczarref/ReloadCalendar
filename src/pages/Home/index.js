import React from 'react';
import Header from '../../components/moleculas/Header';

import * as SC from './styles';
import * as S from '../../styles';

export default function HomePage() {

  const sourceImg = require('./assets/user.jpg'); 
  return (
    <SC.Container>
      <Header name="Daniela Carvalho" source={sourceImg} />
      <SC.ContainerLifeStyle 
        source={require('./assets/ilustrationLifestyle.png')}
        accessibilityRole="image"
        accessibilityLabel="Ilustração de pessoas passeando ao ar livre"
      />
      <SC.FooterHome>
        <SC.RowOptions>
          <S.FontLg color={S.colors.taupe_gray}>Timestamp feed</S.FontLg>
          <S.FontLg>Activity feed</S.FontLg>
        </SC.RowOptions>
      </SC.FooterHome>
    </SC.Container>
  )
}