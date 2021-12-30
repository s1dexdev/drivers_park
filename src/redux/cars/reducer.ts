import * as Type from './types';

interface IStatus {
    title: string;
    code: string;
}

interface ICar {
    id: number;
    model: string;
    mark: string;
    year: number;
    number: string;
    driver_id: number;
    status: IStatus;
}

interface ICarsState {
    cars: ICar[];
    statuses: IStatus[];
    isLoading: boolean;
    error: null | string;
}

interface IAction {
    type: string;
    payload: any;
}

const setTrue = () => true;
const setFalse = () => false;
const setNull = () => null;

const initialState: ICarsState = {
    cars: [],
    statuses: [],
    isLoading: setFalse(),
    error: setNull(),
};

export const carsReducer = (state: ICarsState, action: IAction) => {
    state = state || initialState;

    switch (action.type) {
        case Type.FETCH_CARS_REQUEST:
        case Type.FETCH_CAR_STATUSES_REQUEST:
        case Type.UPDATE_CAR_INFO_REQUEST:
        case Type.ADD_CAR_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };
        case Type.DELETE_CAR_REQUEST:
            return {
                ...state,
                isLoading: setTrue(),
                error: setNull(),
            };
        case Type.FETCH_CARS_SUCCESS:
            return {
                ...state,
                cars: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.FETCH_CAR_STATUSES_SUCCESS:
            return {
                ...state,
                statuses: action.payload,
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.ADD_CAR_SUCCESS:
            return {
                ...state,
                cars: [...state.cars, action.payload],
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.UPDATE_CAR_INFO_SUCCESS:
            return {
                ...state,
                cars: state.cars.map((car: ICar) => {
                    if (Number(car.id) === action.payload.id) {
                        car = Object.assign({}, car, action.payload);
                        return car;
                    }
                    return car;
                }),
                isLoading: setFalse(),
                error: setNull(),
            };

        case Type.DELETE_CAR_SUCCESS:
            return {
                ...state,
                cars: state.cars.filter(({ id }) => id !== action.payload),
                isLoading: setFalse(),
                error: setNull(),
            };
        case Type.FETCH_CARS_ERROR:
        case Type.FETCH_CAR_STATUSES_ERROR:
        case Type.UPDATE_CAR_INFO_ERROR:
        case Type.ADD_CAR_ERROR:
            return {
                ...state,
                cars: action.payload,
                error: action.payload,
            };
        case Type.DELETE_CAR_ERROR:
            return {
                ...state,
                isLoading: setFalse(),
                error: action.payload,
            };

        default:
            return initialState;
    }
};
