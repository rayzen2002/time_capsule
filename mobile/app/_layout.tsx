import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { BaiJamjuree_700Bold } from '@expo-google-fonts/bai-jamjuree'
import { styled } from 'nativewind'
import React, { useEffect, useState } from 'react'
import { ImageBackground } from 'react-native'
import blurBg from '../src/assets/bg-blur.png'
import Stripes from '../src/assets/stripes.svg'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import * as SecureStore from 'expo-secure-store'

const StyledStripes = styled(Stripes)

export default function layout() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState<
    null | boolean
  >(null)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  useEffect(() => {
    SecureStore.getItemAsync('token').then(token=> token{
      setIsUserAuthenticated(!!token)
    })
  }, [])

  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <div>
      <ImageBackground
        source={blurBg}
        className="relative flex-1  bg-gray-900 "
        imageStyle={{ position: 'absolute', left: '-100%' }}
      >
        <StyledStripes className="absolute left-2" />
        <StatusBar style="auto" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'transparent' },
          }}
        > 
          <Stack.Screen name='index' redirect={isUserAuthenticated}/>
          <Stack.Screen name='new'/>
          <Stack.Screen name='memories'/>
        </Stack>
      </ImageBackground>
    </div>
  )
}
