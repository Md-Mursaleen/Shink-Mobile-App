import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Category = ({ heading, categories }) => {
  return (
    <View style={styles.container}>
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
  container: {
    padding: 10,
  },
  heading: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 10,
    color:'black',
    
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "flex-start",
    
  },
  category: {
    backgroundColor: '#F0F3F6',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    margin: 5,
    flexBasis: 'auto', // This will allow the items to size themselves based on their content
  },
  categoryText: {
    fontSize: 14,
    fontWeight:'400',
    color:'black'

  },
});

export default Category;
