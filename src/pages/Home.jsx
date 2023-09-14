import React, {useState} from 'react'
import{Box, styled} from '@mui/material'
import Sunset from '../assets/images/bg3.jpg'
import Form from '../components/Form'
import Information from '../components/Information'




const Component = styled(Box)({
height: '90vh',
    display: 'flex',
    alignItems: 'center',
    margin: '0 auto',
    width: '70%',
    backgroundColor: 'lightgray',
    borderRadius: '20px 0 0 20px',
    
})

// const Image = styled(Box) ({
//     backgroundImage: 'url(${Sunset})',
//     width: '30%',
//     height: '100%',
//     backgroundSize: 'cover',
//     borderRadius: '20px 0 0 20px',
//     backgroundColor: 'green'
// })

const Home = () => {
    const [result, setResult] = useState({})

  return (
  <Component>
    <img src={Sunset} alt="Sunset" height={670} width={350}  />
    {/* <Image></Image> */}
    <Box style = {{ width: '70%', height: '100%' }}>
        <Form   setResult={setResult}  />
        <Information  result={result} />
    </Box>
  </Component>
  )
}

export default Home