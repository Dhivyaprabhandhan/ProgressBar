

import * as React from 'react';
import {Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import icons from "../common/view/resources/icons/index"

import HomeScreen from '../views/screen_components/Feeds/Index';
import OfferScreen from '../views/screen_components/Offers/Index';
import AccountScreen from '../views/screen_components/Account/Index';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="StoreListing"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="StoreListing"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused, color, size }) =>
          <Text style={{color:focused?"red":"black"}}>HOME</Text>,
          tabBarIcon: ({ focused,color, size }) => (
            <Image
            source={icons.home_fill}
            tintColor={focused?"red":"black"}
            style={{ width: size, height: size}}
          />

          ),
        }}
      />
      <Tab.Screen
        name="OffersScreen"
        component={OfferScreen}
        options={{
          tabBarLabel: ({ focused, color, size }) =>
          <Text style={{color:focused?"red":"black"}}>OFFERS</Text>,
          tabBarIcon: ({ focused,color, size }) => (
            <Image
            source={icons.offer_fill}
            tintColor={focused?"red":"black"}
            style={{ width: size, height: size}}
          />

          ),
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{
          tabBarLabel:({focused,color,size})=>(
            <Text style={{color:focused?"red":"black"}}>ACCOUNT</Text>
          ),
          tabBarIcon: ({ focused,color, size }) => (
              <Image
              source={icons.account_fill}
              tintColor={focused?"red":"black"}
              style={{ width: size, height: size}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs

// export default function HomeTabs() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }



// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Tab = createBottomTabNavigator();

// import HomeScreen from '../views/screen_components/Feeds/Index';
// import OfferScreen from '../views/screen_components/Offers/Index';
// import AccountScreen from '../views/screen_components/Account/Index';

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="HOME" component={HomeScreen} />
//       <Tab.Screen name="OFFERS" component={OfferScreen} />
//       <Tab.Screen name="ACCOUNT" component={AccountScreen} />
//     </Tab.Navigator>
//   );
// }