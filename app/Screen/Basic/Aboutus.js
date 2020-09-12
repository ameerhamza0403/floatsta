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
          {'ABOUT US'.toUpperCase()}
        </Text>
        <ScrollView>
          <Text
            style={{
              paddingHorizontal: 20,
              textAlign:'center',
              fontSize: 20
            }}
          >
          Floatsta is one of the world’s largest boat sharing companies, operating in Australia, New Zealand. In Australia, Floatsta is available to Skippers in Sydney, Melbourne, Brisbane, the Gold Coast, Adelaide, Canberra and Perth. Floatsta also operates in New Zealand’s major centres, Auckland, Wellington and Christchurch.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
