/**
 * Created by SF on 2018/3/28.
 */

import React, {Component} from 'react';
import {
    ListView,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import LocationFlatList from "./LocationFlatList";
import LocationUI from "./LocationUI";
const {width, height} = Dimensions.get('window');

export default class LocationList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        })
        this.state = {
            dataSource: ds,
            showCounty: false,
            headerH:0,
        }
    }

    render() {
        return (
            <ListView
                ref={(ref) => this.ref = ref}
                renderHeader={this._renderHeader}
                showsVerticalScrollIndicator={false}
                renderSectionHeader={this.renderSectionHeader}
                initialListSize={600}
                dataSource={this.state.dataSource.cloneWithRowsAndSections(this.props.data)}
                renderRow={this._renderRow}/>
        )
    }

    click = () => {
        this.setState({
            showCounty: !this.state.showCounty,
        })
    }

    _renderHeader = () => {
        return (
            <View style={{flex: 1}}
                  onLayout={(e) =>{
                      this.setState({
                          headerH: e.nativeEvent.layout.height,
                      })
                  }}>
                <View style={{
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.click}>
                        <View style={{
                            width: width,
                            height: 40,
                            backgroundColor: 'white',
                            justifyContent: 'center'
                        }}>
                            <Text
                                style={{
                                    marginLeft: 8,
                                    color: 'rgba(69,69,69,1)'
                                }}>{'当前:'}</Text>

                        </View>
                    </TouchableOpacity>
                </View>
                {this.selectCounty()}
                <LocationUI/>
            </View>
        )
    }


    selectCounty = () => {
        if (this.state.showCounty) {
            return (
              <LocationFlatList/>
            )
        }
        else {
            return null;
        }
    }


    getSectionHeight = (callback) => {
        const {data} = this.props;
        var heightArr = [this.state.headerH];
        var h = this.state.headerH;
        for (var key in data) {
            h =  h + (data[key].length + 1) * 30;
            heightArr.push(h);
        }
        callback(heightArr);
    }


    _renderRow = (rowData, sectionID, rowID,) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.clickItem.bind(this, rowData.code)}>
                <View style={{
                    backgroundColor: 'white',
                    width: width,
                    height: 30,
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        marginLeft: 8,
                        fontSize: 15,
                        color: 'rgba(69,69,69,1)'
                    }}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem = (tag) => {
        if (this.props.onclick) {
            this.props.onclick(tag);
        }
    }

    renderSectionHeader = (sectionData, sectionID) => {
        return (
            <View style={{
                width: width,
                height: 30,
                backgroundColor: 'rgba(243,243,243,1)',
            }}>
                <Text style={{
                    fontSize: 14,
                    color: 'rgba(169,169,169,1)',
                    marginLeft: 8,
                    marginTop: 8,
                }}>{sectionID}</Text>
            </View>
        )
    }

}