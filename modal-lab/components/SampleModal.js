import React, {useState} from 'react';
import { Text, View, StyleSheet, Button, Modal, Image, ScrollView } from 'react-native';
import Constants from 'expo-constants';


const SampleModal = props => {
  return (
   <Modal visible={props.visible}>
          <Image style={styles.image} source={require('./insta.png')} />
            <ScrollView>
              <Text style={styles.text}>
                Instagram (commonly abbreviated to IG or Insta)[8] is an American photo and video sharing social networking service owned by Facebook, created by Kevin Systrom and Mike Krieger and originally launched on iOS in October 2010. The Android version was released in April 2012, followed by a feature-limited desktop interface in November 2012, a Fire OS app in June 2014, and an app for Windows 10 in October 2016. The app allows users to upload media that can be edited with filters and organized by hashtags and geographical tagging. Posts can be shared publicly or with pre-approved followers. Users can browse other users' content by tags and locations and view trending content. Users can like photos and follow other users to add their content to a feed, a function that seems to be discontinued as of September 2020.[needs update]
{'\n'}
Instagram was originally distinguished by only allowing content to be framed in a square (1:1) aspect ratio with 640 pixels to match the display width of the iPhone at the time. In 2015, these restrictions were eased with an increase to 1080 pixels. The service also added messaging features, the ability to include multiple images or videos in a single post, and a Stories feature—similar to its main opposition Snapchat—which allows users to post photos and videos to a sequential feed, with each post accessible by others for 24 hours each. As of January 2019, the Stories feature is used by 500 million users daily.[9]
{'\n'}
After its launch in 2010, Instagram rapidly gained popularity, with one million registered users in two months, 10 million in a year, and 1 billion as of June 2018.[10] In April 2012, Facebook acquired the service for approximately US$1 billion in cash and stock. As of October 2015, over 40 billion photos had been uploaded. Although praised for its influence, Instagram has been the subject of criticism, most notably for policy and interface changes, allegations of censorship, and illegal or improper content uploaded by users.
{'\n'}
As of January 2021, the most followed person is Portuguese professional footballer Cristiano Ronaldo with over 253 million followers. As of January 14, 2019, the most-liked photo on Instagram is a picture of an egg, posted by the account @world_record_egg, created with the sole purpose of surpassing the previous record of 18 million likes on a Kylie Jenner post. The picture currently has over 54 million likes.[11] Instagram became the 4th most downloaded mobile app of the 2010s.
              </Text>
            </ScrollView>
        <View style={styles.button}>
         <Button color='red' title='CLOSE' onPress = {props.onClose}/>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  image: {
    flexDirection: 'row',
    marginLeft: '38%',
    height: '20%',
    width: '25%',
    padding: 8,
  },
  text: {
    padding: 5,
    borderWidth: 1,
    width: '90%',
    alignSelf: "center",
    textAlign: 'justify',
    backgroundColor: '#F8B195',
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    marginLeft: '38%',
    width: '25%',
    padding: 8,
  }
});


export default SampleModal;