import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../Component';
import LoadingComponent from '../../../Component/Loader';
import Theme from '../../../constants/Theme';
import {Icon, Checkbox} from 'galio-framework';
import {Picker, DatePicker} from 'native-base';
import InputComp from '../../../Component/inputComp';
import ImagePicker from 'react-native-image-crop-picker';
import {randomId} from '../../../constants/variables';
import firebase from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('screen');

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,

      images: null,
      reg: '',
      about: '',
      hin: '',
      drive: '',
      length: '',
      berth: '',
      maxpass: '',
      insurance: '',
      epirb: true,
      radio: true,
      inspectiondate: new Date(),
      reinspectiondate: new Date(),
    };
  }

  pickImage = () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      console.log(images);
      this.setState({
        images: images,
      });
    });
  };

  submit = async () => {
    if (this.state.images == null) {
      Alert.alert(
        'All Fields are compulsory!',
        'It looks like that you have not attached images!',
      );
      console.log(this.state.epirb,this.state.radio)
    } else if (
      this.state.about.length < 1 ||
      this.state.berth.length < 1 ||
      this.state.drive.length < 1 ||
      this.state.epirb.length < 1 ||
      this.state.hin.length < 1 ||
      this.state.insurance.length < 1 ||
      this.state.length.length < 1 ||
      this.state.maxpass.length < 1
    ) {
      Alert.alert('All Fields are compulsory!');
    } else {
      this.setState({isLoading: true});
      let imgUrl = [];
      await Promise.all(
        this.state.images.map(async (e) => {
          let idOfImg = randomId();
          await storage().ref(`images/${idOfImg}`).putFile(e.path);
          let url = await storage().ref(`images/${idOfImg}`).getDownloadURL();
          console.log('image:;', url);
          imgUrl.push(url);
        }),
      );
      console.log(imgUrl);
      const user = JSON.parse(await AsyncStorage.getItem('@user_info'));
      let id = randomId();
      await firebase().collection('Vessel').doc(id).set({
        id: id,
        userId: user.id,
        images: imgUrl,
        aboutbio: this.state.about,
        date: new Date(),
        hin: this.state.hin,
        marinRadio: this.state.radio,
        epirb: this.state.epirb,
        maxpassengers: this.state.maxpass,
        numOfBerths: this.state.berth,
        registrationNumber: this.state.reg,
        vesselInsurance: this.state.insurance,
        inspectiondate: this.state.inspectiondate,
        reinspectiondate: this.state.reinspectiondate,
      });
      this.setState({isLoading: false});
      this.props.navigation.navigate('VesselListScreen');
    }
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
            fontSize: 14,
            fontWeight: 'bold',
            paddingVertical: 5,
          }}>
          Vessel/Boat Details
        </Text>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              marginBottom: 100,
            }}>
            <InputComp label="Registration Number">
              <TextInput
                value={this.state.reg}
                onChangeText={(text) => this.setState({reg: text})}
              />
            </InputComp>
            <InputComp label="About">
              <TextInput
                value={this.state.about}
                onChangeText={(text) => this.setState({about: text})}
              />
            </InputComp>
            <InputComp label="HIN">
              <TextInput
                value={this.state.hin}
                onChangeText={(text) => this.setState({hin: text})}
              />
            </InputComp>
            <InputComp label="Drive">
              <TextInput
                value={this.state.drive}
                onChangeText={(text) => this.setState({drive: text})}
              />
            </InputComp>
            <InputComp label="Length">
              <TextInput
                value={this.state.length}
                onChangeText={(text) => this.setState({length: text})}
              />
            </InputComp>
            <InputComp label="Number of Berths">
              <TextInput
                value={this.state.berth}
                keyboardType='number-pad'
                onChangeText={(text) => this.setState({berth: text})}
              />
            </InputComp>
            <InputComp label="Maximum Passengers">
              <TextInput
                value={this.state.maxpass}
                keyboardType='number-pad'
                onChangeText={(text) => this.setState({maxpass: text})}
              />
            </InputComp>
            <InputComp label="Vessel Insurance">
              <TextInput
                value={this.state.insurance}
                onChangeText={(text) => this.setState({insurance: text})}
              />
            </InputComp>
            <InputComp label="Inspection Date">
              <DatePicker
                onDateChange={(text) => this.setState({inspectiondate: text})}
                defaultDate={new Date()}
                minimumDate={new Date()}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'calendar'}
              />
            </InputComp>
            <InputComp label="Re Inspection Date">
              <DatePicker
                onDateChange={(text) => this.setState({reinspectiondate: text})}
                defaultDate={new Date()}
                minimumDate={new Date()}
                locale={'en'}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={'fade'}
                androidMode={'calendar'}
              />
            </InputComp>
            <Checkbox
              onChange={() => this.setState({epirb: !this.state.epirb})}
              color={Theme.COLORS.SEADARK}
              label="EPIRB"
              style={{paddingVertical: 5}}
              checkboxStyle={{width: 30, height: 30}}
              initialValue={!this.state.epirb}
            />
            <Checkbox
              onChange={() => this.setState({radio: !this.state.radio})}
              color={Theme.COLORS.SEADARK}
              label="Marine Radio"
              style={{paddingVertical: 5}}
              iconName="radio"
              iconFamily="Entypo"
              initialValue={!this.state.radio}
              checkboxStyle={{width: 30, height: 30}}
            />
            <Text style={{marginVertical: 5}}>Upload Vessel Images</Text>
            <TouchableOpacity onPress={this.pickImage}>
              <View
                style={{
                  marginVertical: 5,
                  borderWidth: 2,
                  borderRadius: 5,
                  borderColor: 'gray',
                  width: '100%',
                  height: width / 4,
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  backgroundColor: this.state.images
                    ? Theme.COLORS.SEALIGHTGREEN
                    : 'transparent',
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Icon
                    name={this.state.images ? 'checkcircle' : 'upload'}
                    family="AntDesign"
                    color={this.state.images ? 'white' : 'gray'}
                    size={40}
                  />
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.submit}>
              <Text
                style={{
                  padding: 10,
                  backgroundColor: Theme.COLORS.SEADARK,
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 10,
                  marginVertical: 50,
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
