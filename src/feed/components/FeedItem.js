/**
 * # FeedItem.js
 * @flow
 */

import {Button, StyleSheet, View} from "react-native"
import {Heading1, Paragraph} from "../../common/rl-style/index"

import {RLColours} from "../../common/rl-style"
import React from "react"

type FeedItemPropType = {
  title?: string,
  subtitle?: string,
  children?: any,
  actions?: Array<Function>
};

class FeedItem extends React.PureComponent {
  props: FeedItemPropType;
  renderTitle = () => {
    return (
      <View style={styles.itemHeader}>
        {this.props.title && <Heading1>{this.props.title}</Heading1>}
        {this.props.subtitle && <Paragraph>{this.props.subtitle}</Paragraph>}
      </View>
    )
  };

  renderContent = () => {
    return (
      <View style={styles.itemContent}>
        {this.props.children}
      </View>
    )
  };

  renderBottomRow = () => {
    return (
      <View style={styles.itemBottomRow}>
        {this.props.actions && this.props.actions.map((action: Function, idx: number) => {
          return <Button key={`btn:${idx}`}onPress={action} />
        })}
      </View>
    )
  };

  render() {
    return (
      <View style={styles.itemContainer}>
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
    backgroundColor: RLColours.darkBackground
  },
  itemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1
  },
  itemContent: {
    flexGrow: 8
  },
  itemBottomRow: {
    flexDirection: "row",
    flexGrow: 1
  }
})

export default FeedItem
