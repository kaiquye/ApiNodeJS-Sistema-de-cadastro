
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import InputF from '../Elements/ElementsForm/input'
import LabelF from '../Elements/ElementsForm/label'
import './Style.css'


export default function Formulario(props){
    //passa esses use para os imput
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    // function enviar(){
    //     props.state({nome : nome, senha : senha, email : email});
    // }

    return(

        <div className="Form">
            <form onSubmit={(e)=>props.onSubmit(e)}>
                <div className="Formulario">
                    <div>
                       <h1>TELA DE LOGIN</h1>
                    </div>
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
                        <InputF typeInput={props.typeInputSenha || "password"} inputHolderNome={props.inputHolderSenha} inputChange={setSenha} />
                     </div>
                     
                    <div>
                        <button type="submit" onClick={()=>{props.click({nome: nome, senha : senha})}}>LOGAR</button>
                    </div>
                     <div>
                        {/* O TYPE DO BUTTON TEM QUE SER (BUTTON), CASO CONTRARIO A PAGINA VAI RECARREGAR */}
                        <button type="button"> <Link className="linkRouter" to='/Register'>CADASTRAR</Link></button>
                    </div>
                </div>
      
            </form>
          
        </div>
    )
}

// import React, { useState } from "react";
// import {Link} from 'react-router-dom'
// import InputF from '../Elements/ElementsForm/input'
// import LabelF from '../Elements/ElementsForm/label'
// import './Style.css'


// export default function Formulario(props){
//     //passa esses use para os imput
//     const [nome, setNome] = useState('')
//     const [senha, setSenha] = useState('')



//     function validate(){

//         if(props.validateInput(nome, senha)){
//             props.click({nome : nome, senha : senha})
//             return true
//          }else{
//             return false 
//          }

//     }
//     const redirectTo = validate ? '/painel' : '/painel' ;

//     // function enviar(){
//     //     props.state({nome : nome, senha : senha, email : email});
//     // }

//     return(

//         <div className="Form">
//             <form>
//                 <div className="Formulario">
//                     <div>
//                        <h1>TELA DE LOGIN</h1>
//                     </div>
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
//                         <InputF typeInput={props.typeInputSenha || "password"} inputHolderNome={props.inputHolderSenha} inputChange={setSenha} />
//                      </div>
                     
//                     <div>
//                         <button type="button" onClick={()=>{validate()}} ><Link className='linkRouter' to={redirectTo}>LOGAR</Link></button>
//                     </div>
//                      <div>
//                         {/* O TYPE DO BUTTON TEM QUE SER (BUTTON), CASO CONTRARIO A PAGINA VAI RECARREGAR */}
//                         <button type="button"> <Link className="linkRouter" to='/Register'>CADASTRAR</Link></button>
//                     </div>
//                 </div>
      
//             </form>
          
//         </div>
//     )
// }