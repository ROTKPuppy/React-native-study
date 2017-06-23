/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

//  导入系统及第三方组件
import TabNavigator from 'react-native-tab-navigator'

//  自定义组件
import Home from './Compoment/Home/Home'
import Shop from './Compoment/Shop/Shop'
import Mine from './Compoment/Mine/Mine'
import More from './Compoment/More/More'

export default class ShopStudy_RN extends Component {
    render() {
        return (
            <View style={styles.container}>

                {/* 根据不同平台，做是配处理 */}
                {/*<Text>我是{Platform.OS === 'ios' ? 'iOS' : 'android'}</Text>*/}

                <TabNavigator>

                    {/* 首页 */}

                    {/* 商品 */}

                    {/* 我的 */}

                    {/* 更多 */}


                </TabNavigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
