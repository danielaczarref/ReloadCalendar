import React from 'react';
import Header from '../../components/moleculas/Header';

import * as SC from './styles'

export default function HomePage() {

  const sourceImg = require('./assets/user.jpg'); 
  return (
    <SC.Container>
      <Header name="Daniela Carvalho" source={sourceImg} />
    </SC.Container>
  )
}