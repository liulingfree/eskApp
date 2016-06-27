/**
 * Created by admi on 2016/6/15.
 */
'use strict';

import React from '../../node_modules/react';

import {
    Component,
    StyleSheet,
    Text,
    View,
    Image,
    NavigatorIOS,
    Dimensions

} from '../../node_modules/react-native';

var {height, width} = Dimensions.get('window');
var Swiper = require('react-native-swiper');
var content = require('./Content.js');

class Banner extends React.Component{
    _onMomentumScrollEnd (e, state, context) {
        console.log(state, context.state)
    }
    gotoLink(){
        this.props.nav.push({
            component : content,
            title : '首页'
        });
    }
    render(){
        console.log('navigator is ..',this.props.nav)
        var _dot = <View style={{backgroundColor:'rgba(0,0,0,.2)', width: 16, height: 6, marginLeft: 3, marginRight: 3, marginTop: 3}} />;
        var _activeDot = <View style={{backgroundColor: '#ffffff', width: 16, height: 6, marginLeft: 3, marginRight: 3, marginTop: 3}} />;
        return(
            <View style={Styles.container}>
                <View style={Styles.banner}>
                    <Swiper style={Styles.wrapper}
                            index={0}
                            loop={false}
                            height={this.props.height}
                            onMomentumScrollEnd ={this._onMomentumScrollEnd}
                            dot = {_dot}
                            activeDot={_activeDot}
                            paginationStyle={{
                                bottom: 10
                            }}>
                        <View style={Styles.slide1}>
                            <Image style={{height:this.props.height,width:width}} source={{uri:"http://res.eshangke.com/course/2015/08/04/1438682363.jpg"}} />
                        </View>
                        <View style={Styles.slide2}>
                            <Image style={{height:this.props.height,width:width}} source={{uri:"http://res.eshangke.com/newsphoto/2016/02/16/1455590628.jpg"}} />
                        </View>
                        <View style={Styles.slide3}>
                            <Image style={{height:this.props.height,width:width}} source={{uri:"http://res.eshangke.com/newsphoto/2016/06/03/1464949005.jpg"}} />
                        </View>
                    </Swiper>
                </View>
            </View>
        );
    }
}
//<Text style={{fontSize:42,color:'#ffffff'}}>商刻小管家APP</Text>
const Styles = StyleSheet.create({
    container : {
        flexDirection : 'row',//column , row
        flexWrap:'wrap',
        justifyContent : 'space-between' //flex-start|end ; center ; space-around ; space-between ;
    },
    banner : {
        //backgroundColor:'#e88e1a',
        justifyContent : 'center',
        alignItems : 'center',
        flex : 1
    },
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

module.exports = Banner;