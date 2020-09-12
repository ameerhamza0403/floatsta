import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Theme from '../../../constants/Theme';
import {Header} from '../../../Component';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Grid, Col} from 'native-base';
import {Icon} from 'galio-framework';
import firestore from '@react-native-firebase/firestore';
import LoadingComponent from '../../../Component/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import VesselDetails from './vesseldetail';
import Bold from '../../../Component/bold';

const {width, height} = Dimensions.get('screen');

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      vesselData: [],
      selectedVessel: null,
      modelOpen: false,
      sellerData: null,
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
    let data;
    let sellerData;
    const user = JSON.parse(await AsyncStorage.getItem('@user_info'));
    if (user.userType == 'seller') {
      data = await firestore()
        .collection('Vessel')
        .where('userId', '==', user.id)
        .get();
      sellerData = await firestore()
        .collection('Sailor')
        .where('userId', '==', user.id)
        .get();
    } else {
      const seller = JSON.parse(await AsyncStorage.getItem('@seller'));
      sellerData = await firestore()
        .collection('Sailor')
        .where('userId', '==', seller.id)
        .get();
      data = await firestore()
        .collection('Vessel')
        .where('userId', '==', seller.id)
        .get();
    }
    let arr = [];
    data.forEach((e) => {
      arr.push(e.data());
    });
    let arrSeller = [];
    sellerData.forEach((e) => {
      arrSeller.push(e.data());
    });
    console.log(arr, arrSeller);
    this.setState({
      vesselData: arr,
      isLoading: false,
      sellerData: arrSeller[0],
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
          {'Vessels & Details'.toUpperCase()}
        </Text>
        {this.state.modelOpen && (
          <VesselDetails
            open={this.state.modelOpen}
            data={this.state.selectedVessel}
            close={() =>
              this.setState({modelOpen: false, selectedVessel: null})
            }
          />
        )}
        <ScrollView>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 30,
              marginBottom: width / 2,
            }}>
            {this.state.sellerData && (
              <View style={{paddingVertical: 20}}>
                <View
                  style={{
                    width: width / 3,
                    height: width / 3,
                    borderRadius: 100,
                    alignSelf: 'center',
                    elevation: 10,
                  }}>
                  <ImageBackground
                    source={{uri: this.state.sellerData.image}}
                    style={{
                      width: '100%',
                      height: '100%',
                      overflow: 'hidden',
                      borderRadius: 90,
                    }}
                  />
                </View>
                <Bold
                  center>{`${this.state.sellerData.name}   ${this.state.sellerData.surname}`}</Bold>
                <Text
                  style={{
                    backgroundColor: 'red',
                    padding: 1,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                    width: 100,
                    color: 'white',
                  }}>
                  {`${this.state.sellerData.operatorType}`.toUpperCase()}
                </Text>
                <Text>{this.state.sellerData.about}</Text>
                <Text>{this.state.sellerData.facebook}</Text>
                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <View style={{flex: 0.2}}>
                    <Icon
                      size={25}
                      color={'gray'}
                      family="Entypo"
                      name="email"
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Theme.COLORS.SEAGREEN,
                      }}>
                      {this.state.sellerData.email}
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <View style={{flex: 0.2}}>
                    <Icon
                      size={25}
                      color={'gray'}
                      family="Entypo"
                      name="phone"
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Theme.COLORS.SEAGREEN,
                      }}>
                      {this.state.sellerData.phone}
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', paddingBottom: 10}}>
                  <View style={{flex: 0.2}}>
                    <Icon
                      size={25}
                      color={'gray'}
                      family="Entypo"
                      name="phone"
                    />
                  </View>
                  <View style={{flex: 1}}>
                    <Text
                      style={{
                        fontSize: 14,
                        color: Theme.COLORS.SEAGREEN,
                      }}>
                      {this.state.sellerData.mobile}
                    </Text>
                  </View>
                </View>

                <Bold>Blue Card</Bold>
                <Text>{`${this.state.sellerData.bluecard}`.toUpperCase()}</Text>
                <Bold>Yellow Card</Bold>
                <Text>{`${this.state.sellerData.yellowcard}`.toUpperCase()}</Text>
                <Bold>Driver Authority</Bold>
                <Text>{`${this.state.sellerData.driver}`.toUpperCase()}</Text>
                <Bold>Public Liability Insurance</Bold>
                <Text>{`${this.state.sellerData.publicLI}`.toUpperCase()}</Text>
                <Bold>Police Clearance</Bold>
                <Text>{`${this.state.sellerData.police}`.toUpperCase()}</Text>
                <Bold>Skipper Ticket Number</Bold>
                <Text>{`${this.state.sellerData.skipper}`.toUpperCase()}</Text>
              
              </View>
            )}
            {this.state.vesselData.map((e) => (
              <Grid
                style={{
                  backgroundColor: 'lightgray',
                  borderRadius: 10,
                  height: width / 3,
                  elevation: 5,
                  marginVertical: 5,
                  padding: 10,
                }}>
                <TouchableOpacity
                  onPress={async () => {
                    this.setState({
                      selectedVessel: e,
                      modelOpen: true,
                    });
                  }}>
                  <React.Fragment>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#918f8f',
                        fontSize: 18,
                      }}>
                      {`${e.registrationNumber.toUpperCase() || ''}`}
                    </Text>

                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'gray',
                      }}>
                      {''}
                      <Icon
                        family="MaterialIcons"
                        name="people"
                        color="gray"
                        size={20}
                      />
                      {` Max Passengers ${e.maxpassengers}`}
                    </Text>

                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: 'gray',
                      }}>
                      {''}
                      <Icon
                        family="Entypo"
                        name="radio"
                        color="gray"
                        size={20}
                      />{' '}
                      Marine Radio : {e.marinRadio ? 'Present' : 'No'}
                    </Text>
                    <Text style={{color: 'gray', fontSize: 13}}>
                      <Icon
                        family="MaterialIcons"
                        color="gray"
                        size={20}
                        name="directions-boat"
                      />{' '}
                      {`Number of Berths: ${e.numOfBerths}`}
                    </Text>
                  </React.Fragment>
                </TouchableOpacity>
              </Grid>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
