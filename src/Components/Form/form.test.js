import React from 'react';
import { create } from 'react-test-renderer';
import Form from '../../Components/Form';

describe("Form", () => {
  test("should render without throwing an error", () => {
    const form = create(<Form />).toJSON()
    expect(form).toMatchSnapshot()
  });
});
