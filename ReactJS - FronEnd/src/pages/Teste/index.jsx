import {useNavigate} from 'react-router-dom'

function Teste (){

  var nav = useNavigate()
    return(
        <div>
             <h1>Protected page ( TESTE )</h1>
            <button onClick={()=>nav('/painel')} >teste</button>
        </div>
    )
}
export default Teste