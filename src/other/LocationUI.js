/**
 * Created by SF on 2018/3/29.
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import SFLocation from '../SFLocation'
const {width, height} = Dimensions.get('window');

export default class LocationUI extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
        }
    }

    componentDidMount() {
        SFLocation.startLoactions((data) =>{

        })
    }

    render() {
        return (
            <View
                style={{
                    width: width,
                    height: 80,
                    backgroundColor: 'rgba(243,243,243,1)'
                }}>
                <Text style={{
                    fontSize: 14,
                    marginLeft: 8,
                    marginTop: 5,
                    color:'rgba(169,169,169,1)'
                }}>{'定位'}</Text>

                <View
                    style={{
                        marginTop:10,
                        marginLeft:10,
                        width:80,
                        height:30,
                        backgroundColor:'white',
                        borderColor: 'rgba(213,213,213,1)',
                        borderRadius: 3,
                        borderWidth: 1,
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                    {this.location()}
                </View>
                <View
                    style={{
                        marginTop:15,
                        width:width,
                        height:1,
                        backgroundColor: 'rgba(213,213,213,1)',
                    }}/>

            </View>
        )
    }


    location = () =>{
        if (this.state.location == '') {
            return(
                <Text style={{color:'rgba(69,69,69,1)',fontSize:12}}>{'正在定位..'}</Text>
            )
        }
    }

}