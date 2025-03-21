import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";


//current useState value is Undefined
// !selectedTopic === Undefined (current useState value)

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    // selectedButton => "components", "JSX", "props", "state"
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic)
     
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">

       
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} key={conceptItem.title}/>)}        
        </ul>
        </section>

        <section  id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ selectedTopic === "components"} onSelect={() => handleSelect("components")}> Components </TabButton>
            <TabButton isSelected={ selectedTopic === "jsx"}onSelect={() => handleSelect("jsx")}> JSX </TabButton>
            <TabButton isSelected={ selectedTopic === "props"}onSelect={() => handleSelect("props")}> Props </TabButton>
            <TabButton isSelected={ selectedTopic === "state"}onSelect={() => handleSelect("state")}> State </TabButton>
          </menu>
        
          {!selectedTopic ? ( <p> Please select a Topic...</p> )
            : (<div id="tab-content">
              <h3> {EXAMPLES[selectedTopic].title} </h3>
              <p> {EXAMPLES[selectedTopic].description} </p>
              <pre>
                  <code>
                  {EXAMPLES[selectedTopic].code}
                  </code>
              </pre>

            </div>)}
        </section>
      </main>
    </div>
  );
}

export default App;
 