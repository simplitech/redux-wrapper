import {ReducerWrapper} from '@simpli/redux-wrapper'
import {LanguageDispatcher} from './dispatchers/LanguageDispatcher'

export class AppReducer extends ReducerWrapper<AppType, AppState, AppAction> {
  protected readonly initialState: AppState = {
    language: 'en-US',
  }

  protected readonly dispatchers = [LanguageDispatcher]

  readonly actions = {
    setLanguage: (language: string) => {
      return this.commit('SET_LANGUAGE', {language})
    },
  }
}
