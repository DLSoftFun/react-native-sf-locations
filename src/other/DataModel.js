/**
 * Created by HZY on 2018/3/29.
 */

import React, {Component} from 'react';
import {

} from 'react-native';
import cityjson from './city.json';

export default class DataModel extends Component{

    //TODO : 不包含子集数组 精简版
    static getCityData(callback) {
        const cityArray = cityjson;
        var allArray = [];
        for (var i = 0; i < cityArray.length; i++) {
            var cityDic = cityArray[i];
            allArray.push({code:cityDic.code,first:cityDic.code,name:cityDic.name});
        }
        callback(allArray);
    }

    //TODO : 获取数据
    static getListIndexs(callback) {
        const cityArray = cityjson;
        var indexsArray = [];
        for(var i = 0; i < cityArray.length; i++){
            var enName = cityArray[i].first;
            if(indexsArray.indexOf(enName) == -1){
                indexsArray.push(enName);
            }
        }
        indexsArray.sort();
        var arr = {};
        for (var j = 0; j < indexsArray.length; j++) {
            var array = [];
            for (var i = 0; i < cityArray.length; i++) {
                var dic = cityArray[i];
                if (indexsArray[j] == dic.first) {
                    array.push({code:dic.code,name:dic.name});
                }
            }
            arr[indexsArray[j]] = array;
        }
        callback(arr,indexsArray);
    }
    
}