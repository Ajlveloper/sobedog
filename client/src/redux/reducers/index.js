import {
    GET_DOGS,
    GET_TEMPERAMENT_FILTER,
    GET_TEMPERAMENTS,
    GET_BREED_FILTER,
    GET_FILTER_CREATED,
    ORDER_ASC_DES,
    ORDER_ORDER_WEIGHT,
    SEARCH_BREED
} from '../actions/index';


const initialState = {
    dogs: [],
    temperamentAll: [],
    dogsSecond: [],
    breedDogs: []
}

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: action.payload,
                dogsSecond: action.payload,
                breedDogs: action.payload,
                loading: action.loading
            };
        case GET_TEMPERAMENTS:
            return {
                ...state, temperamentAll: action.payload.filter(t => t.name)
            }
        case GET_TEMPERAMENT_FILTER:
            const allDogs = state.dogsSecond;
            const filterDogs = action.temperament === 'allTemperaments' ? allDogs : allDogs.filter(d => d.temperaments.includes(action.temperament))
            return {
                ...state, dogs: filterDogs
            }
        case GET_BREED_FILTER:
            const allBreed = state.breedDogs;
            const filterBreed = action.breed === 'allDogs' ? allBreed : allBreed.filter(d => d.name.includes(action.breed))
            return {
                ...state, dogs: filterBreed
            }
        case GET_FILTER_CREATED:
            const create = state.dogsSecond;
            const filterCreate = action.create === 'creados' ? create.filter(d => d.createDB) : create.filter(d => !d.createDB);
            return {
                ...state, dogs: filterCreate
            }
        case ORDER_ASC_DES:
            let order = action.order === 'ascendent' ? state.dogs.sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                } if (a.name < b.name) {
                    return -1
                } return 0
            }) : state.dogs.sort((a, b) => {
                if (a.name > b.name) {
                    return -1
                } if (a.name < b.name) {
                    return 1
                } return 0
            })
            return {
                ...state, dogs: order
            }
        case ORDER_ORDER_WEIGHT:
            let orderWeight = action.weight === 'min' ?
                state.dogs.sort((a, b) => a.weight_min - b.weight_min) : state.dogs.sort((a, b) => a.weight_max - b.weight_max)
            return {
                ...state, dogs: orderWeight
            }
        case SEARCH_BREED:
            let breed = state.dogsSecond;
            let searchBreed = breed.filter(b => b.name.toLowerCase().includes(action.breed.toLowerCase()) || 'Not found');
            return {
                ...state, dogs: searchBreed
            }

        default:
            return state

    }
}

export default reduce;