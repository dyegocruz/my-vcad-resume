import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import _ from 'lodash';
import { getGitHubData } from '../src/myVcard/actions/GitHubAction';
import { getMyVcardData } from '../src/myVcard/actions/MyVcardAction';
import ActionTypes from '../src/common/ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('GitHub Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should create an action to request GitHub Data', () => {
    const mockedStore = mockStore({});
    mockedStore.dispatch(getGitHubData());
    const actions = mockedStore.getActions();
    const expectedPayload = [
      { type: ActionTypes.GITHUB_DATA_REQUESTED },
      { type: ActionTypes.GITHUB_DATA_FETCHED, action: {} },
      { type: ActionTypes.GITHUB_DATA_REJECTED, action: {} },
    ];
    const filteredExpected = _.filter(expectedPayload, actions[0]);
    expect(actions).toEqual(filteredExpected);
  });
});

describe('MyVcard Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should create an action to fetched Vcard Data', () => {
    const mockedStore = mockStore({});
    mockedStore.dispatch(getMyVcardData());
    const actions = mockedStore.getActions();
    const expectedPayload = [
      { type: ActionTypes.MYVCARD_DATA_REQUESTED },
      { type: ActionTypes.MYVCARD_DATA_FETCHED, myVcard: {} },
      { type: ActionTypes.MYVCARD_DATA_REJECTED, action: {} },
    ];
    const filteredExpected = _.filter(expectedPayload, actions[0]);
    expect(actions).toEqual(filteredExpected);
  });
});
