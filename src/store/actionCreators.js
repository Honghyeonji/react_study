import { bindActionCreators } from "redux";
import * as testActions from './modules/test';

import store from "./index";

const { dispatch } = store;

export const TestActions = bindActionCreators(testActions, dispatch);

