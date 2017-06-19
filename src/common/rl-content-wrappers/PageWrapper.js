/**
 * # RLPageWrapper.js
 * @flow
 */

import {Heading1, Paragraph} from "../rl-style"
import {StyleSheet, View} from "react-native"

import React from "react"

type PropsType = {
  style?: any,
  title?: string,
  text?: string,
  children?: any
};

const RLPageWrapper = (props: PropsType): React.Element<*> => {
  const title
    = props.title && <Heading1 style={styles.title}>{props.title}</Heading1>
  return (
    <View style={[styles.container, props.style]}>
      {title}
      <Paragraph style={styles.text}>
        {props.text}
      </Paragraph>
      {props.children}
    </View>
  )
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
    paddingTop: 75,
    alignItems: "center"
  },
  title: {
    textAlign: "center",
    marginBottom: 10
  },
  text: {
    textAlign: "center",
    marginBottom: 35
  }
})

export default RLPageWrapper
