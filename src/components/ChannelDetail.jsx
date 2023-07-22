import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';


function ChannelDetail() {
  const [channelDetails, setChannelDetails] = useState(null)
  const [videos, setvideos] = useState([])
  const { id } = useParams();
  console.log(channelDetails, videos)
  useEffect(() => {
    fetchFromAPI(`channels?parts=snippet&id=${id}`)
      .then((data) => setChannelDetails(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setvideos(data?.items))
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(to bottom, #ed213a, #93291e)', zIndex:10, height:'300px'}}/>
      <ChannelCard channelDetail={channelDetails} marginTop="-110px"/>
      </Box>
      <Box display="flex" p="2" >
        <Box sx={{mr: {sm: '100px'}}}/>
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail