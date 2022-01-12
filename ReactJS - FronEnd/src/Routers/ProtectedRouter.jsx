import {Navigate} from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios'
import {useContext} from 'react'

import { AuthContext } from '../Context/AuthContext'


//uma pagina e enviada para essa function como parametro. (children)
function ProtectedRouter ({children, redirectTo}){
    //verificando o token
    var {authentication, desconectedUser} = useContext(AuthContext);

    // useEffect(()=>{
    //     let token = localStorage.getItem('Token')   
    //     axios({
    //         data : {Token : token},
    //         method : 'post',
    //         baseURL : 'http://localhost:8080/usuario/validarToken'
    //     }).then((e)=>{
    //         if(e.status != 202 && e.data.status === false){
    //             Navigate('/')
    //             console.error('Console :  token invalodio')
    //             return alert('token invalido')
    //         }else if(e.status === 202 && e.data.token === true){
    //             console.log('0000000000000000')
    //             log('true')
    //             console.log('teste')
    //         }
    //     }).catch((e)=>{
    //         console.log('erro' + e )
    //     })

    //     console.error(authentication)
    // },[authentication])


    // const tokenUser = localStorage.getItem('tokenUser') || true
    // return tokenUser ? children : <Navigate to={redirectTo}/> 


    //   const tokenUser = localStorage.getItem('tokenUser') || authentication
    if(authentication){
        console.error('authentication')
        return children
    }else{
        console.log('erro false')
        return <Navigate to={redirectTo}/> 
    }
   }
   
export default ProtectedRouter