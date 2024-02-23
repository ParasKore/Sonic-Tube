import React from 'react'
import { Stack,Box } from '@mui/material'
import VideoCard from './VideoCard'
import Channelcard from './Channelcard'
const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction="row" flexWrap='wrap' justifyContent='start'    >
    {videos.map((item,idx)=>(
      <Box key={idx}>
      {item.id.videoId && <VideoCard video={item} /> }
      {/* {item.id.channelId && <Channelcard channelDetail={item} /> } */}
      </Box>
    ))}
    </Stack>
  )
}

export default Videos