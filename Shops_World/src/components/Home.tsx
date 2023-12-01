//Importing all required tags
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Linking,
  ImageBackground,
} from 'react-native'
import React from 'react';
//libarary for icon in nav bar 
import Icon from 'react-native-vector-icons/FontAwesome';
//Importing for carousel effect
import Swiper from 'react-native-swiper';
//Cards getting the data from this array object
const items = [
  {
    id: 1,
    name: 'Acelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/5-320x320.png',
    markedPrice: 119.00,
    availablePrice: 119.00,
  },
  {
    id: 2,
    name: 'Acelerisqu redo',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p3-2-320x320.png',
    markedPrice: 119.00,
    availablePrice: 119.00,
  },
  {
    id: 3,
    name: 'Aenean et',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p2-2-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  },
  {
    id: 4,
    name: 'Aenean tortor',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p5-2-320x320.png',
    markedPrice: 79.00,
    availablePrice: 79.00,
  }, {
    id: 5,
    name: 'Aeneanet',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  }, {
    id: 6,
    name: 'BLOUSE',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-17-at-3.23.41-PM-1-1-320x320.jpg',
    markedPrice: 399.00,
    availablePrice: 399.00,
  }, {
    id: 7,
    name: 'Dignisnim',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/3-320x320.png',
    markedPrice: 100.00,
    availablePrice: 80.00,
  }, {
    id: 8,
    name: 'Disus feugiat',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p18-320x320.png',
    markedPrice: 300.00,
    availablePrice: 300.00,
  },
  {
    id: 9,
    name: 'Drasd donews',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p8-320x320.png',
    markedPrice: 50.00,
    availablePrice: 50.00,
  },
  {
    id: 10,
    name: 'Embroidered Pouch',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-11.38.42-PM-320x320.jpeg',
    markedPrice: 249.00,
    availablePrice: 1890.00,
  },
  {
    id: 11,
    name: 'Erat scelersqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-1-320x320.png',
    markedPrice: 110.00,
    availablePrice: 110.00,
  },
  {
    id: 12,
    name: 'Eratcelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/2-320x320.png',
    markedPrice: 110.00,
    availablePrice: 110.00,
  },
  {
    id: 13,
    name: 'Eratcelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p1-320x320.png',
    markedPrice: 310.00,
    availablePrice: 310.00,
  },
  {
    id: 14,
    name: 'Faucibus in',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/backpack-3-320x320.png',
    markedPrice: 700.00,
    availablePrice: 700.00,
  },
  {
    id: 15,
    name: 'Gota Parri Thal Posh',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-30-at-2.05.26-PM-320x320.jpeg',
    markedPrice: 399.00,
    availablePrice: 299.00,
  },
  {
    id: 16,
    name: 'Gusto donece',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/2-320x320.png',
    markedPrice: 410.00,
    availablePrice: 320.00,
  },


  // Add 8 more items here
];
//Featured products section  get data from here
const featuredProducts = [
  {
    id: 1,
    name: 'Acelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/5-320x320.png',
    markedPrice: 119.00,
    availablePrice: 119.00,
  },
  {
    id: 2,
    name: 'Acelerisqu redo',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p3-2-320x320.png',
    markedPrice: 119.00,
    availablePrice: 119.00,
  },
  {
    id: 3,
    name: 'Aenean et',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p2-2-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  },
  {
    id: 4,
    name: 'Aenean tortor',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p5-2-320x320.png',
    markedPrice: 79.00,
    availablePrice: 79.00,
  }, {
    id: 5,
    name: 'Aeneanet',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  }, {
    id: 6,
    name: 'BLOUSE',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-17-at-3.23.41-PM-1-1-320x320.jpg',
    markedPrice: 399.00,
    availablePrice: 399.00,
  }, {
    id: 7,
    name: 'Dignisnim',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/3-320x320.png',
    markedPrice: 100.00,
    availablePrice: 80.00,
  }, {
    id: 8,
    name: 'Disus feugiat',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p18-320x320.png',
    markedPrice: 300.00,
    availablePrice: 300.00,
  },
  {
    id: 9,
    name: 'Drasd donews',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p8-320x320.png',
    markedPrice: 50.00,
    availablePrice: 50.00,
  },
  {
    id: 10,
    name: 'Embroidered Pouch',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-11.38.42-PM-320x320.jpeg',
    markedPrice: 249.00,
    availablePrice: 1890.00,
  },
  {
    id: 11,
    name: 'Erat scelersqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-1-320x320.png',
    markedPrice: 110.00,
    availablePrice: 110.00,
  },
  {
    id: 12,
    name: 'Eratcelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/2-320x320.png',
    markedPrice: 110.00,
    availablePrice: 110.00,
  },
  {
    id: 13,
    name: 'Eratcelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p1-320x320.png',
    markedPrice: 310.00,
    availablePrice: 310.00,
  },
  {
    id: 14,
    name: 'Faucibus in',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/backpack-3-320x320.png',
    markedPrice: 700.00,
    availablePrice: 700.00,
  },
  {
    id: 15,
    name: 'Gota Parri Thal Posh',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-30-at-2.05.26-PM-320x320.jpeg',
    markedPrice: 399.00,
    availablePrice: 299.00,
  },
  {
    id: 16,
    name: 'Gusto donece',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/2-320x320.png',
    markedPrice: 410.00,
    availablePrice: 320.00,
  },
  // Add more featured products with links
];
//onsalePRoducts section get the data dinamically from here 
const onSaleProducts = [
  {
    id: 1,
    name: 'Acelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/5-320x320.png',
    markedPrice: 119.00,
    availablePrice: 119.00,
  },
  {
    id: 2,
    name: 'Acelerisqu redo',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p3-2-320x320.png',
    markedPrice: 119.00,
    availablePrice: 119.00,
  },
  {
    id: 3,
    name: 'Aenean et',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p2-2-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  },
  {
    id: 4,
    name: 'Aenean tortor',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p5-2-320x320.png',
    markedPrice: 79.00,
    availablePrice: 79.00,
  }, {
    id: 5,
    name: 'Aeneanet',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  }, {
    id: 6,
    name: 'BLOUSE',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-17-at-3.23.41-PM-1-1-320x320.jpg',
    markedPrice: 399.00,
    availablePrice: 399.00,
  }, {
    id: 7,
    name: 'Dignisnim',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/3-320x320.png',
    markedPrice: 100.00,
    availablePrice: 80.00,
  }, {
    id: 8,
    name: 'Disus feugiat',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p18-320x320.png',
    markedPrice: 300.00,
    availablePrice: 300.00,
  },
  {
    id: 9,
    name: 'Drasd donews',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p8-320x320.png',
    markedPrice: 50.00,
    availablePrice: 50.00,
  },
  {
    id: 10,
    name: 'Embroidered Pouch',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-11.38.42-PM-320x320.jpeg',
    markedPrice: 249.00,
    availablePrice: 1890.00,
  },
  {
    id: 11,
    name: 'Erat scelersqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-1-320x320.png',
    markedPrice: 110.00,
    availablePrice: 110.00,
  },
  {
    id: 12,
    name: 'Eratcelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/2-320x320.png',
    markedPrice: 110.00,
    availablePrice: 110.00,
  },
  {
    id: 13,
    name: 'Eratcelerisqu',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p1-320x320.png',
    markedPrice: 310.00,
    availablePrice: 310.00,
  },
  {
    id: 14,
    name: 'Faucibus in',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/backpack-3-320x320.png',
    markedPrice: 700.00,
    availablePrice: 700.00,
  },
  {
    id: 15,
    name: 'Gota Parri Thal Posh',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-30-at-2.05.26-PM-320x320.jpeg',
    markedPrice: 399.00,
    availablePrice: 299.00,
  },
  {
    id: 16,
    name: 'Gusto donece',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/2-320x320.png',
    markedPrice: 410.00,
    availablePrice: 320.00,
  },
  // Add more on-sale products with links
];

