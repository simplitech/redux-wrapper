import {Action} from 'redux'
import type {ReducerApplied} from '@simpli/redux-wrapper'

export declare global {
  type AppType = 'SET_LANGUAGE'

  interface AppState {
    language: string
  }

  type AppAction = AppState & Action<AppType>

  type AppReducer = ReducerApplied<AppState, AppAction>
}
