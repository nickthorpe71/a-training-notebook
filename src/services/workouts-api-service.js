import config from '../config'
import TokenService from './token-service'

const WorkoutsApiService = {
  getWorkoutsByDate(date) {
    const userId = Number(TokenService.getUserId());
    return fetch(`${config.API_ENDPOINT}/workouts/${userId}?workout_date=${date}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getWorkoutsByMonth(month) {
    const userId = Number(TokenService.getUserId());
    return fetch(`${config.API_ENDPOINT}/workouts/${userId}?month=${month}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },

  getWorkoutById(id) {
    const userId = Number(TokenService.getUserId());
    return fetch(`${config.API_ENDPOINT}/workouts/${userId}?workout_id=${id}`, {
      headers: {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default WorkoutsApiService;