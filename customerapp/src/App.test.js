import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe("testing react app", () => {
  test('renders learn react link', () => {
    render(<App />); //HTML in memory
    const h1Element = screen.getByText(/Customer Application/i);
    expect(h1Element).toBeInTheDocument();
  });

  it ('renders customers', () => {
    render(<App />);
    let btns = screen.getAllByRole('button');
    expect(btns.length).toBe(3);
  })

  it ('delete customers', () => {
    render(<App />);
    let btns = screen.getAllByRole('button');
    fireEvent.click(btns[1]);
    expect(btns.length).toBe(3);
  })

  it ('filter customers', () => {
    render(<App />);
    let txtBox = screen.getByPlaceholderText('search by name');
    fireEvent.change(txtBox, {'target': {'value': 'sparrow'}});
    let btns = screen.getAllByRole('button');
    expect(btns.length).toBe(2);
  })
})
