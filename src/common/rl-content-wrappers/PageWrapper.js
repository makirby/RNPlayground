/**
 * # RLPageWrapper.js
 * @flow
 */

import { Heading1, Paragraph } from '../rl-style'
import { StyleSheet } from 'react-native'
import { View } from 'react-native-ui-lib'
import React from 'react'

type PropsType = {
  style?: any,
  title?: string,
  text?: string,
  children?: any
};

const RLPageWrapper = (props: PropsType) => {
  const title = props.title && <Heading1 style={styles.title}>{props.title}</Heading1>
  return (
    <View flex flex-1 padding-30 paddingT-75>
      {title}
      <Paragraph style={styles.text}>
        {props.text}
      </Paragraph>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    marginBottom: 35,
  },
})

export default RLPageWrapper
