import React from 'react'
import { storiesOf } from '@storybook/react'

import { ThreejsPlane } from '../components/ThreejsPlane'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
	return(<ThreejsPlane />)
})
