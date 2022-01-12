

import Register from '../../Componentes/Register/Register'
import {useState, useEffect, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './loginStyle.css'



function Painel(){

    const Navigate = useNavigate()

    //FAZER O CADASTRO DO USUARIO NO BANCO DE DADOS || SE O USUARIO FOR CRIADO RETORNA O USUARIO PARA 
    // A TELA DE LOGIN...QUANDO ELE FIZER O LOGIN VAI SER GERADO O TOKEN DELE....
    const [registerUser, setRegisterUser] = useState(
        {
            nome : '', 
            senha : '', 
            email : '', 
            cpf : ''
        })
         
    function criarUsuario(e){
        e.preventDefault();
        //FUNCIOANDO !!!
        console.log(registerUser)
        if(registerUser.nome != '' && registerUser.senha != ''){
            try {
                      axios({
                             method : 'post', 
                             baseURL :  'http://localhost:8080/usuario/cadastrar', 
                             data : registerUser
                      }).then((e)=>{
                          if(e.status == 200 && e.data.status == true){
                              console.log(e.data)
                                  Navigate('/')
                                  alert('Usuario criado...')
                          }else{
                            alert('Erro ao criar usuario...')
                            window.location.reload()
                          }
                      })
         } catch (error) {
                console.log('React :  erro ao cadastrar usuario' + error)
          }
        }else{
            alert('Preencha todos os campos.')
            window.location.reload()
        }
        
    }
        // useEffect(()=>{
        //     if(registerUser.nome === ''){
        //     }else{
        //         console.log('teste')
        //         console.log(registerUser)
        //         axios({
        //             method : 'post',
        //             baseURL : 'http://localhost:8080/usuario/cadastrar', 
        //             data : registerUser,
        //         }).then((e)=>{
        //             console.log(e.data.status)
        //                if(e.data.status === true){
        //                   navigate('/')
        //                   alert('Tudo pronto. Usuario cadastrado.')
        //                }else{
        //                     alert('erro, verifique todos os campos')
        //                }
        //         })
        //             .catch((e)=>{
        //                 console.log('Erro | Axios - BackEnd ' + e)    
        //             })
        //     }

        // },[registerUser])


    // useEffect( async()=>{
    //     try {
    //         let user = await axios({
    //                                     method : 'post', 
    //                                     baseURL :  'http://localhost:8080/usuario/cadastrar', 
    //                                     data : registerUser
    //                                  })
    //        console.log('usuario criado' + user)                                     
    //     } catch (error) {
    //         console.log('React :  erro ao cadastrar usuario' + error)
    //     }
    // }, [registerUser])
    return(
        <>
            <Register
                 onSubmit={criarUsuario}
                 click={setRegisterUser}
                 inputHolderNome={'digite seu nome'}
                 typeInputNome={"text"}
                 valor1={'NOME'}
                 
                 inputHolderSenha={'digite sua senha'}
                 typeInputSenha={"password"}
                 valor2={'SENHA'}

                 inputHolderEmail={'digite seu E-MAIL'}
                 typeInputEmail={"text"}
                 valor3={'E-MAIL'}

                 inputHolderCpf={'digite seu CPF'}
                 typeInputCpf={"text"}
                 valor4={'CPF'}
            />
        </>
    )
}

export default Painel



















// import Register from '../../Componentes/Register/Register'
// import {useState, useEffect} from 'react'
// import {useNavigate} from 'react-router-dom'
// import axios from 'axios'
// import './loginStyle.css'

// function Painel(){

//     const navigate = useNavigate();

//     //FAZER O CADASTRO DO USUARIO NO BANCO DE DADOS || SE O USUARIO FOR CRIADO RETORNA O USUARIO PARA 
//     // A TELA DE LOGIN...QUANDO ELE FIZER O LOGIN VAI SER GERADO O TOKEN DELE....
//     const [registerUser, setRegisterUser] = useState(
//         {
//             nome : '', 
//             senha : '', 
//             email : '', 
//             cpf : ''
//         })
        
//     function validateInput(var1, var2, var3){
//         if(var1 == '' || var2 == '' || var3 == ''){
//             alert('Preencha todos os campos do formulario.')
//             return false 
//         }else{
//             return true
//         }
//     }

//         useEffect(()=>{
//             if(registerUser.nome === ''){
//             }else{
//                 console.log('teste')
//                 console.log(registerUser)
//                 axios({
//                     method : 'post',
//                     baseURL : 'http://localhost:8080/usuario/cadastrar', 
//                     data : registerUser,
//                 }).then((e)=>{
//                     console.log(e.data.status)
//                        if(e.data.status === true){
//                           navigate('/')
//                           alert('Tudo pronto. Usuario cadastrado.')
//                        }else{
//                             alert('erro, verifique todos os campos')
//                        }
//                 })
//                     .catch((e)=>{
//                         console.log('Erro | Axios - BackEnd ' + e)    
//                     })
//             }

//         },[registerUser])


//     // useEffect( async()=>{
//     //     try {
//     //         let user = await axios({
//     //                                     method : 'post', 
//     //                                     baseURL :  'http://localhost:8080/usuario/cadastrar', 
//     //                                     data : registerUser
//     //                                  })
//     //        console.log('usuario criado' + user)                                     
//     //     } catch (error) {
//     //         console.log('React :  erro ao cadastrar usuario' + error)
//     //     }
//     // }, [registerUser])
    


//     return(
//         <>
//             <Register
//                  validateInput={validateInput}
//                  click={setRegisterUser}
//                  inputHolderNome={'digite seu nome'}
//                  typeInputNome={"text"}
//                  valor1={'NOME'}
                 
//                  inputHolderSenha={'digite sua senha'}
//                  typeInputSenha={"password"}
//                  valor2={'SENHA'}

//                  inputHolderEmail={'digite seu E-MAIL'}
//                  typeInputEmail={"text"}
//                  valor3={'E-MAIL'}

//                  inputHolderCpf={'digite seu CPF'}
//                  typeInputCpf={"text"}
//                  valor4={'CPF'}
//             />
//         </>
//     )
// }
// export default Painel