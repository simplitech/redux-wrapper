import type {Action, AnyAction} from 'redux'

export declare type ClassType<T> = {
  new (...args: any[]): T
}

export type ReducerApplied<S = any, A extends Action = AnyAction> = (
  state: S,
  action: A
) => S
