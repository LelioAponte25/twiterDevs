import './App.css'
import { TWCard } from './TwCard'

export function App () {  

    const format = (userName) => `@${userName}`

    return(
        <section className='App'>

            <TWCard formatUser={format} userName="Andres_aponte">
                Andres Aponte
            </TWCard>

            <TWCard formatUser={format} userName="Ares_alejandro">
                Ares Alenjandro
            </TWCard>
       
        </section>
       )
}

