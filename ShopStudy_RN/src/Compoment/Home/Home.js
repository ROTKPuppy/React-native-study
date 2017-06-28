/**
 * Created by ZJZombie on 2017/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Button,
} from 'react-native';

let screen_width = Dimensions.get('window').width;
let screen_height = Dimensions.get('window').height;

export default class Home extends Component {

    static navigationOptions = {
        // title: '首页',
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'icon_tabbar_homepage'}}
                style={styles.iconStyle}
            />
        ),
        header: null,
    };

    render() {

        return(

            <View style={styles.container}>

                { /* 自定义StatusBar */ }
                {this.renderStatusBar()}

                { /* 自定义NavigationBar */ }
                {this.renderNavigationBar()}

                <Text>首页</Text>
            </View>
        )
    }

    renderStatusBar() {
        return(
            <View
                style={styles.statusBarStyle}
            />
        )
    }

     renderNavigationBar() {
        return(
            <View style={styles.navBarStyle}>

                {/* 左侧地址 */}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
                    <Text style={{color: '#fff'}}>北京</Text>
                </TouchableOpacity>

                {/* 中间搜索栏 */}
                <TextInput
                    placeholder={'输入上架，品类，商圈'}
                    style={styles.topInputStyle}
                />

                {/* 右侧功能按钮 */}
                <View style={styles.rightNavViewStyle}>
                    <TouchableOpacity onPress={this._pressShowAlert}>
                    <Image source={{uri: 'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._pressShowAlert}>
                    <Image source={{uri: 'icon_homepage_scan'}} style={styles.navRightImageStyle}/>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    _pressShowAlert() {
        alert('点击了')
    }
}

const styles = StyleSheet.create({

    statusBarStyle: {
        backgroundColor: '#ff892d',
        height: 20,
        width: screen_width
    },

    navBarStyle: {
        height: 44,
        backgroundColor: '#ff892d',

        // 配置主轴方向
        flexDirection: 'row',

        // 侧轴对齐方式
        alignItems: 'center',

        // 设置主轴的对齐方式
        justifyContent: 'space-around'
    },

    container: {
        flex: 1,
        backgroundColor: '#e8e8e8'
    },

    iconStyle: {
        width: 22,
        height: 22
    },

    topInputStyle: {
        width: screen_width * 0.6,
        height: 35,
        backgroundColor: '#fff',
        marginTop: 4,

        // 设置圆角
        borderRadius: 17.5,

        // 输入框内左侧边距
        paddingLeft: 10,
    },

    navRightImageStyle: {
        width: 30,
        height: 30
    },

    rightNavViewStyle: {
        flexDirection: 'row',
        height: 44,

        // 设置侧轴对齐方式
        alignItems: 'center',
        justifyContent: 'space-around'
    },

});
