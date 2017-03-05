/**
 * # RLText.js
 *
 * @providesModule RLText
 * @flow
 */
'use strict'

import React from 'react'
import {StyleSheet,Text as NativeText} from 'react-native'
import env from '../env'
import {Normalise} from '../lib/StyleHelpers'
import Colours from './RLColours'

export function Text ({style, ...props}: Object) {
  return <NativeText style={[styles.font, style]} {...props} />
}

export function Heading1 ({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.h1, style]} {...props} />
}

export function Heading2 ({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.h2, style]} {...props} />
}

export function Paragraph ({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.p, style]} {...props} />
}

export function ErrorText ({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.error, style]} {...props} />
}

export function Small ({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.small, style]} {...props} />
}

const styles = StyleSheet.create({
  font: {
    fontFamily: env.fontFamily
  },
  h1: {
    fontSize: Normalise(24),
    lineHeight: Normalise(27),
    color: Colours.darkText,
    fontWeight: 'bold',
    letterSpacing: -1
  },
  h2: {
    fontSize: Normalise(20),
    lineHeight: Normalise(27),
    color: Colours.darkText,
    fontWeight: 'bold',
    letterSpacing: -1.4
  },
  p: {
    fontSize: Normalise(15),
    lineHeight: Normalise(23),
    color: Colours.lightText
  },
  error: {
    fontSize: Normalise(14),
    lineHeight: Normalise(23),
    color: 'red'
  },
  small: {
    fontSize: Normalise(12),
    lineHeight: Normalise(20)
  }
})
