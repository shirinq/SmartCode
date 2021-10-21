import { AnyAction, CombinedState, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import createSagaMiddleware from 'redux-saga';
import combinedReducers from './slice';


//const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false, immutableCheck: false }) /*sagaMiddleware*/];


const rootReducer = (state: CombinedState<ReturnType<typeof combinedReducers>> | undefined, action: AnyAction) => {
  return combinedReducers(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware
});

//sagaMiddleware.run(rootSaga);
export default store;
