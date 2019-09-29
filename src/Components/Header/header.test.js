import React from 'react';
import { create } from 'react-test-renderer';
import Header from '../../Components/Header';

describe("Header", () => {
  test("should render without throwing an error", () => {
    const header = create(<Header />).toJSON()
    expect(header).toMatchSnapshot()
  });
});
