import { render, screen } from '@testing-library/react';
import App from './App';


describe(
  "renders ok app",
  () => {
    beforeEach(() => {
      render(<App thirdLink="Perico de los Palotes" />);
    }) 
    test('renders learn react link', () => {
     const linkElement = screen.getByText(/aprender react/i);
      expect(linkElement).toBeInTheDocument();
    });
    
    test('renders con alfatec link', () => {
      const linkElement = screen.getByText(/con alfatec/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('renders con alfatec link', () => {
      const linkElement = screen.getByText(/perico de los palotes/i);
      expect(linkElement).toBeInTheDocument();
    });
  }
)

