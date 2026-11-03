import { render, screen } from '@testing-library/react';

import Terminal from '../src/components/terminal/Terminal';

describe('Terminal', () => {
  it('renders the window title and a prompt', () => {
    render(<Terminal lines={[{ cmd: 'whoami', out: 'kishore' }]} />);
    expect(screen.getByText('kishore@webbie: ~')).toBeInTheDocument();
    expect(screen.getAllByText('$').length).toBeGreaterThan(0);
  });
});
