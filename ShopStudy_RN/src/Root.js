/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
} from 'react-native';

//  导入系统及第三方组件
import TabNavigator from 'react-native-tab-navigator'

//  自定义组件
import Home from './Compoment/Home/Home'
import Shop from './Compoment/Shop/Shop'
import Mine from './Compoment/Mine/Mine'
import More from './Compoment/More/More'

export default class ShopStudy_RN extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        return (

            <TabNavigator>

                {/* 首页 */}
                <TabNavigator.Item
                    title='首页'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_homepage'}} style={styles.image}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_homepage_selected'}} style={styles.image}/>}
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => this.setState({selectedTab: 'home'})}
                >
                    <Home/>
                </TabNavigator.Item>

                {/* 商品 */}
                <TabNavigator.Item
                    title='商品'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_merchant_normal'}} style={styles.image}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_merchant_selected'}} style={styles.image}/>}
                    selected={this.state.selectedTab === 'shop'}
                    onPress={() => this.setState({selectedTab: 'shop'})}
                >
                    <Shop/>
                </TabNavigator.Item>

                {/* 我的 */}
                <TabNavigator.Item
                    title='我的'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_mine'}} style={styles.image}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_mine_selected'}} style={styles.image}/>}
                    selected={this.state.selectedTab === 'mine'}
                    onPress={() => this.setState({selectedTab: 'mine'})}
                >
                    <Mine/>
                </TabNavigator.Item>

                {/* 更多 */}
                <TabNavigator.Item
                    title='More'
                    renderIcon={() => <Image source={{uri: 'icon_tabbar_misc'}} style={styles.image}/>}
                    renderSelectedIcon={() => <Image source={{uri: 'icon_tabbar_misc_selected'}} style={styles.image}/>}
                    selected={this.state.selectedTab === 'more'}
                    onPress={() => this.setState({selectedTab: 'more'})}
                >
                    <More/>
                </TabNavigator.Item>

            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: 22,
        height: 22
    }
});
