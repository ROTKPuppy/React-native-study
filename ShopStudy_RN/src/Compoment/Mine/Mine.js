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

export default class Mine extends Component {

    static navigationOptions = {
        title: '我的',
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'icon_tabbar_mine'}}
                style={styles.iconStyle}
            />
        )
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>我的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    iconStyle: {
        width: 22,
        height: 22
    }
});
