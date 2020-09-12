import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  Modal,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Bold from '../../../Component/bold'
import {Button, Icon} from 'galio-framework';
const {width, height} = Dimensions.get('screen');
export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageNum: 0,
    };
  }
  render() {
    return (
      <React.Fragment>
        <Modal
          visible={this.props.open}
          onRequestClose={this.props.close}
          animationType="fade"
          transparent={true}>
          <React.Fragment>
            {this.state.isLoading && <Loading />}
            <View
              style={{
                flexDirection: 'column',
                height: height,
              }}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  opacity: 0.5,
                }}>
                <Button
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: 'transparent',
                  }}
                  onPress={() => this.props.close()}></Button>
              </View>
              <View
                style={{
                  flex: 2,
                  backgroundColor: 'white',
                }}>
                <ScrollView>
                  <ImageBackground
                    source={{uri: this.props.data.images[this.state.imageNum]}}
                    width={width}
                    height={width}
                    style={{width: width, height: width}}>
                    <View style={{flexDirection: 'row', height: '100%'}}>
                      <View style={{flex: 1, alignSelf: 'center'}}>
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              imageNum:
                                this.state.imageNum == 0
                                  ? this.props.data.images.length - 1
                                  : this.state.imageNum - 1,
                            })
                          }>
                          <Text>
                            <Icon
                              name="arrow-with-circle-left"
                              family="Entypo"
                              color="white"
                              size={40}
                            />
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{flex: 1, alignSelf: 'center'}}>
                        <TouchableOpacity
                          onPress={() =>
                            this.setState({
                              imageNum:
                                this.props.data.images.length - 1 ==
                                this.state.imageNum
                                  ? 0
                                  : this.state.imageNum + 1,
                            })
                          }>
                          <Text style={{textAlign: 'right'}}>
                            {' '}
                            <Icon
                              name="arrow-with-circle-right"
                              family="Entypo"
                              color="white"
                              size={40}
                            />
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </ImageBackground>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      paddingTop: 10,
                      marginBottom: 100,
                    }}>
                    <Text>{this.props.data.aboutbio}</Text>
                    <Bold >Registration Number</Bold>
                    <Text>{this.props.data.registrationNumber}</Text>
                    <Bold >Vessel Insurance</Bold>
                    <Text>{this.props.data.vesselInsurance}</Text>
                    <Bold >HIN</Bold>
                    <Text>{this.props.data.hin}</Text>
                    <Bold >Marine Radio</Bold>
                    <Text>{this.props.data.marinRadio? 'Yes':'No'}</Text>
                    <Bold >EPIRB</Bold>
                    <Text>{this.props.data.epirb? 'Yes':'No'}</Text>
                    <Bold >Max Passengers</Bold>
                    <Text>{this.props.data.maxpassengers}</Text>
                    <Bold >Number of Berths</Bold>
                    <Text>{this.props.data.numOfBerths}</Text>
                    <Bold >Inspection Date</Bold>
                    <Text>{`${JSON.stringify(this.props.data.inspectiondate.toDate()).split('T')[0]}"`}</Text>
                    <Bold >Re Inspection Date</Bold>
                    <Text>{`${JSON.stringify(this.props.data.reinspectiondate.toDate()).split('T')[0]}"`}</Text>
                  
                  </View>
                </ScrollView>
              </View>
            </View>
          </React.Fragment>
        </Modal>
      </React.Fragment>
    );
  }
}
