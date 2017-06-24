/**
 * Created by ZJZombie on 2017/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class More extends Component {

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
    }
});
