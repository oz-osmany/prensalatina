import { View, Text } from 'react-native'
import React from 'react'
import YouTubePlayer from 'react-native-youtube-iframe';

const Videos = () => {
  return (
    <YouTubePlayer
        videoId="mLI_QxszYrU" // The YouTube video ID
        play={false} // control playback of video with true/false
        height={200} //
        
        />
  )
}

export default Videos