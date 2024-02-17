import styled from 'styled-components/native'

import Container from '../../components/Container'
import Tab from '../../components/Tab'

const Racing = () => {
  return (
    <>
      <Container>
        <Header>
          <Title maxFontSizeMultiplier={1.1}>Racing</Title>

          <Tab textTabLeft='Upcoming' textTabRight='Past' />
        </Header>
      </Container>
    </>
  )
}

const Header = styled.View`
  gap: 32px;
  margin-top: 24px;
  margin-left: 27px;
`

const Title = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 34px;
  color: ${({ theme }) => theme.color.white};
`

export default Racing
