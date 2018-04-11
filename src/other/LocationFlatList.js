/**
 * Created by SF on 2018/3/29.
 */
import React, {Component} from 'react';
import {

    Text,
    View,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class LocationFlatList extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View
                style={{
                    width: width,
                    backgroundColor: 'white'
                }}>
                <FlatList
                    scrollEnabled={false}
                    horizontal={false}
                    data={['瓦房店', '普兰店', '甘井子', '沙河口', '中山区']}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                    numColumns={3}/>
                <View style={{
                    width: width,
                    height: 10,
                    backgroundColor: 'white'
                }}/>
            </View>
        )
    }

    _keyExtractor = (item, index) => index;

    _renderItem = ({item}) => {
        return (
            <View style={{
                marginLeft:10,
                marginTop:10,
                width: 80,
                height: 30,
                backgroundColor: 'white',
                alignItems: 'center',
                borderRadius:3,
                justifyContent: 'center',
                borderWidth:1,
                borderColor:'rgba(243,243,243,1)'
            }}>
                <Text style={{color:'rgba(69,69,69,1)'}}>{item}</Text>
            </View>
        )
    }
}


