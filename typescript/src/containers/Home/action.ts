
import {createAction} from 'redux-actions';
import ApiRequest from '../../libs/api.request';
import HOME from './const';

export const getData = createAction(HOME.LIST, async() => {
  return await ApiRequest('/data/homelist.json');
});