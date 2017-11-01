/**
 * @flow
 */

import { PageHeading, Paragraph } from '../rl-style'
import { ScrollView, StyleSheet } from 'react-native'

import React from 'react'

type PropsType = {
  style?: any,
  title?: string,
  subtitle?: string,
  children?: any
};

const RLScrollView = (props: PropsType) => {
  const title
    = Boolean(props.title)
    && <PageHeading style={styles.title}>{props.title}</PageHeading>
  const subtitle
    = Boolean(props.subtitle)
    && <Paragraph style={styles.subtitle}>
      {props.subtitle}
    </Paragraph>
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
  title: {
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'left',
    marginLeft: 5,
    marginBottom: 10,
  },
})

export default RLScrollView
