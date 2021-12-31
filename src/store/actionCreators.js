// Test.js의 모듈들을 연동시킵니다. 이렇게 미리 actionCreators에 연동을 시켜놓으면 containers에서 별도의 연동 없이 바로 모듈을 쓸 수 있습니다.

import { bindActionCreators } from "redux";
import * as testActions from './modules/test';

import store from "./index";

const { dispatch } = store;

export const TestActions = bindActionCreators(testActions, dispatch);

