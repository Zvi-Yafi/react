import React, { useState, useEffect } from 'react'


const Test = ({ nameCountrys }) => {
  const [nameCountry, setNameCountry] = useState('')
  const [fleg, setFleg] = useState(null)

 const getCountry = async () => {
  const res = await 
   fetch(`https://restcountries.com/v3.1/name/${nameCountrys}`)
      const data = await res.json()
        setNameCountry(data[0].name.common)
        setFleg(data[0].flags.svg) 

 }
  useEffect(() => {
    getCountry()
  }, []);

  return (
    <div>
      {nameCountry && <h1>{nameCountry}</h1>}
      {nameCountry && <img src={fleg} width={'100px'} />}
    </div>
  )
}

export default Test