import React from 'react';
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';

const Item = (item, incr, c2f, f2c) => {
  console.log('1', incr, c2f, f2c);
  return (
    <TouchableOpacity
      style={styles.list}
      onPress={() => {
        incr(5);
        c2f(50 * (9 / 5) + 32);
        f2c((70 - 32) * (5 / 9));
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 24,
          position: 'relative',
          justifyContent: 'center',
          padding: 5,
          letterSpacing: 3,
        
          
        }}>
        {' '}
        {item.name}
      </Text>

      <Image
        source={require('./image/phone-call.png')}
        style={styles.imagephone}
      />
      <Text style={styles.phonetext}>{item.phone}</Text>
      <Image source={require('./image/mail.png')} style={styles.imageemail} />
      <Text style={styles.emailtext}>{item.email}</Text>
      <Image source={require('./image/pin.png')} style={styles.imageaddress} />
      <Text style={styles.address}>Adderss</Text>

      <Text style={styles.addresstext}>
        {item.address.street}, {item.address.suite}, {item.address.city},{' '}
        {item.address.zipcode}.
      </Text>
      {/* <View style={{height: 1, backgroundColor: 'black'}}></View> */}
    </TouchableOpacity>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      onPress: 0,
      show: true,
    };
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch(error => console.log(error)); //to catch the errors if any
  }

  incr = val => {
    console.log('rcvvv', val);
  };
  c2f = fahrenheit => {
    let x = console.log('celsius=50 fahrenheit=', fahrenheit);
  };
  f2c = celsius => {
    console.log('fahrenheit=70 celsius=', celsius);
  };

  render() {
    console.log('2');
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex: 1}}
          data={this.state.dataSource}
          renderItem={({item}) => Item(item, this.incr, this.c2f, this.f2c)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'gray',
  },
  list: {
    flex: 1,
    backgroundColor: '#eaeaea',
    borderRadius: 10,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    justifyContent: 'center',
    margin:10,
  },
  imagephone: {
    width: 16,
    height: 16,
    top: 20,
    marginLeft: 5,
    padding: 5,
  },
  phonetext: {
    fontSize: 18,
    color: 'black',
    marginBottom: 15,
    marginLeft: 30,
    position: 'relative',

    bottom: 1,
    padding: 2,
    letterSpacing: 2,
  },
  imageemail: {
    width: 16,
    height: 16,
    top: 2,
    marginLeft: 5,
    marginTop: 2,
    padding: 5,
  },
  emailtext: {
    fontSize: 18,
    color: 'black',
    marginLeft: 30,
    position: 'relative',
    bottom: 20,
    marginTop: 2,
    letterSpacing: 2,
  },
  imageaddress: {
    width: 16,
    height: 16,
    bottom:1,
    marginLeft: 5,
    marginTop:2,
    padding: 5,
    marginBottom:4
  },
  address: {
    fontSize: 18,
    color: 'black',
    marginTop: 2,
    marginLeft: 25,
    bottom:24,
    letterSpacing:2,
    fontWeight:'bold'

  },
  addresstext: {
    fontSize: 18,
    color: 'black',
    marginBottom:5,
    marginLeft: 10,
    textAlign: 'left',
    padding:4,
    bottom:20,
    letterSpacing: 2
  },
});
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({ navigation }) => {
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Jane' })
        }
      />
    );
  };
  const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };
