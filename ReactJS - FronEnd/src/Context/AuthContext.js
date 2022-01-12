import {createContext} from 'react'
import {useState} from 'react'
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
//metodos e funções publicas para todos os filhos.
  
    const [login, setLogin] = useState(null);

    const desconectedUser = (logar)=>{
        setLogin(logar)
    }

    return(
        <AuthContext.Provider 
        value={{authentication : Boolean(login), login, desconectedUser}}
        >
           <children/> 
        </AuthContext.Provider>
    )
}
