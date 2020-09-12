import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../../Component';
import LoadingComponent from '../../../Component/Loader';
import Theme from '../../../constants/Theme';
import {Icon} from 'galio-framework';
import {Picker} from 'native-base';
import InputComp from '../../../Component/inputComp';
import ImagePicker from 'react-native-image-crop-picker';
import { randomId } from '../../../constants/variables';
import firebase from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('screen');

export default class Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      operator: '',
      name: '',
      surname: '',
      police: '',
      mobile: '',
      phone: '',
      email: '',
      bCard: '',
      yCard: '',
      driver: '',
      facebook: '',
      skipper: '',
      public: '',
      about: '',
      image: null,
    };
  }

  pickImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      this.setState({image: image});
    });
  };

  submit = async () => {
    if (this.state.image == null) {
      Alert.alert(
        'All Fields are compulsory!',
        'It looks like that you have not attached images!',
      );
    } else if (
      this.state.about.length < 1 ||
      this.state.operator.length < 1 ||
      this.state.name.length < 1 ||
      this.state.surname.length < 1 ||
      this.state.mobile.length < 1 ||
      this.state.phone.length < 1 ||
      this.state.email.length < 1 ||
      this.state.facebook.length < 1 ||
      this.state.driver.length < 1 ||
      this.state.skipper.length < 1 ||
      this.state.police.length < 1 ||
      this.state.yCard.length < 1 ||
      this.state.bCard.length < 1 ||
      this.state.public.length < 1
    ) {
      Alert.alert('All Fields are compulsory!');
    } else {
      this.setState({isLoading: true});
      let imgUrl = [];
      let idOfImg = randomId();
      await storage().ref(`images/${idOfImg}`).putFile(this.state.image.path);
      let url = await storage().ref(`images/${idOfImg}`).getDownloadURL();
      
      console.log(url);
      const user = JSON.parse(await AsyncStorage.getItem('@user_info'));
      let id = randomId();
      await firebase().collection('Sailor').doc(id).set({
        id: id,
        userId: user.id,
        image: url,
        about: this.state.about,
        bluecard: this.state.bCard,
        driver: this.state.driver,
        email: this.state.email,
        facebook: this.state.facebook,
        mobile: this.state.mobile,
        operatorType: this.state.operator,
        phone: this.state.phone,
        police: this.state.police,
        publicLI: this.state.public,
        skipper: this.state.skipper,
        yellowcard: this.state.yCard

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
          Details (Professional)
        </Text>
        <ScrollView>
          <View
            style={{
              paddingHorizontal: 30,
              paddingVertical: 10,
              marginBottom: 100,
            }}>
            <InputComp label="Who are you?">
              <Picker
                selectedValue={this.state.operator}
                mode={'dialog'}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({operator: itemValue});
                }}>
                <Picker.Item label={``} value={``} />
                <Picker.Item label={`Operator`} value={`operator`} />
                <Picker.Item label={`Skipper`} value={`skipper`} />
              </Picker>
            </InputComp>
            <InputComp label="Name">
              <TextInput
                value={this.state.name}
                onChangeText={(text) => this.setState({name: text})}
              />
            </InputComp>
            <InputComp label="Surname">
              <TextInput
                value={this.state.surname}
                onChangeText={(text) => this.setState({surname: text})}
              />
            </InputComp>
            <InputComp label="Mobile">
              <TextInput
                value={this.state.mobile}
                keyboardType="number-pad"
                onChangeText={(text) => this.setState({mobile: text})}
              />
            </InputComp>
            <InputComp label="Phone">
              <TextInput
                value={this.state.phone}
                keyboardType="number-pad"
                onChangeText={(text) => this.setState({phone: text})}
              />
            </InputComp>
            <InputComp label="Email">
              <TextInput
                value={this.state.email}
                keyboardType="email-address"
                onChangeText={(text) => this.setState({email: text})}
              />
            </InputComp>
            <InputComp label="Facebook Page">
              <TextInput
                value={this.state.facebook}
                onChangeText={(text) => this.setState({facebook: text})}
              />
            </InputComp>
            <InputComp label="Police Clearance">
              <TextInput
                value={this.state.police}
                onChangeText={(text) => this.setState({police: text})}
              />
            </InputComp>
            <InputComp label="Driver Authority">
              <TextInput
                value={this.state.driver}
                onChangeText={(text) => this.setState({driver: text})}
              />
            </InputComp>
            <InputComp label="Skipper Ticket Number">
              <TextInput
                value={this.state.skipper}
                onChangeText={(text) => this.setState({skipper: text})}
              />
            </InputComp>
            <InputComp label="Blue Card">
              <TextInput
                value={this.state.bCard}
                onChangeText={(text) => this.setState({bCard: text})}
              />
            </InputComp>
            <InputComp label="Yellow Card">
              <TextInput
                value={this.state.yCard}
                onChangeText={(text) => this.setState({yCard: text})}
              />
            </InputComp>
            <InputComp label="Public Liability Insurance - Up to $10M">
              <TextInput
                value={this.state.public}
                onChangeText={(text) => this.setState({public: text})}
              />
            </InputComp>
            <InputComp label="About you">
              <TextInput
                value={this.state.about}
                onChangeText={(text) => this.setState({about: text})}
              />
            </InputComp>
            <Text style={{marginVertical: 5}}>Upload Image</Text>
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
                  backgroundColor: this.state.image
                    ? Theme.COLORS.SEALIGHTGREEN
                    : 'transparent',
                }}>
                <Text style={{textAlign: 'center'}}>
                  <Icon
                    name={this.state.image ? 'checkcircle' : 'upload'}
                    family="AntDesign"
                    color={this.state.image ? 'white' : 'gray'}
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
