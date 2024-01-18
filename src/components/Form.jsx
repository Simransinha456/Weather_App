
import React, { useState } from 'react'
import{Box, InputBase, Button, styled} from '@mui/material'
import { getWeather } from '../services/api'


const Container = styled(Box)({
    background: '#445A6F',
    padding: 20,
    
}) 

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 5,
    fontSize: 19,
})

const GetButton = styled(Button) ({
    background: '#e67e22'
})

const Form = ({ setResult }) => {
    const [data, setData]= useState({ City: '', Country: ''})
    // used here useState to store the value -- initially it takes two value city and country which is empty

    const handleChange = (e) => {
        setData ({...data, [e.target.name]: e.target.value}) // ...data me city and country dono aa rhe hai
        // console.log(data);
    }
    //  Api-------
    const getWeatherInfo = async () => {
      let response = await getWeather (data.City, data.Country) // API ke through yha city ka data aayega
      setResult ( response)
    }

  return (
   <Container>
    <Input
    placeholder='City'
    onChange={(e)=> handleChange(e)}
    name='City'      // by the help of name property we can differentiate that this is City

    />
    <Input
    placeholder='Country'
    onChange={(e)=> handleChange(e)}
    name='Country'     // and this is country--

    />
    <GetButton 
    variant='contained'
        onClick={() => getWeatherInfo()}>
         Get Weather</GetButton>

   </Container>
  )
} 

export default Form