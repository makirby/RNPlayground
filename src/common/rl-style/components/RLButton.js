/**
 * @flow
 */

import { Button as RNButton } from 'react-native-ui-lib'
import React from 'react'

type ButtonProps = {

}

const Button = (props: ButtonProps): React$Node => {
  return <RNButton {...props} />
}

export default Button
