import Rx from 'rxjs/Rx';
import { Observable } from "rxjs"
import { mergeMap } from "rxjs/operators"
import { combineEpics, ofType } from "redux-observable"

import * as api from "./api"
import * as type from "./action-types"

const fetchClubEpic = action$ =>
action$.pipe(
  ofType(type.FETCH_CLUB_LIST),
  mergeMap(action => {
    return Observable.fromPromise(api.getClubs(action.payload))
      .map(payload => ({
        type: type.FETCH_CLUB_LIST_SUCCESS,
        payload
      }))
      .catch(error =>
        Observable.of({
          type: type.FETCH_CLUB_LIST_ERROR,
          payload: { error }
        })
      )
  })
)
export default combineEpics(fetchClubEpic)
