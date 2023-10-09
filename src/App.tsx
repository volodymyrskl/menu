import './App.scss';
import treeData from './mock.data';
import RecursiveComponent from './components/utility/recursive.component';

function App() {
  return (
    <div className="menu">
      <RecursiveComponent node={treeData} />
    </div>
  );
}

export default App;
