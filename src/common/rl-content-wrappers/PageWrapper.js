/**
 * # PageWrapper.js
 * @flow
 */

import { ConnectionStatusBar, View } from 'react-native-ui-lib'
import { Heading1, Paragraph } from '../rl-style'
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
      {/* <ConnectionStatusBar /> */}
      {heading}
      {subtitle}
      {children}
    </ScrollView>)
  }

  return (
    <View flex {...other}>
      {/* <ConnectionStatusBar /> */}
      {heading}
      {subtitle}
      {children}
    </View>
  )
}

export default RLPageWrapper
