import { createContext, useState } from 'react';


export const inputContext = createContext();



const InputContextProvider = (props) => {
  const [name, setName] = useState('');
    
       
     

    return (
            
        <inputContext.Provider value={[ name, setName]}>
            {props.children}
        </inputContext.Provider>
    );
};

export default InputContextProvider;