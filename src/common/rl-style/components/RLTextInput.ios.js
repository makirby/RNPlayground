/**
 * Set some defaults on text inputs for ios
 * @flow
 */

import { TextInput as RNTextInput } from 'react-native-ui-lib'
import React from 'react'

type TextInputProps = {

}

const TextInput = (props: TextInputProps): React$Node => {
  return <RNTextInput floatingPlaceholder text50 {...props} />
}

export default TextInput
