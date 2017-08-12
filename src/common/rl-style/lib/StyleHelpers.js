/**
 * # StylingHelpers.js
 * Styling helper functions
 * @flow
 */

import { Dimensions } from 'react-native'

const scale = Dimensions.get('window').width / 375

export const normalise = (size: number) => Math.round(scale * size)
