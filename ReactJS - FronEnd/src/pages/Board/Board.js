import {useState} from 'react'


function Dash(){
    
    const [endereco, setEndereco] = useState([])
   
    var rs = ()=>{
        
        for(let i = 0; i <= Bairro.length; ){
      
            console.log(Bairro)
            ++i
        }

    }


    return(
        <div>
            <table>
                <tr>
                   <th>Cep</th> 
                   <th>Bairro</th> 
                   <th>Bairro</th> 
                </tr>
                  
            </table>
            <button onClick={Bairro}>S</button>
        </div>        
    )

}

export default Dash