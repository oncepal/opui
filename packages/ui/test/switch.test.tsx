import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { App, Switch } from '../src';
import vars from '../src/styles/vars';
describe('Switch testing...', () => {
  beforeEach(() => {});
  afterEach(cleanup);

  it('corretly render with theme', async () => {
    render(
      <App>
        <Switch />
      </App>,
    );
    const swi = screen.getAllByTestId;

    expect(swi).toBeInTheDocument();
  });

  it('corretly render without theme', async () => {
    render(<Switch />);
    const swi = screen.getAllByTestId;

    expect(swi).toBeInTheDocument();
    expect(swi).toHaveStyle({
      background: vars.colors.purple,
    });
  });

  it('corretly render with prop "on"', async () => {
    render(
      <App>
        <Switch on={true}>test swi</Switch>
      </App>,
    );
    const swi = screen.getByText('test swi');
  });

  it('corretly render with click', async () => {
    const onChange = jest.fn();
    render(
      <App>
        <Switch trackColorOn={'red'} on={true} onChange={onChange}>
          test swi
        </Switch>
      </App>,
    );
    const swi = screen.getByText('test swi');

    fireEvent.change(swi, {
      target: { value: 'JavaScript' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(swi).toHaveStyle({
      background: 'red',
    });
  });

  it('corretly render with prop "disabled"', async () => {
    render(
      <App>
        <Switch disabled>test swi</Switch>
      </App>,
    );
    const swi = screen.getByText('test swi');
    expect(swi).toBeDisabled();
    expect(swi).toHaveStyle({
      opacity: '.25',
    });
  });
});
