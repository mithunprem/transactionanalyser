import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../../Components/Button';

describe("Button", () => {

  const onClick = () => {};

  test("should render without throwing an error", () => {
    const button = create(<Button type="submit" label="Test" onClick={onClick}/>).toJSON()
    expect(button).toMatchSnapshot()
  });

  test("should render a disabled button when a disabled prop is passed to the component", () => {
    const button = create(<Button type="submit" label="Test" disabled={true} onClick={onClick} />).toJSON()
    expect(button).toMatchSnapshot()
  });

});
