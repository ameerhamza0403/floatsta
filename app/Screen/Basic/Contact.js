import React, {Component} from 'react';
import {Text, View, Dimensions, StatusBar, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../Component';
import Theme from '../../constants/Theme';
const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView>
        <Header />
        <StatusBar
          backgroundColor={Theme.COLORS.SEADARK}
          barStyle="light-content"
        />
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          {'contact US'.toUpperCase()}
        </Text>
        <ScrollView>
          <Text
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
              textAlign: 'center',
              fontSize: 20,
            }}>
            Contact FLOATSTA at Legal@floatsta.com
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingVertical: 30,
              textAlign: 'center',
              fontSize: 20,
            }}>
            Address
          </Text>
          <Text>
            Privacy Officer Floatsta, .com. 10 Eagle Street Level 19 Brisbane
            Queensland 4000
          </Text>
          <Text
            style={{
              paddingVertical: 30,
              paddingHorizontal: 20,
              textAlign: 'center',
              fontSize: 20,
            }}>
            Copyright ©️ 2020 FLOATSTA, LLC. All Rights Reserved.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
