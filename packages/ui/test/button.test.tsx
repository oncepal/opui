import { render, cleanup, waitFor, screen } from '@testing-library/react';
import React from 'react';
import { App, Button } from '../src';
describe('Button testing...', () => {
  beforeEach(() => {});
  afterEach(cleanup);

  it('corretly render in <App />', async () => {
    render(
      <App>
        <Button>test button</Button>
      </App>,
    );
    const button = screen.getByText('test button');
    expect(button).toBeInTheDocument();
  });

  it('corretly render with prop "block"', async () => {
    render(
      <App>
        <Button block>test button</Button>
      </App>,
    );
    const button = screen.getByText('test button');
    expect(button).toHaveStyle({
      width: '100%',
    });
  });

  it('corretly render with prop "text"', async () => {
    render(
      <App>
        <Button text>test button</Button>
      </App>,
    );
    const button = screen.getByText('test button');
    expect(button).toHaveStyle({
      padding: '0px',
      color: '#5568FE',
      background: 'transparent',
    });
  });

  it('corretly render with prop "padding"', async () => {
    render(
      <App>
        <Button padding='2em 3em'>test button</Button>
      </App>,
    );
    const button = screen.getByText('test button');
    expect(button).toHaveStyle({
      padding: '2em 3em',
    });
  });

  it('corretly render with prop "disabled"', async () => {
    render(
      <App>
        <Button disabled>test button</Button>
      </App>,
    );
    const button = screen.getByText('test button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle({
      opacity: '.25',
    });
  });
});
