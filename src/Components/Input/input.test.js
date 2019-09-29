import React from 'react'
import Input from '../../Components/Input'
import { create } from 'react-test-renderer';

describe("Input", () => {
  test('should render without throwing an error', () => {
    const input = create(<Input type="text" name="test" />).toJSON();
    expect(input).toMatchSnapshot()
  });
});
