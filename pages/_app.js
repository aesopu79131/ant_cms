import "../styles/styles.scss";
import App from 'next/app';
import Head from 'next/head';
import { useState, useEffect } from "react";
// import {sendApi} from "../utils/api";
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../redux';
// import Layout from "../components/layout";

class MyApp extends App {

    async componentDidMount(){

    }

    render(){
        const { Component, pageProps, router,store  } = this.props;

        return(
            <Provider store={store}>
                <Head>
                    <title>CMS</title>
                    <meta charSet='utf-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no"/>
                    <meta name="description" content="CMS"></meta>
                    <meta name="keywords" content="CMS"></meta>
                    <meta name="title" content="CMS"></meta>
                    <meta name="format-detection" content="telephone=no"></meta>
                    {/* <script
                    src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
                    integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
                    crossOrigin="anonymous"></script> */}
                </Head>

                <div id="whole-screen-wrapper">
                    <Component {...pageProps}/>
                </div>
            </Provider>
        )
    }
}

export default withRedux(initStore, { debug: false })(MyApp);
