/**
 * # NewsScreen.js
 * @flow
 */

import { NavigationOptionsComposer } from '../../lib/navigation'
import News from '../components/News'
import React from 'react'

class NewsScreen extends React.PureComponent {
  static get navigationOptions() {
    return NavigationOptionsComposer.default()('Live')
  }
  render() {
    return (
      <News />
    )
  }
}

export default NewsScreen
