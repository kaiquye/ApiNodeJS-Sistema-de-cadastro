import {useEffect, useState} from 'react'
import axios from 'axios'
import './Style.css'
function Endereco (){


    const [endereco, setEndereco] = useState([null])
    
    
    useEffect(()=>{
        setEndereco('')
    },[])
    
    const [cep, setCep] = useState(null)
    function procuraCep(){
        console.log(cep)
        axios({
            baseURL : `https://viacep.com.br/ws/${cep}/json/`,
            method : 'get',
        }).then((r)=>{
            setEndereco(r.data) 
            return true
        }).catch((r)=>console.log(r))

        console.log(endereco)
    }

    function cadastrarEndereco(){
        
    }

    function validarFormulario(){
        console.log(cep)
        if(cep == '' || cep == null){
            alert('Informe o CEP ')
            window.location.reload()
        }
    }


    return(
        <div>
            <form className='Formulario' >
                <h1>CADASTRAR ENDEREÇO</h1>
               <div>
                    <label>
                    Cep:
                    </label>
                    <input type="text"  onChange={(e)=>setCep(e.target.value)} onMouseOut={procuraCep} />
               </div>
                <div>
                    <label>
                        Bairro:
                    </label>
                        <input type="text"   value={endereco.bairro || ''} />
                </div>
                <div>
                    <label>
                    Complemento:
                    </label>
                    <input type="text"  value={endereco.complemento || ''}  />
                </div>
                <div>
                    <label>
                    DDD:
                    </label>
                    <input type="text"  value={endereco.ddd || ''}  />
                </div>
                <div>
                    <label>
                    Localidade:
                    </label>
                    <input type="text"  value={endereco.localidade || ''}  />
                </div>
                <div>
                    <label>
                    Logradouro:
                    </label>
                    <input type="text"  value={endereco.logradouro || ''}  />
                </div>
                <div>
                    <label>
                        UF:
                    </label>
                    <input type="text"  value={endereco.uf || ''}  />
                </div>
                <div>
                     <button type='button' onClick={validarFormulario} >CADASTRAR</button>
                </div>
            </form>
           
         </div>
    )

}

export default Endereco