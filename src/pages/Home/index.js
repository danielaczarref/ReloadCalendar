import React, { useState } from 'react';
import Header from '../../components/moleculas/Header';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native';
import Button from '../../components/atomos/Button';
import moment from 'moment';

import * as SC from './styles';
import * as S from '../../styles';

moment.locale('pt-br');

export default function HomePage() {
  const [stateOption, setStateOption] = useState(1);
  const [showModal,setShowModal] = useState(false);

  const sourceImg = require('./assets/user.jpg'); 
  const weekDay = moment().format('dddd');
  const month = moment().format("MMM");
  const day = moment().format("DD");
  const calendar = moment().daysInMonth();

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
          <TouchableOpacity onPress={() => setStateOption(0)}>
            <S.FontLg 
              color={stateOption === 0 ? S.colors.xiketic : S.colors.taupe_gray}
            >Timestamp feed</S.FontLg>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setStateOption(1);
            setShowModal(true);
          }}>
            <S.FontLg
              color={stateOption === 1 ? S.colors.xiketic : S.colors.taupe_gray}
            >Activity feed</S.FontLg>
          </TouchableOpacity>
        </SC.RowOptions>
        <Modal
          isVisible={showModal}
          avoidKeyboard
          onSwipeComplete={() => setShowModal(false)} 
          onSwipeCancel={() => setShowModal(false)}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          swipeDirection="down"
          animationOutTiming={400}
          animationInTiming={400}
          useNativeDriver
          style={{ justifyContent: 'flex-end', margin: 0 }}
        >
          <SC.ContentModal>
            <SC.ModalHeader onPress={() => setShowModal(false)}>
              <S.FontLg color={S.colors.davys_grey}>X Calendar</S.FontLg>
            </SC.ModalHeader>
            <S.FontLg 
              textAlign="center" 
              color={S.colors.taupe_gray}
            >{weekDay} - {month}, {day}</S.FontLg>
            <S.Separator marginVertical={8} marginHorizontal={16} />
            <Button onPress={() => setShowModal(!showModal)} label="Apply" />
          </SC.ContentModal>
        </Modal>
      </SC.FooterHome>
    </SC.Container>
  )
}