import React from 'react'
import {Switch, Route } from 'react-router-dom' 
import Home from './pages/home'
import All from './pages/content'
import ContentCold from './pages/content/cold'
import ContentHot from './pages/content/hot'
import ContentSeafood from './pages/content/seafood'

export default class AppRouter extends React.Component {
    render () {
        return (
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/all" exact component={All}></Route>
                <Route path="/cold" exact component={ContentCold}></Route>
                <Route path="/hot" exact component={ContentHot}></Route>
                <Route path="/seafood" exact component={ContentSeafood}></Route>
            </Switch>
        )
    }
}
