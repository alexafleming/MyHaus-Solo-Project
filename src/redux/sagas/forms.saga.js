import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* formsDetails(action) {
  try {
    const forms = yield axios.get(`/api/forms/${action.payload}`);
    yield put({ type: 'SET_FORM_DETAILS', payload: forms });
  } catch (error) {
    console.log('Error with user login:', error);
  }
}

function* formsSaga() {
  yield takeLatest('FETCH_FORMS_DETAILS', formsDetails);
}

export default formsSaga;