import './MidContainer.css'
import Container from 'react-bootstrap/Container'
import NotesExpanded from './NotesExpanded';
import NoteListItem from './NoteListItem'
import { data } from './data.js'
import { useState } from 'react';


let items = data;
let itemList = (sayHello) => items.sort((a,b) => sortByDate(a,b)).reverse().map((item, index) =>
    {
        return (
            <div key={index} onClick={() => sayHello(index)}>
                <NoteListItem title={item.title} summary={item.summary} date={item.date}></NoteListItem>
                <hr className="line-break  mt-3 mb-2" />
            </div>
        )
    }
)


function sortByDate(a,b){
    return new Date(a.date) - new Date(b.date)
}

function MidContainer(){ 
    const [selectedNote, setSelectedNote] = useState(items[0])

    function handleNoteClick(index){
        setSelectedNote(items[index]);
    }

    return (
        <div className="body-content">
            <Container fluid>
                <div>
                    <div className="list p-2 pt-4 left-scrollable">
                        {itemList(handleNoteClick)}
                    </div>
                    <div className="p-2 right-scrollable">
                        <NotesExpanded 
                            title={selectedNote.title} 
                            summary={selectedNote.summary} 
                            date={selectedNote.date}>
                        </NotesExpanded>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default MidContainer