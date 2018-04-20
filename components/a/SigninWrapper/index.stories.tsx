import { faEnvelope, faUnlock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { storiesOf } from '@storybook/react'
import { internet, random } from 'faker'
import React from 'react'
import {
  Inner as SigninWrapperInner,
  Input as SigninWrapperInput,
  Wrapper as SigninWrapper
} from '.'
import { Button } from '../Button'
import { Input } from '../Input'

storiesOf('Signin', module).add('default', () => (
  <SigninWrapper>
    <SigninWrapperInner>
      <form action='#' method='post'>
        <SigninWrapperInput>
          <Input type='email' placeholder={internet.email()} />
          <FontAwesomeIcon icon={faEnvelope} />
        </SigninWrapperInput>
        <SigninWrapperInput>
          <Input type='password' placeholder={random.word()} />
          <FontAwesomeIcon icon={faUnlock} />
        </SigninWrapperInput>
        <Button disabled>Sign in</Button>
      </form>
    </SigninWrapperInner>
  </SigninWrapper>
))
