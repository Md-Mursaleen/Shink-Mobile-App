/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Category = ({ heading, categories }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.heading}>{heading}</Text>
      <View style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "flex-start",
  },
  category: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    flexBasis: 'auto', // This will allow the items to size themselves based on their content
    backgroundColor: '#F0F3F6',
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#000000',
  },
});

export default Category;
