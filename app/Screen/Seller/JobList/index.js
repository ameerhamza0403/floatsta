import React, {Component} from 'react';
import {Text, View, Dimensions, StatusBar, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Theme from '../../../constants/Theme';
import {Header} from '../../../Component';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Grid, Col} from 'native-base';
import {Icon} from 'galio-framework';
import firestore from '@react-native-firebase/firestore';
import LoadingComponent from '../../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('screen');

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      orderData: [],
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
    const user = JSON.parse(await AsyncStorage.getItem('@user_info'));
    const data = await firestore()
      .collection('trips')
      .where('status', '==', 'pending')
      // .orderBy('date')
      .get();
    let arr = [];
    data.forEach((e) => {
      arr.push(e.data());
    });
    console.log(arr);
    this.setState({
      orderData: arr,
      isLoading: false,
    });
  };
  render() {
    return (
      <SafeAreaView>
        <StatusBar
          backgroundColor={Theme.COLORS.SEADARK}
          barStyle="light-content"
        />
        <Header />
        {this.state.isLoading && <LoadingComponent />}
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          {'Jobs'.toUpperCase()}
        </Text>
        <ScrollView>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 30,
              marginBottom: width / 2,
            }}>
            {this.state.orderData.map((e) => (
              <Grid
                style={{
                  backgroundColor: 'lightgray',
                  borderRadius: 10,
                //   borderWidth: 0.1,
                  height: width / 3,
                  elevation: 5,
                  marginVertical: 5,
                }}>
                <Col style={{width: '86%', padding: 10}}>
                  <TouchableOpacity
                    onPress={async () => {
                      let data=e
                      data.startDate=e.selectedStartDate.toDate()
                      data.retDate = e.selectedEndDate.toDate()
                      await AsyncStorage.setItem('@selected_order', JSON.stringify(data));
                      this.props.navigation.navigate('JobDetailScreen');
                    }}>
                    <React.Fragment>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#918f8f',
                          fontSize: 18,
                        }}>
                        {`${e.intent[0].toUpperCase() || 'No Detail'}`}
                      </Text>

                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: Theme.COLORS.FUELORANGE,
                        }}>
                        {e.status}
                      </Text>

                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'gray',
                        }}>
                        {' '}
                        <Icon
                          family="Entypo"
                          name="wallet"
                          color="gray"
                          size={14}
                        />
                        {'  '}
                        Price : ${JSON.parse(e.cost)}
                      </Text>
                      <Text style={{color: 'gray', fontSize: 13}}>
                        <Icon
                          family="Entypo"
                          color="gray"
                          size={20}
                          name="location-pin"
                        />{' '}
                        {`${e.location}`.slice(
                          0,
                          32,
                        )}
                        ...
                      </Text>
                      <Text
                        style={{
                          fontSize: 10,
                          fontWeight: 'bold',
                          color: 'gray',
                        }}>
                        {''}{' '}
                        <Icon
                          family="AntDesign"
                          name="clockcircle"
                          color="gray"
                          size={14}
                        />
                        {`     ${JSON.stringify(e.selectedStartDate.toDate()).split('T')[0]}"`}
                      </Text>
                    </React.Fragment>
                  </TouchableOpacity>
                </Col>
                <Col style={{width: '14%', padding: 5}}>
                  {e.status == 'pending' && (
                    <TouchableOpacity
                      onPress={() => {
                        Alert.alert(
                          'Are you Sure?',
                          "By Clicking 'YES' the order will be cancelled and the amount will be transfered back to you depending upon the return policy",
                          [
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {
                              text: 'OK',
                              onPress: async () => {
                                firestore()
                                  .collection('trips')
                                  .doc(e.id)
                                  .update({
                                    status: 'cancelled',
                                  });
                                this.getDate();
                              },
                            },
                          ],
                          {cancelable: false},
                        );
                      }}>
                      <Icon
                        name="delete"
                        family="AntDesign"
                        size={34}
                        color="gray"
                      />
                    </TouchableOpacity>
                  )}
                </Col>
              </Grid>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
