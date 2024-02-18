import React from 'react'
import { Platform, SafeAreaView, ScrollView } from 'react-native'

interface IContainerProps {
  children: React.ReactNode
}

const Container = ({ children }: IContainerProps): JSX.Element => {
  const IS_ANDROID = Platform.OS === 'android'
  return (
    <>
      <SafeAreaView style={{ backgroundColor: '#11100F' }} />

      <ScrollView
        style={{
          backgroundColor: '#11100F',
          paddingTop: IS_ANDROID ? 32 : 24,
        }}>
        {children}
      </ScrollView>
    </>
  )
}

export default Container
