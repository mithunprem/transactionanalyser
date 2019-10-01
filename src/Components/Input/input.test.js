import React from 'react';
import { create } from 'react-test-renderer';
import Input from '../../Components/Input';

describe("Input", () => {
  const div = document.createElement('div');
  div.setAttribute("id", "input");
  document.body.appendChild(div);

  test("should render without throwing an error", () => {
    const onChange = () => {};
    const input = create(<Input name="input" placeholder="test input" value="test" onChange={onChange}/>).toJSON()
    expect(input).toMatchSnapshot()
  });
});
