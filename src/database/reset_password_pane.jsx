import React from 'react';
import EmailPane from '../field/email/email_pane';
import UsernamePane from '../field/username/username_pane';
import { authWithUsername } from './index';
import * as l from '../lock/index';

export default class ResetPasswordPane extends React.Component {
  static propTypes = {
    emailInputPlaceholder: React.PropTypes.string.isRequired,
    lock: React.PropTypes.object.isRequired,
    usernameInputPlaceholder: React.PropTypes.string.isRequired
  };

  render() {
    const {
      emailInputPlaceholder,
      header,
      lock,
      usernameInputPlaceholder
    } = this.props;

    const pane = authWithUsername(lock)
      ? <UsernamePane
          autofocus={l.ui.autofocus(lock)}
          lock={lock}
          placeholder={usernameInputPlaceholder}
        />
      : <EmailPane lock={lock} placeholder={emailInputPlaceholder} />;

    return <div>{header}{pane}</div>;
  }

}

// ResetPasswordPane.propTypes
