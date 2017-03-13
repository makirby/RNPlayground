/**
 * # Login.js
 * @flow
 */

import React from 'react';
import PageWrapper from '../../components/RLPageWrapper';

class Login extends React.PureComponent {
  render(): React.Element<*> {
    return (
      <PageWrapper
        title="Login Screen"
        text="This is the Login screen"
      />
    );
  }
}

export default Login;
