/**
 * @flow
 */

import { Platform, RefreshControl, StyleSheet } from 'react-native'

import React from 'react'

type PropsType = {
  refreshAction: (props: any) => Promise<*>
};

class AmigoRefreshControl extends React.Component {
  props: PropsType;
  state: {
    refreshing: boolean
  }

  constructor(props: PropsType) {
    super(props)

    this.state = {
      refreshing: false,
    }
  }

  _onRefresh = () => {
    this.setState({ refreshing: true })
    this.props.refreshAction().then(() => {
      this.setState({ refreshing: false })
    })
  }

  render() {
    return (
      <RefreshControl
        // title={'Pull to refresh'}
        style={styles.controlBackground}
        refreshing={this.state.refreshing}
        onRefresh={this._onRefresh}
        {...this.props}
      />
    )
  }
}

const styles = StyleSheet.create({
  controlBackground: {
    backgroundColor: 'transparent',
  },
})

export default AmigoRefreshControl
