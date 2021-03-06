import React from 'react';
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
  Picker,
  PermissionsAndroid,
} from 'react-native';
import {Block, Text, Input, Button, Radio} from 'galio-framework';
// import styles from './style';
const {width, height} = Dimensions.get('screen');
const OS = Platform.OS == 'ios' ? true : false;
import Icon from '../../Component/Icon';
import theme from '../../constants/Theme';
import themeStyle from '../../Theme/mystyle';
import Header from '../../Component/Header';
import Geolocation from 'react-native-geolocation-service';
// import MapViewDirections from 'react-native-maps-directions';
// import getDirections from 'react-native-google-maps-directions';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styleMap from '../../../assets/map';
import Loading from '../../Component/Loader';
import {Col, Row, Grid} from 'native-base';
import Theme from '../../constants/Theme';
import {GOOGLE_API_KEY} from '../../constants/variables';
import AsyncStorage from '@react-native-community/async-storage';
// import ImputOrder from '../InputDetails/imputDetail'

export default class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modelOpen: false,
      isLoading: false,
      predictions: [],
      showPredictions: false,
      selectedPrediction: {},
      search: '',
      currentLatitude: '31.658730',
      currentLongitude: '74.336665',
      selectedLatitude: '',
      selectedLongitude: '',
    };
  }

  componentDidMount() {
    this.getPermission();
  }

  shouldComponentUpdate(nexProps, nextState) {
    if (
      nextState.selectedLatitude != this.state.selectedLatitude ||
      nextState.selectedLongitude != this.state.selectedLongitude
    ) {
      return false;
    } else {
      return true;
    }
  }

  getPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        this.getLocation();
      } else {
        Alert.alert(
          'Permission Denied',
          'Please give location permission to use application.',
        );
      }
    } catch (err) {
      Alert.alert('An unknown location Error Occured');
    }
  };

  getLocation = () => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude = position.coords.longitude;
        //getting the Longitude from the location json
        const currentLatitude = position.coords.latitude;
        //getting the Latitude from the location json
        this.setState({
          currentLongitude: JSON.stringify(currentLongitude),
          currentLatitude: JSON.stringify(currentLatitude),
        });
      },
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          backgroundColor={theme.COLORS.SEADARK}
          barStyle="light-content"
        />
        <Header hideBack />
        {this.state.isLoading && <Loading />}

        <ScrollView
          style={{
            backgroundColor: theme.COLORS.FUELCOLOR,
          }}>
          <View
            // pointerEvents="none"
            style={{
              position: 'absolute',
              top: 0,
              bottom: height / 1.3,
              left: 0,
              right: 0,
              zIndex: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <TextInput
              onChangeText={async (text) => {
                this.setState({search: text});
               const data = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${GOOGLE_API_KEY}`)
               data.json().then(e=>{
                 this.setState({
                   predictions: e.predictions,
                   showPredictions: true,
                 })
               })
              }}
              value={this.state.search}
              placeholderTextColor={theme.COLORS.SEALIGHT}
              placeholder="Search Location"
              style={{
                height: 50,
                width: width / 1.2,
                backgroundColor: 'white',
                // color: Theme.COLORS.FUELBLUE,
                color: 'black',
                borderWidth: 0.5,
                // borderRadius: 5,
                borderColor: Theme.COLORS.FUELBLUE,
                textAlign: 'center',
                paddingHorizontal: 20,
                fontSize: 18,
              }}
            />
          </View>
          {this.state.showPredictions && <View
            // pointerEvents="none"
            style={{
              position: 'absolute',
              top: 55,
              // bottom: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <ScrollView>
              {this.state.predictions.map(e=><TouchableOpacity
                onPress={async()=>{
                  this.setState({
                    showPredictions: false,
                    selectedPrediction: e,
                    search: e.description
                  })
                  const raw = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${e.place_id}&key=${GOOGLE_API_KEY}`)
                  raw.json().then(f=>{
                    this.setState({
                      currentLatitude: f.results[0].geometry.location.lat,
                      currentLongitude: f.results[0].geometry.location.lng
                    })
                  })
                }}
              >
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderEndWidth: 1,
                    borderStartWidth:1,
                    borderColor: 'gray',
                    backgroundColor: 'white',
                    padding: 5,
                    width: width / 1.2,
                    height: 50,
                    justifyContent: 'center',
                  }}>
                  <Text style={{fontWeight: 'bold', color: 'gray'}}>{e.description}</Text>
                </View>
              </TouchableOpacity>)}
            </ScrollView>
          </View>}
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 95,
              left: 0,
              right: 0,
              zIndex: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            }}>
            <Icon
              family="Entypo"
              size={80}
              name="location-pin"
              color={Theme.COLORS.SEADARK}
            />
          </View>

          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width: width, height: height/1.15}}
            zoomEnabled
            showsBuildings
            showsCompass
            showsScale
            loadingEnabled
            showsMyLocationButton
            showsBuildings
            showsIndoors
            showsTraffic
            minZoomLevel={0}
            maxZoomLevel={20}
            customMapStyle={styleMap}
            onRegionChangeComplete={(e) => {
              this.setState({
                selectedLatitude: e.latitude,
                selectedLongitude: e.longitude,
              });
            }}
            region={{
              latitude: JSON.parse(this.state.currentLatitude),
              longitude: JSON.parse(this.state.currentLongitude),
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            {/* <MapViewDirections
              origin={{
                latitude: this.state.currentLatitude,
                longitude: this.state.currentLongitude,
              }}
              destination={{
                llatitude: JSON.parse(this.state.currentLatitude),
                longitude: JSON.parse(this.state.currentLongitude),
              }}
              apikey={'AIzaSyDiPWI4uoEHVuWEuJJB4Gd9NKsOmIm07J0'}
              strokeWidth={5}
              strokeColor="red"
            /> */}
          </MapView>
          <View
            // pointerEvents="none"
            style={{
              position: 'absolute',
              top: height / 1.3,
              // backgroundColor: 'red',
              bottom: 0,
              left: 0,
              right: 0,
              zIndex: 100,
              alignItems: 'center',
              justifyContent: 'center',
              height: 30,
              backgroundColor: 'transparent',
            }}>
            <TouchableOpacity
              onPress={async () => {
                const data = await fetch(
                  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.selectedLatitude},${this.state.selectedLongitude}&key=${GOOGLE_API_KEY}`,
                );
                const address = await data.json();
                this.setState({
                  currentLatitude: this.state.selectedLatitude,
                  currentLongitude: this.state.selectedLongitude,
                });
                try {
                  await AsyncStorage.setItem(
                    '@order_details',
                    JSON.stringify({
                      longitude: this.state.selectedLongitude,
                      latitude: this.state.selectedLatitude,
                      FormattedAddress: {
                        full: address,
                        format: address.results[0].formatted_address,
                      },
                    }),
                  );
                  this.props.navigation.navigate('InputScreen');
                } catch (err) {
                  Alert.alert('Try Again', JSON.stringify(err));
                }
              }}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: theme.COLORS.SEALIGHT,
                  padding: 10,
                  fontSize: 18,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: theme.COLORS.SEADARK,
                }}>
                Select Location{' '}
                <Icon
                  family="Entypo"
                  size={18}
                  name="paper-plane"
                  color={theme}
                />
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
