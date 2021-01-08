import './NoteListItem.css'

function NoteListItem({title, summary, date}) {
    return (
        <div className="p-2">
            <div id="title">{title}</div>
            <div id="summary">Lorem ipsum dolor sit amet, consectetur adipsling emali...</div>
            <br></br>
            <div id="date">{date}</div>
         </div>
    );
}

export default NoteListItem