/**
 * # RLPageWrapper.js
 * @flow
 */

import { Heading1, Paragraph } from '../rl-style'
import { View } from 'react-native-ui-lib'
import React from 'react'
import ScrollView from './RLScrollView'

type PropsType = {
  title?: string,
  text?: string,
  scrollable?: boolean,
  children?: any,
  uiProps?: any,
};

const RLPageWrapper = ({ title, text, children, scrollable, ...other }: PropsType): React$Node => {
  const heading = !!title && <Heading1 marginH-12 marginV-18>{title}</Heading1>
  const subtitle = !!text && <Paragraph marginH-12>{text}</Paragraph>

  if (scrollable) {
    return (<ScrollView>
      {heading}
      {subtitle}
      {children}
    </ScrollView>)
  }

  return (
    <View flex {...other}>
      {heading}
      {subtitle}
      {children}
    </View>
  )
}

export default RLPageWrapper
