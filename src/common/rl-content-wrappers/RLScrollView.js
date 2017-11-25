/**
 * @flow
 */

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PageHeading, Paragraph } from '../rl-style'
import { StyleSheet } from 'react-native'
import React from 'react'

type RLScrollViewProps = {
  style?: any,
  title?: string,
  subtitle?: string,
  children?: any
};

class RLScrollView extends React.Component<RLScrollViewProps> {
  render() {
    const title = !!this.props.title && <PageHeading>{this.props.title}</PageHeading>
    const subtitle = !!this.props.subtitle && <Paragraph>{this.props.subtitle}</Paragraph>
    return (
      <KeyboardAwareScrollView style={[styles.container, this.props.style]}>
        {title}
        {subtitle}
        {this.props.children}
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
})

export default RLScrollView
