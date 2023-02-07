import React from 'react'
import ReactDOM from 'react-dom'
import RouterSetup from './app'

function App() {
    return (
        <>
            <RouterSetup />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))