import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Layout from './pages/Layout'
import Productpage from './pages/Productpage'
import Counterjs from './hooks/Counterjs'
import Productview from './pages/Productview'
import Cartpage from './pages/Cartpage'
import Signuppage from './pages/Signuppage'
import StateManager from './redux/StateManager'
import Aboutpage from './pages/Aboutpage'
import Contactpage from './pages/Contactpage'
import Loginpage from './pages/Loginpage'
import Faqpage from './pages/Faqpage'






const Myroute = () => {
    return (
        
            <>

                <Router>
                    <Routes>
                        <Route path='/' element={<Layout />} >
                        <Route index element={<Homepage />} />
                       <Route path='/products' element={<Productpage/>} />
                       <Route path='/productview/:product_id' element={<Productview/>}/>
                       <Route path='/cart'element={<Cartpage/>}/>
                       <Route path='/about' element={<Aboutpage />} />
                       <Route path='/signup' element={<Signuppage/>}/>  
                       <Route path='/contact' element={<Contactpage/>}/>
                       <Route path='/login' element={<Loginpage/>}/>
                       <Route path='/faqs' element={<Faqpage/>} />
                       
                      
                 </Route>

                 <Route path='./hooks' element={<Counterjs />}/>
                 <Route path='/redux' element={<StateManager/>}/>
             

                    </Routes>
                </Router>
            </>

    
        
    )
}

export default Myroute
