import { useState } from 'react'; // React 

import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';
import Header from './components/header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  // React hook that allows you to add state to a functional component.
  const [ selectedTopic, setSelectedTopic ] = useState(); 

  // selectedButton => 'Components', 'JSX', 'Props', or 'State'.
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log('selectedButton:', selectedButton);
  }

  // tabContent: under the 'Examples' section, the content that appears when a tab is selected.
  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
    );
  }

  return (
    <div>  
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => ( 
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* OLD WAY */}
            {/*<CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} 
            />
            // This notation is called the "spread operator" and is used to pass all the properties of an object as props to a component. 
            // This is equivalent to passing each property individually, as seen in the first CoreConcept component (element 0). 
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
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
            <TabButton isSelected={selectedTopic === 'components'} 
                       onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} 
                       onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
                       onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} 
                       onSelect={() => handleSelect('state')}>State</TabButton>
          </menu> 
          {tabContent}
        </section>
      </main>
    </div>
  );
}


export default App;
