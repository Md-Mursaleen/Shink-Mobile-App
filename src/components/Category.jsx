/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Category = ({ heading, categories }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.headingTextStyle}>{heading}</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.categoryItemContainer}>
            <Text style={styles.categoryTextStyle}>{category}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingTextStyle: {
    marginBottom: 13,
    fontSize: 16.5,
    fontWeight: '600',
    fontFamily: 'AvenirNext-Bold',
    color: '#000000',
    lineHeight: 21,
  },
  categoryContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: "flex-start",
  },
  categoryItemContainer: {
    paddingVertical: 14,
    paddingHorizontal: 17,
    marginHorizontal: 5,
    marginVertical: 7.5,
    flexBasis: 'auto', // This will allow the items to size themselves based on their content
    backgroundColor: '#f0f3f6',
    borderRadius: 24,
  },
  categoryTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'AvenirNext-Regular',
    color: '#282c3f',
    lineHeight: 16,
  },
});

export default Category;
