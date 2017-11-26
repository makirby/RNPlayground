/**
 * Set some defaults on text inputs for android
 * @flow
 */

import { TextInput as RNTextInput } from 'react-native-ui-lib'
import React from 'react'

type TextInputProps = {

}

const TextInput = (props: TextInputProps): React$Node => {
  return <RNTextInput floatingPlaceholder text60 {...props} />
}

export default TextInput
