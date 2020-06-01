import React, {useState} from 'react';
import firebase from "./firebase";

const Person = ({personInformations}) => {
    const [name, setName] = useState(personInformations.name);

    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection("people").doc(personInformations.id).set({...personInformations, name});
    };

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection("people").doc(personInformations.id).delete();
    };

    return (
        <div style={{margin: "20px 0"}}>
            <input value={name} onChange={event => setName(event.target.value)} />
            <button onClick={onUpdate}>UPDATE</button>
            <button onClick={onDelete}>DELETE</button>
        </div>
    );
};

export default Person;