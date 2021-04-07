import React, {useState, useEffect} from 'react';
import Table from './Table';
import Form from './Form';
import axios from 'axios';

function MyApp(){
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => {
                setCharacters(res.data.users_list)
            })
            .catch(function (error) {
                //Not handling, only logging
                console.log(error);
            });
    }, [])
    function removeOneCharacter (index) {
        const updated = characters.filter((character, i) => {
            return i !== index
        });
        setCharacters(updated);
    }

    function updateList(person){
        setCharacters([...characters, person]);
    }
    return(
        <div className="container">
            <Table characterData={characters} removeCharacter={removeOneCharacter} />
            <Form handleSubmit={updateList} />
        </div>
    );

}

export default MyApp;
