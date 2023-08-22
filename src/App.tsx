import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import AppProvider from '@modules/app/components/Provider'
import 'overlayscrollbars/overlayscrollbars.css'
import './styles/app.scss'
import './styles/vars.scss'
import store from './redux/store'
import AppRoutes from './routes'

const App: React.FC = () => {
    
    return(

        <>
            <ReduxProvider store = {store}>
                <AppRoutes />
                
                <AppProvider />
            </ReduxProvider>
        </>

    )

}

export default App