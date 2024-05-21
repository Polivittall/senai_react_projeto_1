import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MoviePage (){
    return(

        <>
         <div className="content mb-2 col-sm-2 col-md-3 col-lg-12 pt-2 d-flex gap-5">

         <Card style={{ width: '12rem', height:'13rem' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyG2gkau99Hl96Ff7uTFeU3VnXEDQ6cVCmRKk1cV15Eg&s" style={{width: '12rem', height: '13rem'}} />
      <Card.Body>
        <Card.Title className='text-align-center'><b>MOANA</b></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Infantil/Aventura - 2016</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '12rem', height:'13rem' }}>
      <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91EKyuECxDL._AC_UF1000,1000_QL80_.jpg" style={{width: '12rem', height: '13rem'}} />
      <Card.Body>
        <Card.Title className='text-align-center'><b>ENCANTO</b></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Infantil/Aventura - 2016</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '12rem', height:'13rem' }}>
      <Card.Img variant="top" src="https://lumiere-a.akamaihd.net/v1/images/daylight_payoff_poster_brazil_27eb2c00.jpeg" style={{width: '12rem', height: '13rem'}} />
      <Card.Body>
        <Card.Title className='text-align-center'><b>WISH</b></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Infantil/Aventura - 2016</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '12rem', height:'13rem' }}>
      <Card.Img variant="top" src="https://lumiere-a.akamaihd.net/v1/images/image_b0bdb13a.jpeg?region=0%2C0%2C540%2C810&width=320" style={{width: '12rem', height: '13rem'}} />
      <Card.Body>
        <Card.Title className='text-align-center'><b>DIVERTIDAMENTE 2</b></Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Infantil/Aventura - 2016</ListGroup.Item>
      </ListGroup>
    </Card>
         </div>

        

        </>
    )
}

export default MoviePage;