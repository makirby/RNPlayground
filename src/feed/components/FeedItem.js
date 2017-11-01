/**
 * # FeedItem.js
 * @flow
 */

import { Button, StyleSheet } from 'react-native'
import { Heading1, Paragraph } from '../../common/rl-style'
import { View } from 'react-native-ui-lib'

import React from 'react'

type FeedItemProps = {
  title?: string,
  subtitle?: string,
  children?: any,
  actions?: Array<Function>
};

class FeedItem extends React.Component<FeedItemProps> {
  renderTitle = () => (
    <View style={styles.itemHeader}>
      {this.props.title && <Heading1>{this.props.title}</Heading1>}
      {this.props.subtitle && <Paragraph>{this.props.subtitle}</Paragraph>}
    </View>
  );

  renderContent = () => (
    <View style={styles.itemContent}>
      {this.props.children}
    </View>
  );

  renderBottomRow = () => (
    <View style={styles.itemBottomRow}>
      {this.props.actions && this.props.actions.map((action: Function, idx: number) => <Button key={`btn:${idx}`}onPress={action} />)}
    </View>
  );

  render() {
    return (
      <View lightBackground style={styles.itemContainer} >
        {this.renderTitle()}
        {this.renderContent()}
        {this.props.actions && this.renderBottomRow()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    minHeight: 50,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  itemContent: {
    flexGrow: 8,
  },
  itemBottomRow: {
    flexDirection: 'row',
    flexGrow: 1,
  },
})

export default FeedItem
