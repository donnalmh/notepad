import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NotesExpanded.css'

const Div = styled.div`
  border: 1px solid #DDDDDD;
  height: 100vh;
`;

const NotesExpanded = () => (
  <Div>
    <Row>
      <Col md={{ span: 4, offset: 8 }}>
        <div id="note-date" className="p-3">29th December 2020 8:30pm</div>
      </Col>
    </Row>
    <Row className="text-left m-0">
      <Col className="title">
         <input type="text" placeholder="Enter Title..."></input>
         <hr></hr>
      </Col>
    </Row>
    <Row className="text-left m-0">
      <Col className="notes-detail">
        <textarea></textarea>
      </Col>
    </Row>



  </Div>
)

export default NotesExpanded