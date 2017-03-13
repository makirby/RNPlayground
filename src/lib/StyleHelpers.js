/**
 * # RLStylingHelpers.js
 * Styling helper functions
 * @flow
 */
'use strict'

import {Dimensions} from 'react-native'

const scale = Dimensions.get('window').width / 375

export const Normalise = (size: number) => {
  return Math.round(scale * size)
}
