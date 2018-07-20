import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";

import Cart from './cart/components/Cart';

import "./App.css";

export default class App extends React.Component {
    constructor() {
        super(); //ES6 must

        //State, mutable data, owned by this component
        // state is a react keyword
        this.state = {
            appTitle: 'Product App',
            year: 2018 
        }
    }
 
    //react keyword
    // create and return virtual dom
    render() {
        console.log("App render");
 

        //Composition: App is the parent component
        // Header and Footer are child for App component

        // JSX => JavaScript + XML
        //JSX shall convert to JavaScript at build time
        return (
            <div>
                {/* Share data with child  using props */}
                <Header appTitle={this.state.appTitle} />

                <Cart />
                
                <Home startValue={100} />

                <About />

                <Footer appTitle={this.state.appTitle} 
                        year={this.state.year} />
            </div>
        )

        // return React.createElement("h1", 
        //                             {id: 'head1'}, 
        //                             'Welcome to React' );
    }
}