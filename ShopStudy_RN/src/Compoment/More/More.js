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

export default class More extends Component {

    static navigationOptions = {
        title: '更多',
        tabBarLabel: '更多',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={{uri: 'icon_tabbar_misc'}}
                style={styles.iconStyle}
            />
        )
    };

    render() {
        return(
            <View style={styles.container}>
                <Text>更多</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    iconStyle: {
        width: 22,
        height: 22
    }
});
