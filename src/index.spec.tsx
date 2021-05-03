import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EdiText from '.';
import { cancelOnConflictMessage } from './utils';
import { useState } from 'react';

function Controlled() {
  const [editing, setEditing] = useState(true);
  return (
    <>
      <button onClick={() => setEditing((e) => !e)}>toggle</button>
      <EdiText value={VALUE} editing={editing} onSave={() => false} />
    </>
  );
}

const VALUE = 'Hello World';

test('renders without error', () => {
  render(<EdiText value={VALUE} onSave={() => false} />);
  expect(screen.getByText(VALUE)).toBeInTheDocument();
});

test('pressing edit button activates edit mode', () => {
  const { container } = render(<EdiText value={VALUE} onSave={() => false} />);
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('pressing cancel button cancels the edit mode', () => {
  const { container } = render(<EdiText value={VALUE} onSave={() => false} />);
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  const cancelBtn = container.querySelector('[editext="cancel-button"]');
  cancelBtn && fireEvent.click(cancelBtn, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
});

test('pressing save button saves the value', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(<EdiText value={VALUE} onSave={() => false} />);
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(afterValue)).toBeInTheDocument();
});

test('Pressing Enter saves the value', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} submitOnEnter onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(afterValue)).toBeInTheDocument();
});

test('Pressing Escape cancels the edit mode', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} cancelOnEscape onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  fireEvent.keyDown(input, { key: 'Escape', code: 'Esc' });
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(VALUE)).toBeInTheDocument();
});

test('Edit mode becomes active when clicked on the text', () => {
  const { container } = render(
    <EdiText value={VALUE} editOnViewClick onSave={() => false} />
  );
  const viewContainer = container.querySelector('[editext="view"]');
  viewContainer && fireEvent.click(viewContainer, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('Hint message does appear in edit mode', () => {
  const hint = 'At least 8 characters...';
  const { container } = render(
    <EdiText value={VALUE} hint={hint} onSave={() => false} />
  );
  try {
    expect(screen.getByText(hint)).toBeInTheDocument();
  } catch (error) {
    expect(1).toBe(1);
  }
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(screen.getByText(hint)).toBeInTheDocument();
});

test('renders correct input type based on prop', () => {
  const { container } = render(
    <EdiText type="number" value={VALUE} onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(container.querySelector('input[type="number"]')).toBeInTheDocument();
});

test('renders texarea corretly', () => {
  const { container } = render(
    <EdiText type="textarea" value={VALUE} onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(container.querySelector('textarea')).toBeInTheDocument();
});

test('using cancelOnUnfocus and submitOnUnfocus together warns the user', () => {
  const warn = jest.spyOn(global.console, 'warn').mockImplementation(() => {});
  render(
    <EdiText
      value={VALUE}
      submitOnUnfocus={true}
      cancelOnUnfocus={true}
      onSave={() => false}
    />
  );
  expect(warn).toBeCalledWith(cancelOnConflictMessage);
});

test('default validation handling is working', () => {
  const v = jest.fn((v: string) => v.length > 10);
  const { container } = render(
    <EdiText validation={v} value={VALUE} onSave={(v) => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Hello' } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  expect(input).toBeInTheDocument();
  expect(screen.getByText('Invalid Value'));
  expect(v).toBeCalledTimes(1);
});

test('custom validation handling is working', () => {
  const v = jest.fn((v: string) => v.length > 10);
  const message = 'At least 10 character...';
  const { container } = render(
    <EdiText
      validation={v}
      value={VALUE}
      onSave={(v) => false}
      validationMessage={<span>{message}</span>}
    />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Hello' } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  expect(input).toBeInTheDocument();
  expect(screen.getByText(message));
  expect(v).toBeCalledTimes(1);
});

test('onValidationCancel is working', () => {
  const v = jest.fn((v: string) => v.length > 10);
  const f = jest
    .fn((v: string) => console.log('validation failed.'))
    .mockImplementation(() => {});
  const { container } = render(
    <EdiText
      validation={v}
      value={VALUE}
      onSave={(v) => false}
      onValidationFail={f}
    />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: 'Hello' } });
  const saveBtn = container.querySelector('[editext="save-button"]');
  saveBtn && fireEvent.click(saveBtn, new MouseEvent('click'));
  expect(input).toBeInTheDocument();
  expect(v).toBeCalledTimes(1);
  expect(f).toBeCalledTimes(1);
});

test('unfocusing saves the form', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} submitOnUnfocus onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  fireEvent.blur(input);
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(afterValue)).toBeInTheDocument();
});

test('unfocusing cancels the form', () => {
  const afterValue = 'Bye Bye World';
  const { container } = render(
    <EdiText value={VALUE} cancelOnUnfocus onSave={() => false} />
  );
  const button = container.querySelector('[editext="edit-button"]');
  button && fireEvent.click(button, new MouseEvent('click'));
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  fireEvent.change(input, { target: { value: afterValue } });
  fireEvent.blur(input);
  expect(input).not.toBeInTheDocument();
  expect(screen.getByText(VALUE)).toBeInTheDocument();
});

test('pressing enter activates the edit mode', () => {
  const { container } = render(
    <EdiText value={VALUE} startEditingOnEnter onSave={() => false} />
  );
  const viewContainer = container.querySelector('[editext="view"]');
  viewContainer && fireEvent.focusIn(viewContainer);
  viewContainer &&
    fireEvent.keyDown(viewContainer, { key: 'Enter', code: 'Enter' });
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
});

test('controlled editing mode is working', () => {
  render(<Controlled />);
  const button = screen.getByText('toggle');
  const input = screen.getByDisplayValue(VALUE);
  expect(input).toBeInTheDocument();
  button && fireEvent.click(button, new MouseEvent('click'));
  expect(input).not.toBeInTheDocument();
});
