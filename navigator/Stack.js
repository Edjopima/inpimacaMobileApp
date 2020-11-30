import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './stackRoutes'; 

const  Stack = createStackNavigator();

const AppStack = () => {
	return(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Signin" component={Routes.Signin} options={{headerShown:false,}}/>
				<Stack.Screen name="Inventory" component={Routes.Inventory} options={{headerShown:false,}}/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppStack;
