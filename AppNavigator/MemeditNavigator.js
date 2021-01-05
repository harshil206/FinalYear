import React from 'react';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';

import Homepage from '../Screen/Homepage';
import Login from "../Screen/Login";
import Signup from '../Screen/Signup';
import MainScreen from '../Screen/MainScreen';
import MyComponent from '../MyComponent';


const MemeditNavigator = createStackNavigator({

    Home: {
        screen: Homepage,
        navigationOptions: {
            headerShown: false,
        }
    },
    Log: {
        screen: Login
    },
    sign: {
        screen: Signup,
        navigationOptions: {
            headerShown: false
        }
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    MyComponent: {
        screen: MyComponent,
        navigationOptions: {
            headerShown: true,
            headerTitle: 'memEdit',
            headerTitleAlign: 'center',
            headerLeft: false,
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 30
            }
        },
    }
});
MemeditNavigator.navigationOptions = (MyComponent) => {
        return (
            Header = null
        )
    }
    // const MemeditTabNavigator=createStackNavigator({

//   Feed:Feed,
//   trending: trending,
// addpost: addpost,
// profile: profile
// });

// const InnerTabNavigator= createBottomTabNavigator({

//   firstscreen:Homepage

// });




export default createAppContainer(MemeditNavigator);
// export default createBottomTabNavigator(InnerTabNavigator);