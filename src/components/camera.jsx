import React from 'react'
import { Video } from 'react-video-stream'

import config from '../config'

export default function Camera (props) {
  return <Video className='video'
    controls={false}
    autoPlay={true}
    remoteUrl={`${config.root}/webcam/?action=stream`}
  />
}