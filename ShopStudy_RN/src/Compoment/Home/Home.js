/**
 * Created by ZJZombie on 2017/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: '首页',
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'icon_tabbar_homepage'}}
                style={styles.iconStyle}
            />
        )
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    iconStyle: {
        width: 22,
        height: 22
    }
});
