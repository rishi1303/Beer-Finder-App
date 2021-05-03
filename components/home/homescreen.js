import React, { Component } from 'react'
import { Text, View , Button, StyleSheet, Image} from 'react-native'
import { Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;

var bcimage = require('../../assets/homelogo.jpg')


export default class Homescreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0}}>
                    <Image source={bcimage} style={{flex: 1, height: null, width: null}} />
                </View>
                <View style={styles.buttons}>
                <Button  title="Search Beer" onPress={() => this.props.navigation.navigate('Search')} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttons: {
        // position: 'absolute',
        // bottom: 0
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 8,
  bottom: 0,
  width: screenWidth,
  height: 70,
  fontWeight: '300',
  fontSize: 80,
}
})