import * as React from 'react';
//Here this one important to handle hamberg icon when we click on that to perform some action 
import 'react-native-gesture-handler';
//drawer navigation  here to include search bar and side home all remaing
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
//in navigation we included all those screens in this container
import { NavigationContainer } from '@react-navigation/native';
//importing all the required components for naviagtion 
import Home from '../components/Home';
import Shop from '../components/Shop';
import BestSellers from '../components/BestSellers';
import SaleProducts from '../components/SaleProducts';
import Contactus from '../components/Contactus';
import VendorRegistration from '../components/VendorRegistration';
import { Image, TextInput, TouchableOpacity, View ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MyAccount from '../components/MyAccount';
import login from '../components/Login';
import WishList from '../components/WishList';
import Cart from '../components/Cart';
const Drawer = createDrawerNavigator();
const SearchScreen = ({ navigation }) => {
  //here we can get search bar data we can communicate to back end seachr bar 
  const handleSearch = () => {
    // Implement search functionality
    // Example: Perform search based on user input
  };

  return (
    <View>
      {/* search bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 10, margin: 10 ,borderRadius:8}}>
        <TextInput
          placeholder="Search..."
          onChangeText={handleSearch}
          style={{ flex: 1, height: 40 }}
        />
        <Icon name="magnifier" size={20} color="white" style={{ marginLeft: 10 ,backgroundColor:'black',padding:10,borderRadius:8}} />
      </View>
      {/* Add additional search UI components and functionality as needed  some time if we requred more */}
    </View>
  );
};
//creating heading nav iocn and logo
const CustomHeader = ({ navigation }) => (
  <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
      <Image
        source={require('../assets/TopBannerImages/MainLogo.png')}
        style={{ width: 160, height: 120, resizeMode: 'contain' }}
      />
      {/* when we click on those icons it will open required screen   3 icon wish list user account and cart*/}
      <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
        <TouchableOpacity onPress={()=>navigation.navigate('WishList')}>
        <Icon name="heart" size={20} color="black" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        
        {/* <Icon name="user" size={30} color="black" style={{ marginRight: 20 }} /> */}
        <TouchableOpacity onPress={() => navigation.navigate('MyAccount')}>
          <Icon name="user" size={20} color="black" style={{ marginRight: 10 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Icon name="basket" size={20} color="black" />
        </TouchableOpacity>
        
      </View>
    </View>
  </View>
);
//here we are including search bar if we require some log or any other we can here
const CustomDrawerContent = (props) => {
  return (
    <ScrollView>
      {/* <CustomHeader navigation={props.navigation} /> */}
      <SearchScreen navigation={props.navigation} />
      <DrawerItemList {...props} />
    </ScrollView>
  );
};
//side drawer content 
const SideDrawer = () => {
  
  return (
    
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawerContent}>  
        <Drawer.Screen
          name="Home"
          component={Home}
          options={({navigation}) => ({
            headerStyle: {
              height: 70,
            },
            headerTitle: () => <CustomHeader navigation={navigation} />,

          })}
        />
        <Drawer.Screen name="Shop" component={Shop} />
        <Drawer.Screen name="Best Sellers" component={BestSellers} />
        <Drawer.Screen name="Sale Products" component={SaleProducts} />
        <Drawer.Screen name="Contact Us" component={Contactus} />
        <Drawer.Screen name="Vendor Registration" component={VendorRegistration} />
        <Drawer.Screen name="MyAccount" component={MyAccount}  
        options={{ drawerLabel:()=>null }}/>
        <Drawer.Screen name="Login" component={login}  
        //to hide in the side drawer we can in main nav bar on click icons 
        options={{ drawerLabel:()=>null }}/>
        <Drawer.Screen name='WishList' component={WishList} options={{drawerLabel:()=>null}}/>
        <Drawer.Screen name='Cart' component={Cart} options={{drawerLabel:()=>null}}/>
        </Drawer.Navigator>

      
    </NavigationContainer>
  )
}

export default SideDrawer
