/**
 * # StylingHelpers.js
 * Styling helper functions
 * @flow
 */

import {Dimensions} from 'react-native'

const scale = Dimensions.get('window').width / 375

export const Normalise = (size: number) => {
  return Math.round(scale * size)
}
