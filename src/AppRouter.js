import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom' 
import Home from './pages/home'
import All from './pages/content'
import ContentCold from './pages/cold'
import ContentHot from './pages/hot'
import ContentSeafood from './pages/seafood'

 class AppRouter extends Component {
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
export default AppRouter