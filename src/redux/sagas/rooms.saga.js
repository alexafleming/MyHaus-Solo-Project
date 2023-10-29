import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addRoom(action){
    try {
        const formData = new FormData();
        formData.append('file', action.payload.image);
        formData.append('upload_preset', process.env.REACT_APP_PRESET);
        let postUrl = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;
        const response = yield axios.post(postUrl, formData);
        yield axios.post('/api/rooms', { ...action.payload, photo: response.data.secure_url});
        //yield put({ type: 'FETCH_PET_LIST' });
        // action.callback();
    } catch (error) {
        console.log('ERROR in addRoom', error);
        alert('Something went wrong!');
    }


}

function* roomSaga() {
    // Step 2: Add to our list of sagas
    // yield takeLatest('FETCH_PET_LIST', getPetList);
    yield takeLatest('ADD_ROOM', addRoom);
}

export default roomSaga;