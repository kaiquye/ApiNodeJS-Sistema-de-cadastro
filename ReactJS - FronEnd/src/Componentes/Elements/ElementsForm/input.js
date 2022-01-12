import react from 'react'


export default  function InputForm(props){
        return(
           <>
                <input type={props.typeInput}  placeholder={props.inputHolderNome} onChange={(e)=>props.inputChange(e.target.value)} />
           </>
        )
}


