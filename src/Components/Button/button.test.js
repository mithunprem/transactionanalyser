import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../../Components/Button';

describe("Button", () => {
  test("should render without throwing an error", () => {
    const button = create(<Button type="submit" label="Test" />).toJSON()
    expect(button).toMatchSnapshot()
  });
});
