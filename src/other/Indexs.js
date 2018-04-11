/**
 * Created by SF on 2018/3/27.
 */

import React, {Component} from 'react';
import {
    View,
    PanResponder,
    Text
} from 'react-native';
import DataModel from './DataModel';

export default class Indexs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:[],
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderStart: (evt, gestureState) => {
                this.props.clickBack(gestureState.y0);
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}
                this.props.slideBack(gestureState.moveY);
                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        });
    }

    componentDidMount() {
        DataModel.getListIndexs((data,indexs) =>{
            console.log(data)
            this.setState({
                data:indexs,
            })
        })
    }


    render() {
        const {data, style} = this.props;
        return (
            <View
                style={[style, {
                    position: 'absolute',
                    right: 0,
                    top: 100,
                }]} {...this._panResponder.panHandlers}>
                {this.setButton()}
            </View>
        )
    }

    setButton = () => {
        var arr = [];
        for (var i = 0; i < this.state.data.length; i++) {
            arr.push(
                <View
                    key={i}
                    style={{
                    width: 20,
                    height: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: 'red'
                    }}>{this.state.data[i]}</Text>
                </View>
            )
        }
        return arr;
    }

}