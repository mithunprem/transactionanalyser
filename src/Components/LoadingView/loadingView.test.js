import React from 'react';
import { create } from 'react-test-renderer';
import LoadingView from '../../Components/LoadingView';

describe("LoadingView", () => {
  test("should render without throwing an error", () => {
    const loadingView = create(<LoadingView />).toJSON()
    expect(loadingView).toMatchSnapshot()
  });
});
