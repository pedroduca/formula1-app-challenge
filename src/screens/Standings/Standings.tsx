import { useEffect, useState } from 'react'

import styled from 'styled-components/native'

import Container from '../../components/Container'
import Tab from '../../components/Tab'
import Card from './components/Card'

import { IGetDrivers, getDrivers } from '../../services/getDrivers'

const Standings = () => {
  const [drivers, setDrivers] = useState<IGetDrivers[]>([])

  const getDriversData = () => {
    getDrivers().then(drivers => {
      setDrivers(drivers)
    })
  }

  useEffect(() => {
    getDriversData()
  }, [])

  return (
    <>
      <Container>
        <Header>
          <Title maxFontSizeMultiplier={1.1}>Standings</Title>
          <Tab textTabLeft='Drivers' textTabRight='Constructors' />
        </Header>

        <CardList>
          {drivers &&
            drivers.map((driver, index) => (
              <Card
                key={index}
                number={index + 1}
                title={driver.nome}
                subtitle={driver.sobrenome}
                description={driver.equipe}
                image={driver.foto}
                imageCaption={driver.pontuacao.toString()}
              />
            ))}
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
