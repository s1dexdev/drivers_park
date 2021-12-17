import { IDriver, IFetchDriversSuccess } from './interfaces';
// const ADD_DRIVER_REQUEST = 'ADD_DRIVER_REQUEST';
// const ADD_DRIVER_SUCCESS = 'ADD_DRIVER_SUCCESS';
// const ADD_DRIVER_ERROR = 'ADD_DRIVER_ERROR';

// const DELETE_DRIVER_REQUEST = 'DELETE_DRIVER_REQUEST';
// const DELETE_DRIVER_SUCCESS = 'DELETE_DRIVER_SUCCESS';
// const DELETE_DRIVER_ERROR = 'DELETE_DRIVER_ERROR';

export const FETCH_DRIVERS_REQUEST = 'FETCH_DRIVERS_REQUEST';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
// export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR';

export const fetchDriversRequest = () => ({
    type: FETCH_DRIVERS_REQUEST,
});

// export const fetchDriversSuccess = () => ({
//     type: FETCH_DRIVERS_SUCCESS,
// });
