// import Layout from '../components/layout';
import { useState, useEffect } from "react";
import {Component,Fragment} from 'react';
import { connect } from 'react-redux';
import { Button, DatePicker, version } from "antd";

export default connect(a => ({
  application: a.application
}))( 
  class Landing extends Component{
    constructor(props){
      super(props);
      
    }

    render(){
      return(
          <div id="splash-screen">
            <div className="App">
                <h1>ANTD version: {version}</h1>
                <DatePicker />
                <Button type="primary" style={{ marginLeft: 8 }}>
                Primary Button
                </Button>
            </div>,
          </div>
      )
    }
});

