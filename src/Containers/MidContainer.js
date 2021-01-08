import './MidContainer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NotesExpanded from './NotesExpanded';
import NoteListItem from './NoteListItem'
import { data } from './data.js'

let items = data;
let itemList = items.map((item, index) =>
    (
        <span key={index}>
            <NoteListItem title={item.title} summary={item.summary} date={item.date}></NoteListItem>
            <hr className="line-break  mt-3 mb-2" />
        </span>
    )
)

function MidContainer(){
    return (
        <div className="body-content">
            <Container fluid>
                <div>
                    <div className="list p-2 pt-4 left-scrollable">
                        {itemList}
                    </div>
                    <div className="p-2 right-scrollable">
                        <NotesExpanded></NotesExpanded>
                    </div>
                </div>
             </Container>
        </div>
    );
}

export default MidContainer