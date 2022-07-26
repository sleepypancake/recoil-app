import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Canvas from './Canvas'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Atoms } from './examples/Atoms'
import { Selectors } from './examples/Selectors'
import { DebugButton } from './components/DebugButton/DebugButton'
import { Async } from './examples/Async'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ChakraProvider>
                <Router>
                    <Switch>
                        <Route path="/examples/atoms">
                            <DebugButton />
                            <Atoms />
                        </Route>
                        <Route path="/examples/selectors">
                            <DebugButton />
                            <Selectors />
                        </Route>
                        <Route path="/examples/async">
                            <DebugButton />
                            <Async />
                        </Route>
                        <Route>
                            <Canvas />
                            <DebugButton />
                        </Route>
                    </Switch>
                </Router>
            </ChakraProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root'),
)
