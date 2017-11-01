/**
 * @flow
 */

import { PageHeading, Paragraph } from '../rl-style'
import { ScrollView, StyleSheet } from 'react-native'

import React from 'react'

type RLScrollViewProps = {
  style?: any,
  title?: string,
  subtitle?: string,
  children?: any
};

const RLScrollView = (props: RLScrollViewProps): React$Node => {
  const title = !!props.title && <PageHeading>{props.title}</PageHeading>
  const subtitle = !!props.subtitle && <Paragraph>{props.subtitle}</Paragraph>
  return (
    <ScrollView style={[styles.container, props.style]}>
      {title}
      {subtitle}
      {props.children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})

export default RLScrollView
