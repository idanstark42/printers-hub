import React from 'react'
import { Video } from 'react-video-stream'

import config from '../config'

export default function Camera (props) {
  const { printer } = props

  console.log(`${config.root}/webcam/?action=stream`)

  return <Video className='video'
    controls={false}
    autoPlay={true}
    remoteUrl={`${config.root}/webcam/?action=stream`}
  />
}