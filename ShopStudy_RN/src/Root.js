/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';

//  导入系统及第三方组件
// import TabNavigator from 'react-native-tab-navigator' 废弃，使用官方推荐react navigation
import { StackNavigator, TabNavigator } from 'react-navigation'

//  自定义组件
import Home from './Compoment/Home/Home'
import Shop from './Compoment/Shop/Shop'
import Mine from './Compoment/Mine/Mine'
import More from './Compoment/More/More'

const Tab = TabNavigator ({
   Home: {
       screen: Home,
   },

    Shop: {
        screen: Shop
    },

    Mine: {
        screen: Mine
    },

    More: {
        screen: More
    }

}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#0F9C00', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});

const Navigator = StackNavigator ({

    Tab:{
        screen: Tab
    },

});

export default Navigator;