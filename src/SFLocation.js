/**
 * Created by HZY on 2018/3/23.
 */

import React, {Component} from 'react';
import {
    Platform,
} from 'react-native';
import EleRNLocation from 'ele-react-native-location';

export default class SFLocation extends Component {

    /**
     *  TODO: 开启定位
     *  @params:  null
     *  @return:  callback
     **/
    static startLoactions = (callback) =>{
        this.listener = EleRNLocation.addEventListener((data) => {
            if (data.errorCode != null) {
                callback('error')
            }
            else {
                callback(data);
            }
        });
        var options;
        if (Platform.OS == 'ios') {
            /**
             *  TODO: IOS
             *  @params:  null
             *  @return:  callback
             */
            options =  {
                // kCLLocationAccuracyBest,
                // kCLLocationAccuracyNearestTenMeters,
                // kCLLocationAccuracyKilometer,
                // kCLLocationAccuracyThreeKilometers,
                accuracy: 'kCLLocationAccuracyHundredMeters',
                // 是否只定位一次,
                onceLocation: false,
                //指定定位是否会被系统自动暂停。默认为YES
                pausesLocationUpdatesAutomatically: true,
                //是否允许后台定位
                allowsBackgroundLocationUpdates:false,
                //连续定位是否返回逆地理信息，默认NO
                locatingWithReGeocode: false,
                //指定单次定位超时时间,默认为10s。最小值是2s。注意单次定位请求前设置
                locationTimeout: 10,
                //指定单次定位逆地理超时时间,默认为5s。最小值是2s。注意单次定位请求前设置
                reGeocodeTimeout: 5,
                distanceFilter: 'kCLDistanceFilterNone'//设定定位的最小更新距离。默认为 kCLDistanceFilterNone
            }
        }
        else {
            /**
             *  TODO: Android
             *  @params:  null
             *  @return:  callback
             */
            options =  {
                accuracy: 'HighAccuracy',
                needAddress: true, // 设置是否返回地址信息
                onceLocation: false, // 是否只定位一次
                onceLocationLatest: false,//获取最近3s内精度最高的一次定位结果
                wifiActiveScan: true, // 设置是否强制刷新WIFI，默认为强制刷新,模式为仅设备模式(Device_Sensors)时无效
                mockEnable: false, // 设置是否允许模拟位置,默认为false，不允许模拟位置,模式为低功耗模式(Battery_Saving)时无效
                interval: 2000, // 设置定位间隔,单位毫秒,默认为2000ms
                httpTimeOut: 30000, // 设置联网超时时间(ms), 模式为仅设备模式(Device_Sensors)时无效,默认30000毫秒，建议超时时间不要低于8000毫秒,
                protocol:'http', //用于设定网络定位时所采用的协议，提供http/https两种协议,默认值http
                locationCacheEnable: false //true表示使用定位缓存策略；false表示不使用。默认是false
            }
        }
        EleRNLocation.startLocation(options);
    }


    /**
     *  TODO: 关闭定位
     *  @params:  null
     *  @return:  callback
     */
    static stopLocations = () =>{
        EleRNLocation.stopLocation();
    }

    /**
     *  TODO: 销毁定位
     *  @params:  null
     *  @return:  callback
     */
    static  destoryLocations = () =>{
        EleRNLocation.destroyLocation();
    }




}