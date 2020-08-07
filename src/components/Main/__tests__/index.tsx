import { render } from '@testing-library/react';
import Main from '../.';

describe('<Main />', () => {
  it('snapshot', () => {
    const { container } = render(<Main />);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <main
          class="styled__Wrapper-ngslp9-0 kCoOxt"
        >
          <img
            alt="Imagem de um átomo e React Avançado escrito ao lado."
            class="styled__Logo-ngslp9-1 hklGLi"
            src="/img/logo.svg"
          />
          <h1
            class="styled__Title-ngslp9-2 dOdxOs"
          >
            React Avançado
          </h1>
          <h2
            class="styled__Description-ngslp9-3 ckgVfH"
          >
            TypeScript, ReactJS, NextJS e Styled Components
          </h2>
          <img
            alt="Um desenvolvedor de frente para uma tela com código."
            class="styled__Illustration-ngslp9-4 chTPnW"
            src="/img/hero-illustration.svg"
          />
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

  it('must render the correct background color', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
