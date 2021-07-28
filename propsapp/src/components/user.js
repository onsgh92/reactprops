import { string } from 'prop-types'
import React from 'react'
import { Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap'
import { PropTypes } from 'prop-types'

export default function user(props) {
{/* const {name,bio,ident,image,fn}=props
 */}
 const {name,bio,ident,image,fn}=props

    return (
        <div>
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{props.name}</ListGroupItem>
    <ListGroupItem>{props.bio}</ListGroupItem>
    <ListGroupItem>{props.ident}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <>
 {/*onClick={()=>fn(name)} */}
  <Button variant="secondary" onClick={()=>fn(name)} size="lg" active>
  click me!
  </Button>
</>
  </Card.Body>
</Card>

        </div>
    )
}
user.defaultProps={
image:"https://img.freepik.com/vecteurs-libre/avatar-homme-portrait-homme-minimaliste-appartement-illustration_186332-435.jpg?size=338&ext=jpg"


}

user.propTypes={
  name:PropTypes.string



}
