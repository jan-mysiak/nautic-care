import { createSlice } from '@reduxjs/toolkit';

const jobsSlice = createSlice({
    name: "jobs",
    initialState: {
        jobs: [],
        status: "",
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
        addJob: (state, action) => {
            state.jobs.concat(action.payload);
        },
        updateJob: (state, action) => {
            return state.jobs.map(j => {
                return j.id === action.payload.id
                    ? j = Object.assign({}, action.payload)
                    : j;
            })
        },
        deleteJob: (state, action) => {
            return state.jobs.filter(j => j.id !== action.payload);
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const { addJob, updateJob, deleteJob, updateJob, setStatus } = jobsSlice.actions;
export default jobsSlice.reducer;