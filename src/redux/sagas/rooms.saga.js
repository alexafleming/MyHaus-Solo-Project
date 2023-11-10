import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getRoomList() {
    try {
        let response = yield axios.get('/api/rooms');
        // Pass to the reducer
        yield put({ type: 'SET_ROOM_LIST', payload: response.data});
    } catch (error) {
        console.log('ERROR in geRoomList', error);
        alert('Something went wrong!');
    }
}
function* addRoom(action){
    try {
        const cloudName = process.env.REACT_APP_CLOUD_NAME;
        const cloudPreset = process.env.REACT_APP_PRESET;

        console.log("Cloud Name", cloudName);
        console.log("Cloud Preset", cloudPreset);
        const formData = new FormData();
        formData.append('file', action.payload.image);
        formData.append('upload_preset', cloudPreset);
        let postUrl = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        const response = yield axios.post(postUrl, formData);
        yield axios.post('/api/rooms', { ...action.payload, photo: response.data.secure_url});
        yield put({ type: 'FETCH_ROOM_LIST' });
        // action.callback();
    } catch (error) {
        console.log('ERROR in addRoom', error);
        alert('Something went wrong!');
    }


}

function* roomSaga() {
    // Step 2: Add to our list of sagas
    yield takeLatest('FETCH_ROOM_LIST', getRoomList);
    yield takeLatest('ADD_ROOM', addRoom);
}

export default roomSaga;