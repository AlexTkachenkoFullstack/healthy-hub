import { createSlice } from '@reduxjs/toolkit'

export const dailyGoalSlice = createSlice({
  name: 'goal',
  initialState: {calories:0, water:0},
  reducers: {
      updateGoalCalories(state, action) { state.calories=action.payload },
      updateGoalWater(state, action){state.water=action.payload}
        },
      }
)

export const { updateGoalCalories, updateGoalWater } = dailyGoalSlice.actions


// dispatch(updateCalories(1700))