import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NotesExpanded.css'
import Moment from 'react-moment';

const Div = styled.div`
  border: 1px solid #DDDDDD;
  height: 100vh;
`;

const NotesExpanded = ({title, summary, date}) => (
  <Div>
    <Row>
      <Col md={{ span: 4, offset: 8 }}>
        <div id="note-date" className="p-3"><Moment format="DD MMM YYYY HH:mm">{date}</Moment></div>
      </Col>
    </Row>
    <Row className="text-left m-0">
      <Col className="title">
         <input type="text" placeholder="Enter Title..." value={title}></input>
         <hr></hr>
      </Col>
    </Row>
    <Row className="text-left m-0">
      <Col className="notes-detail">
        <textarea value={summary}></textarea>
      </Col>
    </Row>



  </Div>
)

export default NotesExpanded