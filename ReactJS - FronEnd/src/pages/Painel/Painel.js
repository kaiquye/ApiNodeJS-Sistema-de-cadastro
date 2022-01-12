import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import React, { useEffect, useState, useContext, useRef } from "react";
import { AuthContext } from "../../Context/AuthContext";
import './Style.css'
function Painel (){

  const [endereco, setEndereco] = useState([])
  
  const [idDisabled, setDisabled] = useState(true);
  const [teste, setTeste] = useState()
  const {desconectedUser} = useContext(AuthContext)
  const [valor, setValor] = useState(null)
  const Token = localStorage.getItem('Token')

      //caso o usuario não tenha um token a pagina ira carregar e direcionar ele para login
      //o button esta mudando o valor so para a pagina carregar ( teste, depois disso pode alaga-la)
      useEffect(()=>{
        setValor(null)
        if(Token != null){
          axios({
            method : 'post', 
            baseURL : 'http://localhost:8080/enderecos/buscar', 
            data : {'token' : Token}
          }).then((e)=>{
            
              if(e.status == 401){
                desconectedUser(null)
              }else{
                setEndereco(e.data)
                console.info('Pagina : Painel validada')
              }
          }).catch((e)=>console.log('Erro ao se conectar com o banco' + e))
        }else{
          desconectedUser(null)
        }
      },[valor])

    async function apagar(cep){
        if(cep != undefined){
           console.log(cep)
         return  axios({
             method : 'post', 
             baseURL : 'http://localhost:8080/enderecos/apagar', 
             data : {cep: cep}
           }).then((e)=>{ 
             console.log(e)
              alert('Endereco apagado')
              window.location.reload(false);
            }).catch((e)=>console.log('erro' + e))
        }
        
      }
      const [mudar, setMuda] = useState()

      function modificar(e){
        console.log(e)
        if(e != undefined){
          axios({
            method : 'post', 
            baseURL : 'http://localhost:8080/enderecos/modificar', 
            data : {endereco: e}
          }).then((result)=>{ 
             console.log(result)
             alert('Endereco modificado')
             window.location.reload(false);
           }).catch((result)=>console.log('erro ' + result))
        }
      }

  return(
    <div>
          <h1>Protected page</h1>
          
          <table  >

            <tr>
              <th>cep</th>  <th>Logradouro</th> <th>bairro</th> <th>localidade</th> <th>uf</th> <th>Apagar</th>
             </tr>
              {/*  AO CRIAR O CSS, CRIE UMA DIV PARA CADA CAMPO DA LISTA, ASSIM VOCE PODE DIVIDI-LA EM 60% E 30% PARA CADA PARTE */}
                {endereco.map((e, index)=> 
                  
                (
                  <tr>
                        <td>  
                       <p>   {e.cep} </p>
                           
                        </td>

                        <td>
                       <p>    {e.Logradouro}</p>
                        </td>

                        <td>
                            <p>{e.bairro} </p> 
                        </td>

                        <td>
                           <p>{e.localidade}</p> 
                        </td>

                        <td>
                          <p> {e.UF}</p>  
                        </td>

                        <td>
                          <div className="divButton">
                           <button onClick={()=> {apagar(e.cep)}} >Apagar</button> 
                          </div>
                        </td>
                  </tr>
                ))
                }
          </table>
    </div>
  )
}


export default Painel