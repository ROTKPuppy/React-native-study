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

export default class Shop extends Component {

    static navigationOptions = {
        title: '商品',
        tabBarLabel: '商品',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'icon_tabbar_merchant_normal'}}
                style={styles.iconStyle}
            />
        )
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>商品</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    iconStyle: {
        width: 22,
        height: 22
    }
});
