import React from 'react';
import { StyleSheet, Text,View,SafeAreaView,ScrollView ,Dimensions , Image} from 'react-native';
import { createDrawerNavigator , DrawerItems } from 'react-navigation';
import HomeScreen from './HomeScreen'
import NotificationScreen from './NotificationScreen'
import SchoolTimesScreen from './SchoolTimesScreen';
const CustomDrawerComponent = (props) => (
  <SafeAreaView style ={{ flex: 1}}>
    <View style={{ height: 150 , backgroundColor:'white' , alignItems:'center', justifyContent: 'center'}}>
      <Image source={ require('./assets/logo.png')} style={{ height: 120 , width : 120 , borderRadius: 60 , alignItems: 'center' , justifyContent: 'center' }} />
    </View>
    <DrawerItems {...props} />
  </SafeAreaView>
  
)


const MyApp = createDrawerNavigator({
 Übersicht: HomeScreen,
 Unterrichtszeiten: SchoolTimesScreen,
 Benachrichtigungen: NotificationScreen,
},{
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: 'orange'
    }
  }  
);

export default class App extends React.Component {
  render() {
    return (
      <MyApp/>
    );
  }
}


