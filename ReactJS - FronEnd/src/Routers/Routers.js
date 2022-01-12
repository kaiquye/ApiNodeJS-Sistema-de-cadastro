// import {BrowserRouter as Browser, Routes, Route} from 'react-router-dom'

// import Login from '../pages/Login/login'
// import Register from '../pages/Register/Register'
// import ProtectedRouter from './ProtectedRouter'
// import Painel from '../pages/Painel/Painel'

// function Routers(){
//     return(
//             <Browser>
//                 <Routes>
//                     <Route path='/' element={<Login/>} />

//                     <Route path='/Register' element={<Register/>} />
//                     <Route path='/painel' element={<ProtectedRouter redirectTo='/'> <Painel/> </ProtectedRouter>}/> 
//                 </Routes>
//             </Browser>
//     )
// }

// export default Routers

import {BrowserRouter as Browser, Routes, Route} from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import Login from '../pages/Login/login'
import Register from '../pages/Register/Register'
import ProtectedRouter from './ProtectedRouter'
import Painel from '../pages/Painel/Painel'
import { useEffect, useState } from 'react'
import Teste from '../pages/Teste'
import axios from 'axios'
import Endereco from '../pages/endereco/endereco'


function Routers(){


    

    const [login, setLogin] = useState(null);

    useEffect(()=>{
            setLogin(null)
    },[])


    const desconectedUser = (logar)=>{
        setLogin(logar)
    }
    return(
            <Browser>
                <AuthContext.Provider  value={{authentication : Boolean(login), login, desconectedUser}}>
                    <Routes>
                        <Route path='/' element={<Login/>} />
                        <Route path='/Register' element={<Register/>} />
                        <Route path='/Endereco' element={<Endereco/>} />
                        <Route path='/painel' element={<ProtectedRouter redirectTo='/'> <Painel/> </ProtectedRouter>}/> 
                        <Route path='/teste' element={<ProtectedRouter redirectTo='/'> <Teste/> </ProtectedRouter>}/> 
                    </Routes>
                </AuthContext.Provider>
            </Browser>
    )
}

export default Routers