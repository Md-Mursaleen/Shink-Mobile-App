/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import Homepage from './Homapage';
import Loader from './Loader';
const HomeScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Replace 'your-url' with the actual URL you want to fetch from
        const response = await fetch('https://wphfsmzto7.execute-api.ap-south-1.amazonaws.com/default/pythonDB');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        {/* Replace ActivityIndicator with your Loader component if you have a custom one */}
        <Loader size="large" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.subContainer}>
        <ScrollView>
          {users.length !== 0 && <Homepage users={users} />}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
