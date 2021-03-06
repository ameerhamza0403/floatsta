import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Block, Text, theme} from 'galio-framework';

import Icon from './Icon';
import materialTheme from '../constants/Theme';
import mytheme from '../constants/Theme'

class DrawerItem extends React.Component {
  renderIcon = () => {
    const {title, focused} = this.props;

    switch (title) {
      case 'Dashboard':
        return (
          <Icon
            size={16}
            name="dashboard"
            family="MaterialIcons"
            color={focused ? mytheme.COLORS.FUELSTATUS : materialTheme.COLORS.MUTED}
          />
        );
    
      default:
        return null;
    }
  };

  render() {
    const {focused, title, navigation} = this.props;
    return (
      <TouchableOpacity
        style={{height: 55}}
        onPress={() => {
          navigation.navigate(title[1]);
        }}>
        <Block
          flex
          row
          style={[
            styles.defaultStyle,
            focused ? [styles.activeStyle, styles.shadow] : null,
          ]}>
          {/* <Block middle flex={0.1} style={{marginRight: 28}}>
            {this.renderIcon()}
          </Block> */}
          <Block row center flex={0.9}>
            <Text size={18} color={focused ? 'white' : 'black'}>
              {title[0]}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

export default DrawerItem;

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: mytheme.COLORS.SEADARK,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
});
