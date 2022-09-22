import App from './App';
import renderer from 'react-test-renderer'
import GitHubCard from './components/GitHubCard';

test('renders a snapshot of Github card', () => {
  const tree = renderer.create(<GitHubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
})