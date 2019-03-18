import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import { reducer as formReducer } from "redux-form"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { createEpicMiddleware, combineEpics } from "redux-observable"

import userReducer, { userEpic } from "./user"
import adminReducer, { adminEpic } from "./admin"

// Combine Epics
const rootEpic = combineEpics(userEpic, adminEpic)

// Creating Bundled Epic
const epicMiddleware = createEpicMiddleware()

// Use Middleware for call success and error reducer
const middleware = [thunk, promise(), epicMiddleware]

// Combine Reducers to return combine reducer
const reducers = combineReducers({
  admin: adminReducer,
  user: userReducer,
  form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create Store
export default createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
)

epicMiddleware.run(rootEpic)
