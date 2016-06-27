/**
 * Created by liuling on 16/6/27.
 */

'use strict';

import React from '../node_modules/react';

import {
    Component,
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    Dimensions

} from '../node_modules/react-native';

var Banner = require('./components/Banner.js');

class index extends React.Component{

    render(){
        console.log(this.props.navigator);
        return(
            <Banner style={{height:160}} height={160} nav={this.props.navigator} />
        );
    }



}

module.exports = index;