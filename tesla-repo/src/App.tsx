import './App.scss';
import { FilterForm } from './views/homepage/filter-form';
import { HomeBanner } from './views/homepage/home-banner';

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <FilterForm />
    </div>
  );
}

export default App;
