/**
 * # RLText.js
 * Create some default text styles to re-use
 * @flow
 */

import { Text as RNText } from 'react-native-ui-lib'
import React from 'react'

export function Text({ ...props }: Object) {
  return <RNText text70 {...props} />
}

export function PageHeading({ ...props }: Object) {
  return <RNText marginV-21 text10 {...props} />
}

export function Heading1({ ...props }: Object) {
  return <RNText text20 {...props} />
}

export function Heading2({ ...props }: Object) {
  return <RNText text30 {...props} />
}

export function Heading3({ ...props }: Object) {
  return <RNText text40 {...props} />
}

export function Paragraph({ ...props }: Object) {
  return <Text marginB-18 {...props} />
}

export function ErrorText({ ...props }: Object) {
  return <RNText text80 {...props} />
}

export function Small({ ...props }: Object) {
  return <RNText text90 {...props} />
}
