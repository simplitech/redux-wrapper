import * as React from 'react'
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
    <div>
      <div style={{fontSize: 24, marginBottom: 16}}>
        Current language: {language}
      </div>

      <button onClick={() => changeLanguage('pt-BR')}>
        Change to pt-BR
      </button>

      <button onClick={() => changeLanguage('en-US')}>
        Change to en-US
      </button>
    </div>
  )
}
