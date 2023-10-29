import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function addRoom(){



}

function* roomSaga() {
    // Step 2: Add to our list of sagas
    // yield takeLatest('FETCH_PET_LIST', getPetList);
    yield takeLatest('ADD_ROOM', addRoom);
}

export default roomSaga;