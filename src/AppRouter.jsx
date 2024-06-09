import { useState } from 'react'
import { Header } from './components/organisms/Header/Header'
import {Navigate, Route, Routes} from 'react-router-dom';
import { MainPage } from './components/pages/MainPage/MainPage';


export const AppRouter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>

     <Routes>

        <Route path='/' exact element={<MainPage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>

     </Routes>

    </>
  )
}

