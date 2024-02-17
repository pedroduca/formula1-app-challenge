import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps): JSX.Element => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#11100F' }} />

      <ScrollView style={{ backgroundColor: '#11100F' }}>{children}</ScrollView>
    </>
  )
}

export default Container
