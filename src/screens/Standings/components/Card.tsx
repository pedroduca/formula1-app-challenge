import React from 'react'

import { View, StyleSheet, Image } from 'react-native'
import styled from 'styled-components/native'
import { SvgProps } from 'react-native-svg'

interface ICardProps {
  number: number
  title: string
  subtitle: string
  description: string
  imageCaption: string
  image: JSX.Element
}

const Card = ({
  number,
  title,
  subtitle,
  description,
  imageCaption,
  image,
}: ICardProps) => {
  return (
    <CardContainer>
      <View style={styles.cardLeftSide}>
        <H1>{number}</H1>

        <View style={styles.gapName}>
          <View>
            <H2>{title}</H2>
            <H1>{subtitle}</H1>
          </View>

          <Subtitle>{description}</Subtitle>
        </View>
      </View>

      <View style={styles.cardRightSide}>
        {image}
        <View style={styles.imageSubtitleContainer}>
          <ImageCaption>{imageCaption}</ImageCaption>
        </View>
      </View>
    </CardContainer>
  )
}

const CardContainer = styled.View`
  flex: 1;
  background-color: #1b1a19;
  border-radius: 20px;
  flex-direction: row;

  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
  padding-right: 8px;
`

const H1 = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: Poppins_700Bold;
  line-height: 25px;
`

const H2 = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: Poppins_700Bold;
  line-height: 21px;
`

const Subtitle = styled.Text`
  color: #cccdd7;
  font-size: 11px;
  font-family: Poppins_400Regular;
  line-height: 13px;
`

const ImageCaption = styled(H1)`
  text-align: center;
`

const styles = StyleSheet.create({
  cardLeftSide: {
    flex: 1,
    gap: 16,
    alignContent: 'center',
  },

  cardRightSide: {
    alignItems: 'center',
  },
  gapName: {
    gap: 8,
  },
  imageSubtitleContainer: {
    marginTop: -14,
  },
})

export default Card
