/**
 * @flow
 */

import { RefreshControl as RNRefreshControl, StyleSheet } from 'react-native'

import React from 'react'

type RefreshControlProps = {
  refreshAction: (props: any) => Promise<*>,
};

type RefreshControlState = {
  refreshing: boolean,
}

class RefreshControl extends React.Component<RefreshControlProps, RefreshControlState> {
  constructor(props: RefreshControlProps) {
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
      <RNRefreshControl
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

export default RefreshControl
