import React, {Component} from 'react';
import {
  Dimensions,
  Platform,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Alert,
  ImageBackground,
  SafeAreaView,
  View,
  TextInput,
  Modal,
} from 'react-native';

import {Block, Text, Button, Radio} from 'galio-framework';
const {width, height} = Dimensions.get('screen');
const OS = Platform.OS == 'ios' ? true : false;
import Icon from '../../Component/Icon';
import theme from '../../constants/Theme';
import themeStyle from '../../Theme/mystyle';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../Component/Loader';
import {DatePicker, Switch, Col, Row, Grid, Picker} from 'native-base';
import Theme from '../../constants/Theme';
import {Header} from '../../Component';
import AsyncStorage from '@react-native-community/async-storage';
import time from './time';
import {randomId} from '../../constants/variables';

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: '',
      drive: '',
      intent: {
        fishing: true,
        scuba: false,
        ski: false,
        pleasure: false,
        cruising: false,
        parasail: false,
      },
      depStartTimes: '',
      depEndTime: '',
      retStartTimes: '',
      retEndTime: '',
      startDate: '',
      endDate: '',
      vacancy: '',
      equipment: {
        tackle: false,
        bait: false,
        mask: false,
        wetsuit: false,
        tank: false,
        skis: false,
        wakeboard: false,
        inflatable: false,
      },
      food: {
        breakfast: false,
        lunch: false,
        dinner: false,
        water: false,
        softdrink: false,
      },
      isLoading: false,
    };
  }

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getDate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  getDate = async () => {
    this.setState({
      isLoading: true,
    });
    // let brandarr = [];
    // CarsData.map((e) => {
    //   brandarr.push(e.brand);
    // });
    // console.log(brandarr);
    // this.setState({
    //   brands: brandarr,
    // });

    // let gasArr = [];
    // const data = await firestore().collection('Gas').get();
    // data.forEach((e) => {
    //   gasArr.push(e.data());
    // });
    // console.log(gasArr);
    this.setState({
      // fuelList: gasArr,
      isLoading: false,
    });
  };

  render() {
    return (
      <React.Fragment>
        <SafeAreaView>
          <StatusBar
            backgroundColor={Theme.COLORS.SEADARK}
            barStyle="light-content"
          />
          <Header hideBack />
          {this.state.isLoading && <Loading />}
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 5,
              fontWeight: 'bold',
            }}>
            {'Ride Details'.toUpperCase()}
          </Text>
          <ScrollView>
            <View
              style={{
                // paddingHorizontal: 30,
                paddingVertical: 10,
                marginBottom: width / 2,
              }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    height: 50,
                  }}>
                  <Picker
                    selectedValue={this.state.length}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select Length"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) => {
                      this.setState({length: itemValue});
                    }}>
                    <Picker.Item label="Length" value="Length" />
                    {[
                      1,
                      2,
                      3,
                      4,
                      5,
                      6,
                      7,
                      8,
                      9,
                      10,
                      11,
                      12,
                      13,
                      14,
                      15,
                      16,
                      17,
                      18,
                      19,
                      20,
                    ].map((e) => (
                      <Picker.Item label={`${e}ft`} value={`${e}ft`} />
                    ))}
                  </Picker>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    height: 50,
                  }}>
                  <Picker
                    selectedValue={this.state.drive}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select Drive"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({drive: itemValue})
                    }>
                    <Picker.Item label="Drive" value="Drive" />
                    {['Sail', 'Power', 'Unpowered'].map((e) => (
                      <Picker.Item label={e} value={e} />
                    ))}
                  </Picker>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    height: 50,
                  }}>
                  <Picker
                    selectedValue={this.state.vacancy}
                    style={{
                      height: 50,
                      width: width / 1.2,
                    }}
                    placeholder="Select Vacancies"
                    mode={'dialog'}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({vacancy: itemValue})
                    }>
                    <Picker.Item label="Vacancy" value="Vacancy" />
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
                      (e) => (
                        <Picker.Item label={`${e}`} value={`${e}`} />
                      ),
                    )}
                  </Picker>
                </View>
                <View
                  style={{
                    // borderWidth: 0.5,
                    // borderColor: 'gray',
                    // borderRadius: 5,
                    // height: width,
                    width: width / 1.2,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 12, color: 'gray'}}>
                    Intent of Trip
                  </Text>
                  {[
                    'fishing',
                    'scuba',
                    'ski',
                    'pleasure',
                    'cruising',
                    'parasail',
                  ].map((e) => (
                    <TouchableOpacity
                      onPress={() => {
                        let data = this.state.intent;
                        data[e] = !data[e];
                        this.setState({
                          intent: data,
                        });
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 3,
                          padding: 5,
                          paddingVertical: 10,
                          backgroundColor: this.state.intent[e]
                            ? theme.COLORS.SEALIGHT
                            : 'white',
                          borderColor: 'gray',
                          borderWidth: 0.4,
                          borderRadius: 5,
                        }}>
                        <View style={{flex: 1}}>
                          <Text>{e.toUpperCase()}</Text>
                        </View>
                        <View style={{flex: 0.1}}>
                          {this.state.intent[e] && (
                            <Icon
                              color="green"
                              size={20}
                              name="checkcircle"
                              family="AntDesign"
                            />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
                <View
                  style={{
                    // borderWidth: 0.5,
                    // borderColor: 'gray',
                    // borderRadius: 5,
                    // height: width,
                    width: width / 1.2,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 12, color: 'gray'}}>
                    Equipment Supplied
                  </Text>
                  {[
                    'tackle',
                    'bait',
                    'mask',
                    'wetsuit',
                    'tank',
                    'skis',
                    'wakeboard',
                    'inflatable',
                  ].map((e) => (
                    <TouchableOpacity
                      onPress={() => {
                        let data = this.state.equipment;
                        data[e] = !data[e];
                        this.setState({
                          equipment: data,
                        });
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginVertical: 3,
                          padding: 5,
                          paddingVertical: 10,
                          backgroundColor: this.state.equipment[e]
                            ? theme.COLORS.SEALIGHT
                            : 'white',
                          borderColor: 'gray',
                          borderWidth: 0.4,
                          borderRadius: 5,
                        }}>
                        <View style={{flex: 1}}>
                          <Text>{e.toUpperCase()}</Text>
                        </View>
                        <View style={{flex: 0.1}}>
                          {this.state.equipment[e] && (
                            <Icon
                              color="green"
                              size={20}
                              name="checkcircle"
                              family="AntDesign"
                            />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
                <View
                  style={{
                    // borderWidth: 0.5,
                    // borderColor: 'gray',
                    // borderRadius: 5,
                    // height: width,
                    width: width / 1.2,
                    paddingHorizontal: 10,
                    marginVertical: 10,
                  }}>
                  <Text
                    style={{fontWeight: 'bold', fontSize: 12, color: 'gray'}}>
                    Food
                  </Text>
                  {['breakfast', 'lunch', 'dinner', 'water', 'softdrink'].map(
                    (e) => (
                      <TouchableOpacity
                        onPress={() => {
                          let data = this.state.food;
                          data[e] = !data[e];
                          this.setState({
                            food: data,
                          });
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            marginVertical: 3,
                            padding: 5,
                            paddingVertical: 10,
                            backgroundColor: this.state.food[e]
                              ? theme.COLORS.SEALIGHT
                              : 'white',
                            borderColor: 'gray',
                            borderWidth: 0.4,
                            borderRadius: 5,
                          }}>
                          <View style={{flex: 1}}>
                            <Text>{e.toUpperCase()}</Text>
                          </View>
                          <View
                            style={{
                              flex: 0.1,
                            }}>
                            {this.state.food[e] && (
                              <Icon
                                color="green"
                                size={20}
                                name="checkcircle"
                                family="AntDesign"
                              />
                            )}
                          </View>
                        </View>
                      </TouchableOpacity>
                    ),
                  )}
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    width: width / 1.2,
                    height: 50,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date()}
                    //   maximumDate={new Date(2018, 12, 31)}
                    locale={'en'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'calendar'}
                    placeHolderText={`Select Start date: ${this.state.startDate}`}
                    placeholderTextColor={Theme.COLORS.FUELBLUE}
                    //   textStyle={{color: 'green'}}
                    //   placeHolderTextStyle={{color: '#d3d3d3'}}
                    onDateChange={(text) => {
                      this.setState({
                        startDate: text,
                      });
                    }}
                    disabled={false}
                  />
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    width: width / 1.2,
                    height: 50,
                    borderWidth: 1,
                    borderColor: 'lightgray',
                    borderRadius: 15,
                    backgroundColor: 'white',
                    marginBottom: 10,
                    paddingHorizontal: 10,
                  }}>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date()}
                    //   maximumDate={new Date(2018, 12, 31)}
                    locale={'en'}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={'fade'}
                    androidMode={'calendar'}
                    placeHolderText={`Select Start date: ${this.state.endDate}`}
                    placeholderTextColor={Theme.COLORS.FUELBLUE}
                    //   textStyle={{color: 'green'}}
                    //   placeHolderTextStyle={{color: '#d3d3d3'}}
                    onDateChange={(text) => {
                      this.setState({
                        endDate: text,
                      });
                    }}
                    disabled={false}
                  />
                </View>
                <Text style={{paddingVertical: 5}}>
                  {'Departure Time'.toUpperCase()}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    width: width / 1.2,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      borderRadius: 15,
                      backgroundColor: 'white',
                      marginBottom: 10,
                    }}>
                    <Picker
                      selectedValue={this.state.depStartTimes}
                      style={{
                        height: 50,
                        width: '100%',
                      }}
                      placeholder="Select your Time"
                      mode={'dialog'}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({depStartTimes: itemValue})
                      }>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Time" value="Time" />
                      {time.map((e) => (
                        <Picker.Item label={e} value={e} />
                      ))}
                    </Picker>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        // textAlign: 'center',
                        paddingTop: 25,
                        borderBottomWidth: 1,
                        width: '60%',
                      }}></View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      borderRadius: 15,
                      backgroundColor: 'white',
                      marginBottom: 10,
                    }}>
                    <Picker
                      selectedValue={this.state.depEndTime}
                      style={{
                        height: 50,
                        width: '100%',
                      }}
                      placeholder="Select your Time"
                      mode={'dialog'}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({depEndTime: itemValue})
                      }>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Time" value="Time" />
                      {time.map((e) => (
                        <Picker.Item label={e} value={e} />
                      ))}
                    </Picker>
                  </View>
                </View>

                <Text style={{paddingVertical: 5}}>
                  {'Return Time'.toUpperCase()}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    width: width / 1.2,
                  }}>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      borderRadius: 15,
                      backgroundColor: 'white',
                      marginBottom: 10,
                    }}>
                    <Picker
                      selectedValue={this.state.retStartTimes}
                      style={{
                        height: 50,
                        width: '100%',
                      }}
                      placeholder="Select your Time"
                      mode={'dialog'}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({retStartTimes: itemValue})
                      }>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Time" value="Time" />
                      {time.map((e) => (
                        <Picker.Item label={e} value={e} />
                      ))}
                    </Picker>
                  </View>
                  <View
                    style={{
                      flex: 0.2,
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        // textAlign: 'center',
                        paddingTop: 25,
                        borderBottomWidth: 1,
                        width: '60%',
                      }}></View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      borderColor: 'lightgray',
                      borderRadius: 15,
                      backgroundColor: 'white',
                      marginBottom: 10,
                    }}>
                    <Picker
                      selectedValue={this.state.retEndTime}
                      style={{
                        height: 50,
                        width: '100%',
                      }}
                      placeholder="Select your Time"
                      mode={'dialog'}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({retEndTime: itemValue})
                      }>
                      <Picker.Item label="" value="" />
                      <Picker.Item label="Time" value="Time" />
                      {time.map((e) => (
                        <Picker.Item label={e} value={e} />
                      ))}
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              //   top: 0,
              bottom: 88,
              left: 0,
              right: 0,
              zIndex: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Theme.COLORS.SEADARK,
              height: 50,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  borderEndWidth: 2,
                  borderEndColor: 'white',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      width: '100%',
                      paddingVertical: 10,
                      //   backgroundColor: 'yellow'
                      //   height: '100%',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={async () => {
                    try {
                      let data = JSON.parse(
                        await AsyncStorage.getItem('@order_details'),
                      );
                      let user = JSON.parse(
                        await AsyncStorage.getItem('@user_info'),
                      );
                      let intent = [];
                      for (const key in this.state.intent) {
                        if (this.state.intent[key]) {
                          intent.push(key);
                        }
                      }
                      let equipment = [];
                      for (const key in this.state.equipment) {
                        if (this.state.equipment[key]) {
                          equipment.push(key);
                        }
                      }
                      let food = [];
                      for (const key in this.state.food) {
                        if (this.state.food[key]) {
                          food.push(key);
                        }
                      }
                      let random = randomId();
                      if (this.state.endDate.length == 0)
                        this.setState({endDate: new Date()});
                      if (this.state.depEndTime.length == 0)
                        this.setState({depEndTime: new Date()});
                      if (this.state.retEndTime.length == 0)
                        this.setState({retEndTime: new Date()});
                      if (this.state.startDate.length == 0)
                        this.setState({startDate: new Date()});
                      if (this.state.depStartTimes.length == 0)
                        this.setState({depStartTimes: new Date()});
                      if (this.state.retStartTimes.length == 0)
                        this.setState({retStartTimes: new Date()});

                      await firestore()
                        .collection('trips')
                        .doc(random)
                        .set({
                          cost: '0',
                          date: new Date(),
                          drive: this.state.drive,
                          email: user.email,
                          equipment: equipment,
                          food: food,
                          id: random,
                          intent: intent,
                          length: this.state.length,
                          location: data.FormattedAddress.format,
                          name: user.name,
                          operator: {
                            id: '',
                            name: '',
                          },
                          paidThru: '',
                          phone: user.phone,
                          selectedEndDate: this.state.endDate,
                          selectedEndDepTime: this.state.depEndTime,
                          selectedEndRetTime: this.state.retEndTime,
                          selectedStartDate: this.state.startDate,
                          selectedStartDepTime: this.state.depStartTimes,
                          selectedStartRetTime: this.state.retStartTimes,
                          status: 'pending',
                          userId: user.id,
                          vacancy: this.state.vacancy,
                        });
                      this.props.navigation.navigate('HistoryScreen');
                    } catch (err) {}
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                      paddingVertical: 10,
                      width: '100%',
                    }}>
                    Book Ride
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
