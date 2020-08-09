import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TopScreen extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>トップ画面</Text>
        <Button
        title="新規登録"
        onPress={() => this.props.navigation.navigate('Registration')}
        ></Button>
        <StatusBar style="auto" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
