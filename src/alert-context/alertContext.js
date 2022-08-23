import { createContext, useState } from 'react';


export const alertContext = createContext({
    alert: {
        show: false,
        msg: '',
        type: ''
      },
      setAlert: () => {}
});

const AlertContextProvider = (props) => {
       
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: ''
      })

    return (
            
        <alertContext.Provider value={[alert, setAlert]}>
            {props.children}
        </alertContext.Provider>
    );
};

export default AlertContextProvider;