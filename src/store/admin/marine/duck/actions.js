import * as type from './action-types'

export const fetchClubs = data => ({
  type: type.FETCH_CLUB_LIST,
  payload: data
})
