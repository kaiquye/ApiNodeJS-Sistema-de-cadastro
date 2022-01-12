
import React, { useEffect, useState, useContext } from "react";
import Form from '../../Componentes/Login/Form'
import axios from 'axios'
import './loginStyle.css'

import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login (){


    //O VALOR DO USESTATE TEM QUE SER DESSA MANEIRA; NULL ! NO INPUT OS VALORES ESTAO SENDO PASSADO EM FORMATOD JSON
     const [logar, setLogar] = useState(null)
     const Navigate = useNavigate()
     const {authentication, login, desconectedUser} = useContext(AuthContext) 


     //TODA VEZ QUE OS VALORES DO 'LOGAR' MUDAR ELE RECARREGA ESSA PARTE DO CODIGO.

     useEffect(()=>{

        desconectedUser(logar)
        
        console.log(authentication)
    }, [login])

     function verificarLogin(e){
        e.preventDefault();
  
                          if(logar.nome == '' || logar.senha == ''){
                                alert('preencha todos os campos')
                                window.location.reload()
                            }else { 
                                //CRIAR UMA CLASS COM O AXIOS- ELE RETORNARA UM VALOR  PARA SER TRATADO
                               axios(
                                {
                                    method : 'post', 
                                    baseURL : 'http://localhost:8080/usuario/buscar', 
                                    data : logar, 

                                }).then((e)=>{

                                    //FUNCIONADOO!!
                                    if(e.status === 200 && e.data.status === true){
                                        console.log('aproved')
                                        console.log(e.data)
                                        localStorage.setItem('Token', e.data.Token)
                                        //caso ele encontre um usuario no banco mais n retorne o ID ele da reaload
                                        desconectedUser(logar)
                                        return Navigate('/painel')
                                    }else{
                                        window.location.reload()
                                    }
                                 }
                                )
                                    .catch((e)=>{
                                            console.log('erro com o servidor ## AXIOS ...' + e)
                                })
                               
                            }
     }
    // function validateInput(var1, var2){
    //     if(var1 == '' || var2 == ''){
    //         alert('Preencha todos os campos.')
    //         return false 
    //     }else{
    //         return true
    //     }
    // }

//     useEffect(()=> {

// console.log('valores do useState')
// console.log(login.nome, login.senha)

//                 if(login.nome == '' || login.senha == ''){
//                     console.log('erro, valores do useState vazio')
//                 }else { 
//                     axios(
//                     {
//                         method : 'post', 
//                         baseURL : 'http://localhost:8080/usuario/buscar', 
//                         data : login, 
//                     }).then((e)=>{
//                         const {Token} = e.data
//                         ls.set("Token", Token)
//                         console.log(ls.get('Token'), "teste")
//                     })
//                         .catch((e)=>{
//                                 console.log('erro com o servidor ## AXIOS ...' + e)
//                     })
//                 }
//     }, [login])

    return(
        <body>
            <div className="telaLogin">
                    <Form
                        onSubmit={verificarLogin}
                        click={setLogar}
                        inputHolderNome={'digite seu nome'}
                        typeInputNome={"text"}
                        valor1={'NOME'}
                        
                        inputHolderSenha={'digite sua senha'}
                        typeInputSenha={"password"}
                        valor2={'SENHA'}
                        />
             </div>
        </body>
     
    )
}














// import React, { useEffect, useState } from "react";
// import Form from '../../Componentes/Login/Form'
// import {BrowserRouter as Browser, Route, Routes, Link} from 'react-router-dom'
// import axios from 'axios'
// import ls from 'local-storage'
// import './loginStyle.css'

// export default function Login (){
//      const [login, setLogin] = useState([{nome : '', senha : ''}])

//     function validateInput(var1, var2){
//         if(var1 == '' || var2 == ''){
//             alert('Preencha todos os campos.')
//             return false 
//         }else{
//             return true
//         }
//     }

//     useEffect(()=> {

// console.log('valores do useState')
// console.log(login.nome, login.senha)

//                 if(login.nome == '' || login.senha == ''){
//                     console.log('erro, valores do useState vazio')
//                 }else { 
//                     axios(
//                     {
//                         method : 'post', 
//                         baseURL : 'http://localhost:8080/usuario/buscar', 
//                         data : login, 
//                     }).then((e)=>{
//                         const {Token} = e.data
//                         ls.set("Token", Token)
//                         console.log(ls.get('Token'), "teste")
//                     })
//                         .catch((e)=>{
//                                 console.log('erro com o servidor ## AXIOS ...' + e)
//                     })
//                 }
//     }, [login])

//     return(
//         <body>
//             <div className="telaLogin">
//                     <Form
//                         click={setLogin}
//                         validateInput={validateInput}
//                         inputHolderNome={'digite seu nome'}
//                         typeInputNome={"text"}
//                         valor1={'NOME'}
                        
//                         inputHolderSenha={'digite sua senha'}
//                         typeInputSenha={"password"}
//                         valor2={'SENHA'}
//                         />
//              </div>
//         </body>
     
//     )
// }