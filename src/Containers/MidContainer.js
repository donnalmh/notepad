import './MidContainer.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NotesExpanded from './NotesExpanded';
import NoteListItem from './NoteListItem'

let items = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let itemList = items.map( (item, index) =>
    (
        <span>
    <NoteListItem></NoteListItem>
    <hr className="line-break  mt-3 mb-2" />
    </span>
))

function MidContainer(){
    return (
        <div className="body-content">
            <Container fluid>
                <div>
                    <div className="list p-2 left-scrollable">
                        {itemList}
                    </div>
                    <div className="p-2 right-scrollable">
                        <NotesExpanded></NotesExpanded>
                        {/* 2 of 2 */}
                    </div>
                </div>
             </Container>
        </div>
    );
}

export default MidContainer