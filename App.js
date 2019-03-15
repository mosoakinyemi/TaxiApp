/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet,View, StatusBar,Dimensions,
        TouchableOpacity,} from 'react-native';
import AppContainer from './components/Navigator'
import {store,persistor} from './redux/reducer'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import GLOBALS from './components/Globals'

const MyStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <View style={styles.container}>
              <MyStatusBar backgroundColor= {GLOBALS.COLORS.YELLOW} barStyle="dark-content" />
                  <AppContainer />
              </View>
           </PersistGate>
      </Provider>
    );
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar:{
    height: STATUSBAR_HEIGHT
  }

});
