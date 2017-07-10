/**
 * # RLText.js
 * @providesModule RLText
 * @flow
 */

import {Text as NativeText, StyleSheet} from 'react-native'

import Colours from '../lib/RLColours'
import React from 'react'
import env from '../../../env'
import {normalise} from '../lib/StyleHelpers'

export function Text({style, ...props}: Object) {
  return <NativeText style={[styles.font, style]} {...props} />
}

export function PageHeading({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.page, style]} {...props} />
}

export function Heading1({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.h1, style]} {...props} />
}

export function Heading2({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.h2, style]} {...props} />
}

export function Paragraph({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.p, style]} {...props} />
}

export function ErrorText({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.error, style]} {...props} />
}

export function Small({style, ...props}: Object) {
  return <NativeText style={[styles.font, styles.small, style]} {...props} />
}

const styles = StyleSheet.create({
  font: {
    fontFamily: env.fontFamily
  },
  page: {
    fontSize: normalise(28),
    lineHeight: normalise(34),
    color: Colours.darkText,
    fontWeight: 'bold',
    letterSpacing: -1
  },
  h1: {
    fontSize: normalise(24),
    lineHeight: normalise(27),
    color: Colours.darkText,
    fontWeight: 'bold',
    letterSpacing: -1
  },
  h2: {
    fontSize: normalise(20),
    lineHeight: normalise(27),
    color: Colours.darkText,
    fontWeight: 'bold',
    letterSpacing: -1.4
  },
  p: {
    fontSize: normalise(15),
    lineHeight: normalise(23),
    color: Colours.lightText
  },
  error: {
    fontSize: normalise(14),
    lineHeight: normalise(23),
    color: 'red'
  },
  small: {
    fontSize: normalise(12),
    lineHeight: normalise(20)
  }
})