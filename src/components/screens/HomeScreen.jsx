import React, {useContext} from 'react';
import {View, Text, ScrollView, Image, Button,StyleSheet} from 'react-native';
import CardItemDetails from '../../data/CardItemDetails';
import {CartContext} from '../common/context';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const {cart, setCart} = useContext(CartContext);

  return (
    <ScrollView style={styles.CardContainer}>
      <Text style={styles.Heading}>Available Products</Text>

      {CardItemDetails.map((product, i) => {
        return (
          <>
            <View style={styles.CardItem}>
              <View>
                <Image
                  source={product.productImage}
                  style={{width: 130, height: 130, paddingBottom: 10}}
                />
                {cart.includes(product) ? (
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
                <Text
                  style={{
                    padding: 5,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                  }}>
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
    </ScrollView>
  );
};
export default HomeScreen;

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
});
