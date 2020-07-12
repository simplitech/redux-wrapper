import * as React from 'react'
import {Button, StyleSheet, Text, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import type {RootState} from './store/RootStore'
import {RootStore} from './store/RootStore'

export default function Home() {
  const {language} = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const changeLanguage = (val: string) => {
    dispatch(RootStore.app.actions.setLanguage(val))
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, marginBottom: 16}}>
        Current language: {language}
      </Text>

      <Button
        title={'Change to pt-BR'}
        onPress={() => changeLanguage('pt-BR')}
      />

      <Button
        title={'Change to en-US'}
        onPress={() => changeLanguage('en-US')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
