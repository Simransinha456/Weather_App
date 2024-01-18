import React, {useState} from 'react'
import{Box, styled} from '@mui/material'
import Sunset from '../assets/images/bg3.jpg'
import Form from '../components/Form'
import Information from '../components/Information'

const Component = styled(Box)({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '70%',
    backgroundColor: 'lightgray',
  })

const Home = () => {
    const [result, setResult] = useState({})

  return (
  <Component>
    <img src={Sunset} alt="Sunset" height={'100%'} width={'35%'}  />

    {/* right side content */}
    <Box style = {{ width: '70%', height: '100%' }}> 
        <Form   setResult={setResult}  />
        <Information  result={result} />
    </Box>
  </Component>
  )
}

export default Home