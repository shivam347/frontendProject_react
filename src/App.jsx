import React, { useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {

  // by default theme is light
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')



  // Apply theme to Tailwind
  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark')
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //   }
  // }, [theme])


  return (

    <div className='bg-white relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme} setTheme={setTheme} />
    </div>



  )
}

export default App
