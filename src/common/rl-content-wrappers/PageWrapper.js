/**
 * # RLPageWrapper.js
 * @flow
 */

import { Heading1, Paragraph } from '../rl-style'
import { View } from 'react-native-ui-lib'
import React from 'react'

type PropsType = {
  title?: string,
  text?: string,
  children?: any,
  uiProps?: any,
};

const RLPageWrapper = ({ title, text, children, ...other }: PropsType): React$Node => {
  const heading = title && <Heading1 marginH-12 marginV-18>{title}</Heading1>
  return (
    <View flex flex-1 {...other}>
      {heading}
      <Paragraph marginH-12>
        {text}
      </Paragraph>
      {children}
    </View>
  )
}

export default RLPageWrapper
