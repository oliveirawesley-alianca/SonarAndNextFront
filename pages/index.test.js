import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home Component', () => {
  it('renders the main title', () => {
    render(<Home />);
    const title = screen.getByRole('heading', { name: /Welcome to Next\.js!/i });
    expect(title).toBeInTheDocument();
  });

  it('renders the documentation link', () => {
    render(<Home />);
    const documentationLink = screen.getByRole('link', { name: /Documentation →/i });
    const documentationDescription = screen.getByText(
      'Find in-depth information about Next.js features and API.'
    );
    expect(documentationLink).toBeInTheDocument();
    expect(documentationDescription).toBeInTheDocument();
  });

  it('renders the learn link', () => {
    render(<Home />);
    const learnLink = screen.getByRole('link', { name: /Learn →/i });
    const learnDescription = screen.getByText(
      'Learn about Next.js in an interactive course with quizzes!'
    );
    expect(learnLink).toBeInTheDocument();
    expect(learnDescription).toBeInTheDocument();
  });

  it('renders the examples link', () => {
    render(<Home />);
    const examplesLink = screen.getByRole('link', { name: /Examples →/i });
    const examplesDescription = screen.getByText(
      'Discover and deploy boilerplate example Next.js projects.'
    );
    expect(examplesLink).toBeInTheDocument();
    expect(examplesDescription).toBeInTheDocument();
  });

  it('renders the deploy link', () => {
    render(<Home />);
    const deployLink = screen.getByRole('link', { name: /Deploy →/i });
    const deployDescription = screen.getByText(
      'Instantly deploy your Next.js site to a public URL with Vercel.'
    );
    expect(deployLink).toBeInTheDocument();
    expect(deployDescription).toBeInTheDocument();
  });
});
