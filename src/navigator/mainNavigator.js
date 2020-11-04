import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps167605Navigator from '../features/Maps167605/navigator';
import Additem167604Navigator from '../features/Additem167604/navigator';
import Maps167600Navigator from '../features/Maps167600/navigator';
import UserProfile167596Navigator from '../features/UserProfile167596/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps167605: { screen: Maps167605Navigator },
Additem167604: { screen: Additem167604Navigator },
Maps167600: { screen: Maps167600Navigator },
UserProfile167596: { screen: UserProfile167596Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
