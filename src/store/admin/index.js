import { combineReducers } from "redux"
import { combineEpics } from "redux-observable"

import clubReducer, { clubEpic } from "./club"
import marineReducer, { marineEpic } from "./marine"
import menuReducer, { menuEpic } from "./menu"
import sliderReducer, { sliderEpic } from "./slider"
import containReducer, { containEpic } from "./contain"

export const adminEpic = combineEpics(
  clubEpic,
  marineEpic,
  menuEpic,
  sliderEpic,
  containEpic
)

const adminReducer = combineReducers({
  club: clubReducer,
  contain: containReducer,
  menu: menuReducer,
  marine: marineReducer,
  slider: sliderReducer
})

export default adminReducer
