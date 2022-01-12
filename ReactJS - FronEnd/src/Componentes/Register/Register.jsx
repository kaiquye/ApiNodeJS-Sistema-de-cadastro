import React, { useState } from "react";
import InputF from '../Elements/ElementsForm/input'
import LabelF from '../Elements/ElementsForm/label'



export default function Formulario(props){
    //passa esses use para os imput
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [email, setEmail ] = useState('')
    const [cpf, setCpf ] = useState('')
    // function enviar(){
    //     props.state({nome : nome, senha : senha, email : email});
    // }

    //USE STATE !!!!!!!!!!!!!!!!!!!!!!!!
    //  const [redirectTo, setRedirectTo] = useState('')

    //  function validade(){
    //     if(props.validateInput(nome, senha, email)){
    //         console.log(true)
    //         props.click({nome: nome, senha : senha, email: email})
    //         setRedirectTo('/')
    //     }else {
    //         console.log(false)
    //         setRedirectTo('')
    //     }
    // }

    return(

        <div className="Form">
            <form  onSubmit={(e)=>props.onSubmit(e)}>
                <div className="Formulario">

                     <div>
                         <LabelF> {props.valor1} </LabelF>
                     </div>
                     <div>
                          <InputF  typeInput={props.typeInputNome || "text"} inputHolderNome={props.inputHolderNome} inputChange={setNome} />
                     </div>  
                     <div>
                        <LabelF> {props.valor2} </LabelF>
                     </div>
                     <div>
                        <InputF  typeInput={props.typeInputSenha || "password" } inputHolderNome={props.inputHolderSenha} inputChange={setSenha} />
                     </div>
                     <div>
                       <LabelF> {props.valor3} </LabelF>
                     </div>
                     <div>
                        <InputF  typeInput={props.typeInputEmail || "text"}  inputHolderNome={props.inputHolderEmail} inputChange={setEmail} />
                     </div> 
                     <div>
                       <LabelF> {props.valor4} </LabelF>
                     </div>
                     <div>
                        <InputF  typeInput={props.typeInputCpf || "text"} inputHolderNome={props.inputHolderCpf} inputChange={setCpf}/>
                     </div> 
                     <div>
                        <button type="submit" onClick={()=>props.click({nome : nome, senha : senha, email : email })}>Cadastrar</button>

                    </div>
                    <div>
                        <button>VOLTAR</button>
                    </div>

                </div>
            </form>
          
        </div>
    )
}


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import InputF from '../Elements/ElementsForm/input'
// import LabelF from '../Elements/ElementsForm/label'



// export default function Formulario(props){
//     //passa esses use para os imput
//     const [nome, setNome] = useState('')
//     const [senha, setSenha] = useState('')
//     const [email, setEmail ] = useState('')
//     const [cpf, setCpf ] = useState('')
//     // function enviar(){
//     //     props.state({nome : nome, senha : senha, email : email});
//     // }

//     //USE STATE !!!!!!!!!!!!!!!!!!!!!!!!
//     //  const [redirectTo, setRedirectTo] = useState('')

//     //  function validade(){
//     //     if(props.validateInput(nome, senha, email)){
//     //         console.log(true)
//     //         props.click({nome: nome, senha : senha, email: email})
//     //         setRedirectTo('/')
//     //     }else {
//     //         console.log(false)
//     //         setRedirectTo('')
//     //     }
//     // }



//     return(

//         <div className="Form">
//             <form>
//                 <div className="Formulario">

//                      <div>
//                          <LabelF> {props.valor1} </LabelF>
//                      </div>
//                      <div>
//                           <InputF  typeInput={props.typeInputNome || "text"} inputHolderNome={props.inputHolderNome} inputChange={setNome} />
//                      </div>  
//                      <div>
//                         <LabelF> {props.valor2} </LabelF>
//                      </div>
//                      <div>
//                         <InputF  typeInput={props.typeInputSenha || "password" } inputHolderNome={props.inputHolderSenha} inputChange={setSenha} />
//                      </div>
//                      <div>
//                        <LabelF> {props.valor3} </LabelF>
//                      </div>
//                      <div>
//                         <InputF  typeInput={props.typeInputEmail || "text"}  inputHolderNome={props.inputHolderEmail} inputChange={setEmail} />
//                      </div> 
//                      <div>
//                        <LabelF> {props.valor4} </LabelF>
//                      </div>
//                      <div>
//                         <InputF  typeInput={props.typeInputCpf || "text"} inputHolderNome={props.inputHolderCpf} inputChange={setCpf}/>
//                      </div> 
//                      <div>
//                         <button type="button" onClick={()=>props.click({nome : nome, senha : senha, email : email })}>Cadastrar</button>

//                     </div>
//                     <div>
//                         <button>VOLTAR</button>
//                     </div>

//                 </div>
//             </form>
          
//         </div>
//     )
// }