import { useState } from 'react'; // React 

import { CORE_CONCEPTS } from './data.js';
import Header from './components/header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  // React hook that allows you to add state to a functional component.
  const [ selectedTopic, setSelectedTopic ] = useState('Please click a button'); 

  // selectedButton => 'Components', 'JSX', 'Props', or 'State'.
  function handleSelect(selectedButton) {
    tabContent = selectedButton;
    console.log('selectedButton:', selectedButton);
  }


  return (
    <div>  
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} 
            />
            {/* This notation is called the "spread operator" and is used to pass all the properties of an object as props to a component. */}
            {/* This is equivalent to passing each property individually, as seen in the first CoreConcept component (element 0). */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* 
                The children prop ('Components') is passed between the opening and closing tags.
                The onSelect prop receives an arrow function that calls handleSelect with 'components' as an argument.
                This ensures handleSelect is called with the correct parameter when the button is clicked.
            */}
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu> 
          {tabContent}
        </section>
      </main>g
    </div>
  );
}


export default App;