//Strating of home section included navigation 
const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <SafeAreaView>
        <View>
          {/* getting top banner  */}
          <Banner />
          {/* second advertise watch spects and footware */}
          <View style={{ padding: 10, backgroundColor: '#FFFFFF' }}>
            <Advertise />
          </View>
        </View>

        <View style={{ padding: 10, flex: 1 }} >
          <Text style={styles.heading}>Trending Products</Text>
          {/* trending products details all cards  */}
          <MakeCard />
        </View>
        <View>
          {/* onsale and featured prducts */}
          <Products />
        </View>
        <View>
          {/* Vetical green banner to seaprate cards */}
          <DealsAdd />
        </View>

        <View style={{ padding: 10 }}>
          <Text style={styles.heading}>Fashion Accessories</Text>
          {/* Getting fashion accessories cards */}
          <MakeCard />
        </View>
        <View>
          {/* Carasouel */}
          <AdvertiseBottom />
        </View>
        {/* footer section */}
        <Footer />
      </SafeAreaView>
    </ScrollView>
  )
}
// top Banner
const Banner = () => {
  return (
    // first banner
    <View style={styles.topBanner}>
      <View style={{ paddingBottom: 10 }}>
        <View style={styles.bannerContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.promoText}>Promo</Text>
            <Text style={styles.descriptionText}>Fabric & Suits</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <Image
              source={require('../assets/TopBannerImages/BannerImage1.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      {/* second Banner */}
      <View style={{ paddingBottom: 10 }}>
        <View style={[styles.bannerContainer, styles.bannerContainer1]}>
          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>Fabric & Suits</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{right:20}}>
            <Image
              source={require('../assets/TopBannerImages/BannerImage2.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  )
}
//second sunglasses and footware  watches
const Advertise = () => {
  return (
    <View>
      <View style={{ paddingBottom: 10 }}>
        <View style={[styles.bannerContainer, styles.sunGlasses]}>
          <View style={styles.textContainer}>
            <Text style={styles.promoText}>Sun Glasses</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <Image
              source={require('../assets/TopBannerImages/sunglasses.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <View style={[styles.bannerContainer, styles.Shoes]}>
          <View style={styles.textContainer}>
            <Text style={styles.promoText}>Footwear</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <Image
              source={require('../assets/TopBannerImages/shoes.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      <View style={{ paddingBottom: 10 }}>
        <View style={[styles.bannerContainer, styles.Watches]}>
          <View style={styles.textContainer}>
            <Text style={styles.promoText}>Watches</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>
                Shop Now
              </Text>
            </TouchableOpacity>
          </View>
          <View >
            <Image
              source={require('../assets/TopBannerImages/watch.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </View>
  )
}
//Making of card code
const ProductCard = ({ item }) => (
  //price variation tag
  <View style={styles.productCardContainer}>
    <View style={styles.priceContainer}>
      {item.availablePrice !== item.markedPrice && (
        <View style={styles.discountContainer}>
          <Text style={{ color: '#fff' }}> ₹{item.availablePrice - item.markedPrice}</Text>
        </View>
      )}
    </View>
    {/* all card details */}
    <View style={styles.cardContent}>
      <Image source={{ uri: item.image }} 
      style={{width: 150,
        height: 180,}} />
      <Text style={{fontWeight:'bold',paddingBottom:2}}>{item.name}</Text>
      <View style={styles.priceDetails}>
        <Text style={styles.markedPrice}> ₹{item.markedPrice}</Text>
        <Text style={styles.availablePrice}> ₹{item.availablePrice}</Text>
      </View>
      <TouchableOpacity onPress={() => alert(`Add ${item.name} to cart`)}>
        <Text style={styles.addToCartButton}>Add to Cart</Text>
      </TouchableOpacity>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => alert(`Add ${item.name} to wishlist`)}>
          <Text style={styles.actionText}>
          <Icon name="heart" size={15} color="#555555" />Add to Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert(`Compare ${item.name}`)}>
          <Text style={styles.actionText}>
          <Icon name="retweet" size={15} color="#555555" />Compare</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
// calling all cards data getting dinamically from array
const MakeCard = () => {
  return (
    <View style={styles.scrollViewContent}>
  <View style={styles.rowContainer}>
    {items.map((item) => (
      <ProductCard key={item.id} item={item} />
    ))}
  </View>
</View>

  );
};
//for featured products getting data dinamically ,onsale products
const ProductItem = ({ item }) => (
  <View style={{ flexGrow: 1,width: '45%'}}>
    <View style={{ flexDirection: 'row', marginBottom: 10, }}>
      <Image source={{ uri: item.image }} style={{ width: 40, height: 60, resizeMode: 'cover',paddingLeft:2}} />
      <View style={{ flexDirection: 'column',paddingLeft:5 }}>
        <Text style={{ fontSize: 14, marginTop: 8 }}>{item.name}</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', }}>₹{item.markedPrice}</Text>
      </View>
    </View>
  </View>
);
//calling products from here to make call the cards
const ProductList = ({ title, data }) => (
  <View style={{width: '100%'}}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <FlatList
      data={data}
      renderItem={({ item }) => <ProductItem item={item} />}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      numColumns={2}
    />
  </View>
);
//for two sections featured products and onsale products from here
const Products = () => {
  return (
    <View style={styles.container}>
      <ProductList title="Featured Products" data={featuredProducts} />
      <ProductList title="On-Sale Products" data={onSaleProducts} />
    </View>
  )
};
//center green color banner seaparation onsale products and fashon accessories
const DealsAdd = () => {
  return (
    <ScrollView>
      <View style={styles.addContainer}>
        <Text style={styles.Text}>Get Best Deals Every Day </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )

}
//carousel effect
const AdvertiseBottom = () => {
  //we can some images in carousel through this
  const adData = [
    { image: require('../assets/BottomAdd/Image1.jpg'), discount: '30%', text: 'Suits & Accessories' },
    { image: require('../assets/BottomAdd/Image2.jpg'), discount: 'Fresh', text: 'Fresh Collection' },
    { image: require('../assets/BottomAdd/Image3.jpg'), discount: '20%', text: 'Jackets & Jeans' },
    { image: require('../assets/BottomAdd/Image4.jpg'), discount: 'Fresh', text: 'Winter Collection' },
  ];

  return (
    //getting all data dinamically 
    <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} autoplayTimeout={3}>
      {adData.map((ad, index) => (
        <View key={index} style={styles.adContainer}>
          <ImageBackground source={ad.image} style={styles.adImage}>
            <Text style={styles.discountText}>{ad.discount}</Text>
            <Text style={styles.adText}>{ad.text}</Text>
          </ImageBackground>
        </View>
      ))}
    </Swiper>
  );
};
//footer section 
const Footer = () => {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container1}>
        {/* Shopsworld top first heading data here when we click on the text it renders to that page links working  */}
        <Text style={styles.widgetTitle}>ShopsWorld</Text>
        <Text style={{ textAlign: 'center' }}>
          Step into a world of endless shopping possibilities! At our online store, we offer a wide range of products, from fashion to electronics and home essentials. Discover quality, convenience, and style today!
        </Text>
        <Text style={styles.widgetTitle}>CONSUMER POLICY</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => openLink('https://shopsworld.in/refund_returns/')}>
              <Text>Cancellation & Returns</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://merchant.razorpay.com/policy/MeAKitUIzfgsVW/terms')}>     
           <Text>Terms of Use</Text>
            </TouchableOpacity>

          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => openLink('https://shopsworld.in/privacy-policy/')}>
              <Text>Privacy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://merchant.razorpay.com/policy/MeAKitUIzfgsVW/shipping')}>
              <Text>Shipping</Text>
            </TouchableOpacity></View>
        </View>
        {/* second section Let us help you   */}
        <Text style={styles.widgetTitle}>Let Us Help You</Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => openLink('https://shopsworld.in/my-account/')}>
              <Text>Your Account</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://shopsworld.in/cart/')}>
              <Text>Cart</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box}>
            <TouchableOpacity onPress={() => openLink('https://shopsworld.in/contact-us/')}>
              <Text>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLink('https://shopsworld.in/checkout/')}>
              <Text>Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* contact details  */}
        <Text style={styles.widgetTitle}>Contact Details</Text>
        <View >
          <Text style={{textAlign:'center'}}>Address: 209, Adinath complex, Delhi gate, Udaipur Rajasthan, 313001</Text>
          <Text style={{textAlign:'center'}}>Contact : 772-706-6619</Text>
          <Text style={{textAlign:'center'}}>E-mail : shopsworld23@gmail.com</Text>
        </View>
      </View>
      <View style={styles.belowFooter}>
        <Text>
          © 2023 shops world.in
        </Text>
      </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#FCDC5E',
    flexDirection: 'row',
    borderRadius: 20,
  },
  addContainer: {
    backgroundColor: '#63d436',
    alignItems: 'center',
    borderRadius: 5,
    paddingBottom: 10,
  },
  Text: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  },
  bannerContainer1: {
    backgroundColor: '#00D0FF',
  },
  topBanner: {
    padding: 8,
    backgroundColor: '#E8F1F8'
  },
  sunGlasses: {
    backgroundColor: '#FCFBE5'
  },
  Shoes: {
    backgroundColor: '#E3F8FF'
  },
  Watches: {
    backgroundColor: '#FDF2E7'
  },
  textContainer: {
    paddingLeft: 5,
    paddingTop: 90,
  },
  promoText: {
    color: '#000000',
    fontSize: 20,
    fontStyle: 'italic',
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    backgroundColor: '#18244d',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    height: 250,
    width: 200,

  },
  scrollViewContent: {
    flexGrow: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap:10
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#E8F1F8'
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,

  },
  productCardContainer: {
    padding:6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius:8,
   
  },
  priceContainer: {
    position: 'absolute',
    right: 0, 
    zIndex: 1 ,
     
  },
  discountContainer: {
    backgroundColor: '#000000',
    alignItems: 'flex-end',
    padding:6,
    borderTopEndRadius:8,

  },
  cardContent: {
    alignItems: 'center',
  },
  priceDetails: {
    flexDirection: 'row',
    paddingBottom:6,
  },
  markedPrice: {
    textDecorationLine: 'line-through',
  },
  availablePrice: {
    color: '#63d436',
  },
  addToCartButton: {
    backgroundColor: '#63d436',
    padding: 5,
    borderRadius: 5,
  },
  actionsContainer: {
    flexDirection: 'column',
   alignItems:'center'
  },
  actionText: {
    marginTop: 5,
  },
  productItem: {
    flexBasis: '50%', // Adjust as needed to leave some space between items
    marginBottom: 6, // Adjust as needed for spacing between rows
  },
  productImage: {
    width: 100,
    height: 80,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 16,
    marginTop: 8,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },

  heading: {
    fontSize: 25,
    fontWeight: '900',
    paddingLeft: 15,
  },
  wrapper: {
    height: 450
  },
  adContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  adImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  discountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    padding: 10

  },
  adText: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute', // Position the text absolutely
    bottom: 20,

  },

  container1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 10,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    paddingLeft:50,
    gap:10
    
  },
  box: {
    flex: 1,
    paddingLeft:10
  },

  widgetTitle: {
    // Add styles for widget-title
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },

  belowFooter: {
    alignItems: 'center',
    margin: 15
  },



})
//Here the functions some buttons are there if we click on those we get this output 
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
