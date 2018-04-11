/**
 * Created by HZY on 2018/3/23.
 */

import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import List from './other/LocationList'
import Indexs from "./other/Indexs";
import DataModel from './other/DataModel';

export default class SFSelectLocation extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        DataModel.getListIndexs((data, indexs) => {
            this.setState({
                data: data,
            })
        })
    }

    render() {
        return (
            <View style={{
                flex: 1,
                marginTop: 0
            }}>
                <List
                    ref={(ref) => this.list = ref}
                    data={this.state.data}
                    onclick={this.onclick}/>
                <Indexs
                    clickBack={(data) => {
                        console.log(parseInt((data - 150) / 15));
                        var index = parseInt((data - 150) / 15);
                        this.list.getSectionHeight((data) => {
                            console.log(data);
                            this.list.ref.scrollTo({
                                x: 0,
                                y: data[index],
                                animate: true
                            });
                        });

                    }}
                    slideBack={(data) => {
                        console.log(parseInt((data - 150) / 15));
                        var index = parseInt((data - 150) / 15);
                        this.list.getSectionHeight((data) => {
                            this.list.ref.scrollTo({
                                x: 0,
                                y: data[index],
                                animate: false
                            });
                        });
                    }}/>
            </View>
        )
    }

    onclick = (tag) =>{

    }


}
