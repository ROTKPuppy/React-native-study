/**
 * Created by ZJZombie on 2017/6/23.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class Detail extends Component {

    static navigationOptions = {
        title: '详情',
    };

    render() {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.goBack()
                    }}
                >
                    <Text>详情</Text>
                </TouchableOpacity>
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
