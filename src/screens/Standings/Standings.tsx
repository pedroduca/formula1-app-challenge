import styled from 'styled-components/native'

import Container from '../../components/Container'
import Tab from '../../components/Tab'
import Card from './components/Card'

import PilotoSVG from '../../assets/images/max-verstappen.svg'

const Standings = () => {
  const pilotInfoMock = {
    position: 1,
    name: 'Max',
    lastName: 'Verstappen',
    team: 'Red Bull Racing',
    points: '255 PTS',
    image: <PilotoSVG />,
  }

  const cardMock = {
    number: pilotInfoMock.position,
    title: pilotInfoMock.name,
    subtitle: pilotInfoMock.lastName,
    description: pilotInfoMock.team,
    imageCaption: pilotInfoMock.points,
    image: pilotInfoMock.image,
  }

  return (
    <>
      <Container>
        <Header>
          <Title maxFontSizeMultiplier={1.1}>Standings</Title>
          <Tab textTabLeft='Drivers' textTabRight='Constructors' />
        </Header>

        <CardList>
          <Card {...cardMock} />
        </CardList>
      </Container>
    </>
  )
}

const CardList = styled.View`
  margin-horizontal: 27px;
  gap: 15px;
`

const Header = styled.View`
  margin-top: 24px;
  margin-left: 27px;
  margin-bottom: 24px;
  gap: 32px;
`

const Title = styled.Text`
  font-family: 'Poppins_700Bold';
  font-size: 34px;
  color: ${({ theme }) => theme.color.white};
`

export default Standings
