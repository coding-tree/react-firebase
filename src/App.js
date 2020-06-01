import React, {useState, useEffect} from 'react';
import firebase from "./firebase";
import Person from "./Person";

const App = () => {
  const [newPersonName, setNewPersonName] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("people").get();
      setPeople(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
    fetchData();
  }, []);

  const handleNewPerson = () => {
    const db = firebase.firestore();
    db.collection("people").add({name: newPersonName});
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Add new person" value={newPersonName} onChange={event => setNewPersonName(event.target.value)} />
        <button onClick={handleNewPerson}>ADD NEW</button>
      </div>
      <div>
        {
          people.map((personInformations, index) => <Person key={index} personInformations={personInformations} />)
        }
      </div>
    </div>
  );
};

export default App;