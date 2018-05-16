# react-native-sf-location-v

# 定位与选择位置视图

# 安装
> npm i react-native-sf-location-v  

> npm install ele-react-native-location --save  

> react-native link 

#android
* android/setting.gradle
> include ':ele-react-native-location' project(':ele-react-native-location').projectDir = new File(rootProject.projectDir, '../node_modules/ele-react-native-location/android')  
* android/app/build.gradle  
> compile project(":ele-react-native-location")  
* MainApplication.java  
```
@Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          ...,
          new AMapLocationReactPackage() // Add this line
      );
    }
```  
* AndroidManifest.xml  
```
<!--用于进行网络定位-->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"></uses-permission>
    <!--用于访问GPS定位-->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"></uses-permission>
    <!--获取运营商信息，用于支持提供运营商信息相关的接口-->
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"></uses-permission>
    <!--用于访问wifi网络信息，wifi信息会用于进行网络定位-->
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"></uses-permission>
    <!--这个权限用于获取wifi的获取权限，wifi信息会用来进行网络定位-->
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE"></uses-permission>
    <!--用于访问网络，网络定位需要上网-->
    <uses-permission android:name="android.permission.INTERNET"></uses-permission>
    <!--用于读取手机当前的状态-->
    <uses-permission android:name="android.permission.READ_PHONE_STATE"></uses-permission>
    <!--写入扩展存储，向扩展卡写入数据，用于写入缓存定位数据-->
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"></uses-permission>
    <uses-permission android:name="android.permission.INTERNET" />
```

```
<!--高德地图SDK key设置-->
    <meta-data
        android:name="com.amap.api.v2.apikey"
        android:value="请填写您的key"/>
    <!--高德地图APS服务设置-->
<service android:name="com.amap.api.location.APSService" ></service>

```
* ios   

link后 将amap 2个framework拽入target 
infoplist开启定位服务  
持续后台定位请将 backgroud modes开启

```
import EleRNLocation from 'ele-react-native-location';

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  //key 绑定 bundleid 要不获取不到地理位置
  [AMapServices sharedServices].apiKey = @"请填写您的key";
    ...
}
```


# 使用
```
import {SFSelectLocation,SFLocation} from 'react-native-sf-locations';

定位: 
SFLocation.startLoactions((data) =>{
     ...
}) //开始定位
SFLocation.stopLocations() //停止定位
SFLocation.destoryLocations() //销毁定位

//视图
render() {  
     return(
         <SFSelectLocation style={{width:400,height:400}}/>
     )
}

```

