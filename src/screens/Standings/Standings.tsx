import styled from 'styled-components/native'

import Container from '../../components/Container'
import Tab from '../../components/Tab'
import { View } from 'react-native'

const Standings = () => {
  return (
    <>
      <Container>
        <Header>
          <Title maxFontSizeMultiplier={1.1}>Standings</Title>
          <Tab textTabLeft='Drivers' textTabRight='Constructors' />
        </Header>
      </Container>
    </>
  )
}

const Header = styled.View`
  margin-top: 24px;
  margin-left: 27px;
  gap: 32px;
`

const Title = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 34px;
  color: ${({ theme }) => theme.color.white};
`

export default Standings
