import React, { useState } from 'react'

import styled from 'styled-components/native'

interface ITabProps {
  textTabLeft: string
  textTabRight: string
}

type TabActive = 'left' | 'right'

const Tab = ({ textTabLeft, textTabRight }: ITabProps) => {
  const [tabActive, setTabActive] = useState<TabActive>('left')

  return (
    <>
      <Container>
        <TabContainerLeft
          tabActive={tabActive}
          onPress={() => setTabActive('left')}>
          <TextLeft
            tabActive={tabActive}
            numberOfLines={1}
            maxFontSizeMultiplier={1.1}>
            {textTabLeft}
          </TextLeft>
        </TabContainerLeft>

        <TabContaineRight
          tabActive={tabActive}
          onPress={() => setTabActive('right')}>
          <TextRight
            tabActive={tabActive}
            numberOfLines={1}
            maxFontSizeMultiplier={1.1}>
            {textTabRight}
          </TextRight>
        </TabContaineRight>
      </Container>
    </>
  )
}

const Container = styled.View`
  flex-direction: row;
`

const TabContainerLeft = styled.TouchableOpacity<{
  tabActive: TabActive
}>`
  flex: 1;

  padding-vertical: 12px;
  padding-right: 6px;
  align-items: center;

  border-color: ${({ theme }) => theme.color.red};

  border-radius: 15px;
  border-left-width: 0px;
  border-bottom-width: 0px;

  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;

  ${({ tabActive }) =>
    tabActive === 'left' &&
    `
      border-top-width: 2px;
      border-right-width: 2px;
    `}
`

const TabContaineRight = styled.TouchableOpacity<{
  tabActive: TabActive
}>`
  flex: 1;

  padding-vertical: 12px;
  padding-right: 6px;
  align-items: center;

  border-color: ${({ theme }) => theme.color.red};

  border-radius: 15px;
  border-left-width: 0px;
  border-bottom-width: 0px;

  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;

  ${({ tabActive }) =>
    tabActive === 'right' &&
    `
      border-top-width: 2px;
      border-right-width: 2px;
    `}
`

const TextLeft = styled.Text<{
  tabActive: TabActive
}>`
  font-family: 'Poppins_700Bold';
  font-size: 15px;
  line-height: 20px;

  ${({ tabActive }) =>
    tabActive === 'left'
      ? `
      color: #FFF
    `
      : `
      color: #797979
    `}
`

const TextRight = styled.Text<{
  tabActive: TabActive
}>`
  font-family: 'Poppins_700Bold';
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.white};

  ${({ tabActive }) =>
    tabActive === 'right'
      ? `
      color: #FFF
    `
      : `
      color: #797979
    `}
`

export default Tab
