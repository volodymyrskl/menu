import { render, screen } from '@testing-library/react';
import treeData from './mock.data';
import RecursiveComponent from './components/utility/recursive.component';

test('RecursiveComponent renders correctly', () => {
  render(<RecursiveComponent node={treeData} />);

  function assertNodeRendered(nodeText: string) {
    const node = screen.getByText(nodeText);
    expect(node).toBeInTheDocument();
  }

  assertNodeRendered('Root');
  assertNodeRendered('Node 1');
  assertNodeRendered('Node 2');
  assertNodeRendered('Node 1.1.1');
  assertNodeRendered('Node 1.1.2');
});
