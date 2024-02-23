import React from 'react'
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from '../utils/constants';

const VideoCard = ({video:{id:{videoId},snippet}}) => {
    console.log(videoId,snippet)
  return (
    <Card sx={{overflowY:'auto',bgcolor:'black'}}>
      <Link to={videoId ? `/video/${videoId} `: demoVideoUrl} >
      <CardMedia image={snippet?.thumbnails?.high?.url} 
      alt={snippet?.title}
      sx={{width:358,height:180,marginRight:'10px',marginBottom:'10px' }}
      />
      </Link>
      <CardContent sx={{backgroundColor:'black',height:'106px'}}>
      <Link to={videoId ? `/video/${videoId} `: demoVideoUrl} >
        <Typography variant='subtitle1' fontWeight='bold'  sx={{height:'130px',width:'300px',bgcolor:'black',color:'white',}} >
            {snippet?.title.slice(0,60 )|| demoVideoTitle.slice(0,60) }
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId} `: demoChannelUrl} >
        <Typography variant='subtitle2' fontWeight='bold'  color='gray' marginTop='-18%' >
            {snippet?.channelTitle|| demoChannelTitle}
            <CheckCircle sx={{fontSize:12,color:'gray',ml:5}} />
        </Typography>
      </Link>
         </CardContent>
    </Card>
  )
}

export default VideoCard