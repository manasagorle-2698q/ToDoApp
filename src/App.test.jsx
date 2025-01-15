import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import this for extended matchers like toBeInTheDocument
import App from './App';
 
test('renders To-Do list input', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task /i);
  expect(inputElement).toBeInTheDocument();
});
 
test('adds a task to the list', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task /i);
  const addButton = screen.getByText(/create/i);
  fireEvent.change(inputElement, { target: { value: 'Test task' } });
  fireEvent.click(addButton);
  expect(screen.getByText('Test task')).toBeInTheDocument();
});