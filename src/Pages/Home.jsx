import React from 'react'

import Hero from '../Component/Hero'
import Logo from '../Component/Logo'
import Third from '../Component/Third'
import { Bubbles } from 'lucide-react'



function Home() {
  return (
     <>
      <Hero />
       <div className="flex  items-center justify-center">
      <Logo />
      </div>  
      <Third /> 
    <Bubbles/>  
          </>
  )
}

export default Home