import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const items = [
  // Your item data here
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
  },{
    id: 5,
    name: 'Aeneanet',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/p9-320x320.png',
    markedPrice: 34.00,
    availablePrice: 34.00,
  },{
    id: 6,
    name: 'BLOUSE',
    image: 'https://shopsworld.in/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-17-at-3.23.41-PM-1-1-320x320.jpg',
    markedPrice: 399.00,
    availablePrice: 399.00,
  },{
    id: 7,
    name: 'Dignisnim',
    image: 'https://shopsworld.in/wp-content/uploads/2021/06/3-320x320.png',
    markedPrice: 100.00,
    availablePrice: 80.00,
  },{
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


];
const ProductCard = ({ item }) => (
  <View style={styles.productCardContainer}>
    <View style={styles.priceContainer}>
      {item.availablePrice !== item.markedPrice && (
        <View style={styles.discountContainer}>
          <Text style={{ color: '#fff' }}> ₹{item.availablePrice - item.markedPrice}</Text>
        </View>
      )}
    </View>
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

const Shop = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={{fontSize:24,fontWeight:'bold',paddingLeft:10}}>Shop</Text>
    <View style={styles.rowContainer}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </View>
  </ScrollView>
  )
}

export default Shop

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap:10
  },
  productCardContainer: {
    padding:6,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius:8
   
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
  image: {
    
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
})

function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
