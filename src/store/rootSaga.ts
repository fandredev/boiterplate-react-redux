import { takeLatest } from 'redux-saga/effects'
import * as types from '../store/types'


function always() { }

export default function* root() {
  yield takeLatest([types.GET_REQUEST], always)
}
