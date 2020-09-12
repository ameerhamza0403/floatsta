import React, {Component} from 'react';
import {Text, View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'gray',
            paddingVertical: 5,
            fontStyle: 'italic',
            fontSize: 20,
            textAlign: this.props.center? 'center': 'left'
          }}>
          {this.props.children}
        </Text>
      </React.Fragment>
    );
  }
}
