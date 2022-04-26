import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity,Image, Dimensions, StyleSheet, Button,   } from 'react-native'
import { globalStyles, FONTS, COLORS } from '../assets/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

const { width: windowWidth } = Dimensions.get('window');

var Sound = require('react-native-sound');
 Sound.setCategory('Playback');   
var audio: { getDuration: () => string; 
  getNumberOfChannels: () => string;
   setVolume: (arg0: number) => void; 
   release: () => void; 
   isPlaying: () => any;
   isLoaded:()=>any;
    pause: () => void;
     play: (arg0: (success: any) => void) => void; 
    getCurrentTime:(arg0: any) => void;
    setCurrentTime:(arg0: any)=>number;
    }
const Radio = ({datos,navigation}:any) => {
    const [playing, setPlaying] = useState(false);
    const [data, setSliderData] = useState(0);
    const [percentage, setPercentage] = useState(0)
    // const [currentTime, setCurrentTime] = useState(0)

    // let audioRef:any = useRef()
    const timerRef:any = React.useRef();
    
    
    useEffect(() => {
      
      audio = new Sound(datos.audio ,null,(  error: any) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }

         setSliderData(parseInt(audio.getDuration()))
        // if loaded successfully
        console.log(
          'duration in seconds: ' +
            audio.getDuration() +
            'number of channels: ' +
            audio.getNumberOfChannels(),
        );
      },
      );
        audio.setVolume(1);
        return () => {
          audio.release();
        };
      }, []);
      const playPause = () => {
             
        if (audio.isPlaying()) {
          audio.pause();
          setPlaying(false);
          console.log("pausa");
        } else {
          setPlaying(true);
          timerRef.current = setInterval(() => {
                    audio.getCurrentTime((seconds: number,isPlaying:boolean) => {
                      setPercentage(seconds); // HERE is time of current player
                    });                   
                  }, 300);  
          console.log("play");
          audio.play((success: any) => {
            
            if (success) {
              setPlaying(false);
              console.log('successfully finished playing');
            } else {
              setPlaying(false);
              console.log('playback failed due to audio decoding errors');
            }
          });
        }
      };               
      
     
      const onChange = (e:any) => {
        const audio = timerRef.current
        audio.currentTime = (audio.duration / 100) * e.target.value
        setPercentage(e.target.value)
    
      }
   
   
    return (
        
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
              <TouchableOpacity style={styles.playBtn} onPress={playPause}>
                  <Ionicons
                  name={playing ? 'ios-pause' : 'ios-play'}
                  size={36}
                  color={'#000'}
                  />
              
              </TouchableOpacity>
              <View style={{flexDirection:"row"}}>
                <Slider
                  maximumValue={data}
                  minimumValue={0}
                  minimumTrackTintColor="#FFF"
                  maximumTrackTintColor="#01579B"
                  step={1}
                  value={percentage}
                  onValueChange={
                    (onChange)
                  }
                  thumbTintColor="#1B5E20"
                  style={{width: 320, height: 40,top:10,left:-10}}
                />
                {/* <Text>{audio.getDuration()}</Text> */}
              </View>
              
            </View>
            <View style={{flexDirection:"row",width:300,height:20,left:60,bottom:20,justifyContent:"space-between"}}>
                <Text style={{color:"white"}}>0:00</Text>
                <Text style={{color:"white"}}>{Math.round(data/60)}:00</Text>
              </View>
        </View>   
    )
}

export default Radio



const styles = StyleSheet.create({
    container: {
     with:windowWidth,
     height:70,   
     top:30,
     
    },
    playBtn: {
      padding: 10,
    },
  });

function setCurrentPlayTime(seconds: any) {
  throw new Error('Function not implemented.');
}
function stopSound() {
  throw new Error('Function not implemented.');
}

function setCurrentTime(seconds: any) {
  throw new Error('Function not implemented.');
}

