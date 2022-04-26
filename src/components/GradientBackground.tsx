import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { GradientContext } from '../context/GradientContext';
// import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors, setPrevMainColors } = useContext( GradientContext );

    // const { opacity, fadeIn, fadeOut } = useFade()

    // useEffect(() => {
    //     fadeIn( () => {
    //         setPrevMainColors( colors );
    //         fadeOut(0);
    //     })

    // }, [ colors ])



    return (
        <View style={{ flex: 1 }}>
           
            <LinearGradient 
                colors={['white', prevColors.primary, prevColors.secondary ]}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.3, y: 0.2 }}
                end={{ x: 0.5, y: 0.8}}
            />

            <Animated.View
                style={{ 
                    ...StyleSheet.absoluteFillObject,
                    // opacity
                }}
            >
                <LinearGradient 
                    colors={['white', colors.primary, colors.secondary ]}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.3, y: 0.2 }}
                    end={{ x: 0.3, y: 0.8}}
                />
            </Animated.View>


            { children }
        </View>
    )
}
