import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import SkillsDetails from '../Pages/SkillsDetails'
import CoachToolKit from '../Pages/CoachToolKit'
import CoachDetails from '../Pages/CoachDetails'
import CoachRequestForm from '../Pages/CoachRequestForm'
import FormList from '../Pages/FormList'

function PageRoute() {
  return (

        <Routes>
            <Route path='/home' element={<HomePage />}></Route>
            <Route path='/skills' element={<SkillsDetails />} ></Route>
            <Route path='/toolkit' element={<CoachToolKit />} ></Route>
            <Route path='/details' element={<CoachDetails />} ></Route>
            <Route path='/form' element={<CoachRequestForm />} ></Route>
            <Route path='/formlist' element={<FormList />} ></Route>
        </Routes>

  )
}

export default PageRoute