import React from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import styles from "./appStyle"

const App = () => (
    <View style={styles.container}>
      {/* {Header} */}
      <SafeAreaView>
        <View style={styles.headwrapper}>
          <Image source={require('./assets/images/logo1.png')} style={styles.logo}/>
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonwrapper}>
          <Text style={styles.button}>Contact us</Text>
          <Image source={require('./assets/images/Vector.png')} style={styles.arrow}></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    <ScrollView AndroidSwipeRefreshLayoutNativeComponent='automatic'>
      {/* {Titles} */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.subtitles}>Coming Soon</Text>
        <Text style={styles.subtitles2}>Bringing {'\n'} Muslims Together</Text>
      </View>

      {/* {icons} */}
      <View style={styles.titleiconwrapper}>
          <Image source={require('./assets/images/google-play.png')} style={styles.googleplaylogo}/>
          <Image source={require('./assets/images/apple-store.png')} style={styles.applestorelogo}/>
      </View>

      {/* {landing image 1} */}
      <View style={styles.landingimage}>
        <Image source={require('./assets/images/landing-image-1.png')} style={styles.landingimageimage}></Image>
      </View>

      {/* {secondTitle} */}
      <View style={styles.titlesWrapper}>
        <Text style={styles.subtitles}>Coming Soon</Text>
        <Text style={styles.subtitles2}>Get Notified{'\n'} When We Launch</Text>
      </View>

      {/* {Notify} */}
    <View style={styles.notifywrapper}>
    <TextInput style={styles.notifyInput} />
      <TouchableOpacity activeOpacity={0.8} style={styles.notifywrapper2}>
        <Text style={styles.notifytext}>Notify Me</Text>
      </TouchableOpacity>
    </View>

      {/* {landing image 2} */}
    <View style={styles.textwrapper3}>
        <Text style={styles.textwrapperfont3}>
          *Don't worry, we won't spam you
        </Text>
        <Image source={require('./assets/images/landing-image-2.png')} style={styles.landingimage2}></Image>
    </View>

  {/* {social media handle} */}
  <View style={styles.socialmedia}>
  <TouchableOpacity activeOpacity={0.5} style={styles.socialiconwrapper}><Image source={require('./assets/images/facebook.png')} style={styles.facebooklogo}></Image></TouchableOpacity>
  <TouchableOpacity activeOpacity={0.5} style={styles.socialiconwrapper}><Image source={require('./assets/images/twitter.png')} style={styles.twitterlogo}></Image></TouchableOpacity>
  <TouchableOpacity activeOpacity={0.5} style={styles.socialiconwrapper}><Image source={require('./assets/images/instagram.png')} style={styles.instagramlogo}></Image></TouchableOpacity>
  <TouchableOpacity activeOpacity={0.5} style={styles.socialiconwrapper}><Image source={require('./assets/images/tiktok.png')} style={styles.tiktoklogo}></Image></TouchableOpacity>
  <TouchableOpacity activeOpacity={0.5} style={styles.socialiconwrapper}><Image source={require('./assets/images/youtube.png')} style={styles.youtubepng}></Image></TouchableOpacity>
  </View>

    {/* {Footer} */}
    <View style={styles.footer}>
      <Text style={styles.footertext}>Copyright © 2022. Soora All rights reserved</Text>
    </View>
    </ScrollView>
    </View>
  );

export default App;