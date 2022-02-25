// import React from 'react';
// import {
//   TouchableWithoutFeedback,
//   Keyboard,
//   StyleProp,
//   ViewStyle,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';

// const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
//   children,
//   ...props
// }) => (
//   <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//     <KeyboardAvoidingView
//       {...props}
//       behavior={Platform.OS === 'android' ? 'position' : 'padding'}
//       style={props.style}>
//       {children}
//     </KeyboardAvoidingView>
//   </TouchableWithoutFeedback>
// );

// export default DismissKeyboardView;

import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
  TextStyle,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  children,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

// const DismissKeyboardView = ({children, ...props}) => (
//   <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
//     <KeyboardAwareScrollView {...props} style={props.style}>
//       {children}
//     </KeyboardAwareScrollView>
//   </TouchableWithoutFeedback>
// );

export default DismissKeyboardView;
