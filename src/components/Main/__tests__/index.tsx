import { render } from '@testing-library/react';
import Main from '../.';

describe('<Main />', () => {
  it('snapshot', () => {
    const { container } = render(<Main />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main>
          <h1>
            React Avançado
          </h1>
        </main>
      </div>
    `);
  });

  it('must render a heading', () => {
    const { getByRole } = render(<Main />);
    expect(
      getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();
  });
});
