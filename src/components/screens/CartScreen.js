import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image, Button} from 'react-native';
import {useContext} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CartContext} from '../common/context';

const CartScreen = () => {
  const {cart, setCart} = useContext(CartContext);
  console.warn(cart.length);
  return (
    <ScrollView style={styles.CardContainer}>
      <Text style={styles.Heading}>Cart Products</Text>

      {cart.length >= 1 &&
        cart.map((product, i) => {
          return (
            <>
              <View style={styles.CardItem}>
                <View>
                  <Image
                    source={product.productImage}
                    style={{width: 130, height: 130, paddingBottom: 10}}
                  />
                  {cart.length >= 1 && cart.includes(product) ? (
                    <Button
                      title="Remove"
                      color="steelblue"
                      onPress={() =>
                        setCart(
                          cart.filter(
                            item => item.productId !== product.productId,
                          ),
                        )
                      }
                    />
                  ) : (
                    <Button
                      title="Add to Cart"
                      color="darkblue"
                      onPress={() => setCart([...cart, product])}
                    />
                  )}
                </View>
                <View style={{paddingStart: 10}}>
                  <Text style={{padding: 5, fontSize: 20}}>
                    {product.productName}
                  </Text>
                  <Text style={{padding: 5, fontSize: 15, fontStyle: 'italic'}}>
                    {product.productBrand}
                  </Text>
                  <Text style={{padding: 5, fontSize: 15}}>
                    ${product.productPrice}
                  </Text>
                  <Text style={{padding: 5, fontSize: 15}}>
                    <AntDesign name="star" size={15} color="gold" />
                    {product.productRating}
                  </Text>
                </View>
              </View>
            </>
          );
        })}
      {cart.length === 0 && (
        <Text style={styles.TextContent}>No item is added to cart yet</Text>
      )}
    </ScrollView>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  CardContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
  },
  CardItem: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'slategrey',
    padding: 20,
    flexDirection: 'row',
    margin: 10,
  },
  Heading: {
    fontSize: 32,
    textAlign: 'center',
    fontFamily: 'Helvet',
    fontWeight: 'bold',
    color: 'darkgrey',
    padding: 20,
  },
  TextContent: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Helvet',
    color: 'grey',
    padding: 25,
  },
});
