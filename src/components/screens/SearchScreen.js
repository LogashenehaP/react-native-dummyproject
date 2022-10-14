import React from 'react';
import {View, Text, TextInput, ScrollView, Image, Button} from 'react-native';
import {useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import CardItemDetails from '../../data/CardItemDetails';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CartContext} from '../common/context';

const SearchScreen = () => {
  const {cart, setCart} = useContext(CartContext);
  const [text, setText] = useState('');

  return (
    <>
      <ScrollView style={styles.CardContainer}>
        <View>
          <View style={styles.InputBox}>
            <TextInput
              value={text}
              onChangeText={newText => {
                setText(newText);
              }}
            />
            <AntDesign name="search1" size={30} color="grey" />
          </View>
        </View>
        {CardItemDetails.filter(product =>
          product.productName.toLowerCase().includes(text.toLowerCase()),
        ).map(product => {
          return (
            <>
              <View style={styles.CardItem}>
                <View>
                  <Image
                    source={product.productImage}
                    style={{width: 130, height: 120, paddingBottom: 10}}
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
                <View>
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
    </>
  );
};
export default SearchScreen;

const styles = StyleSheet.create({
  InputBox: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: 'black',
    margin: 20,
    paddingEnd: 15,
  },
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
});
