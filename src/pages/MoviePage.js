
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function MoviePage() {

  const [filmes, setFilmes] = useState([]);


  //realizar ações ao iniciar componente
  useEffect(() => {
    async function buscarFilmes() {
      const filmes = axios.get("http://143.198.156.185/api/filmes").then(function (value) {
        setFilmes(value.data);
      }).catch(function (value) {
        console.log(value);
      });
    }

    buscarFilmes();

  });


  return (

    <>

      <Row className="pt-2 pb-3">
        <Carousel s>

          <Carousel.Item>

            <video src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' autoPlay loop muted></video>

            <Carousel.Caption>
              <font color="white">
                <h5 >FILMES</h5>
                <b>Mergulhe na atmosfera de outro mundo!</b></font>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </Row>

      <Row className='text-center'>
        <h1><b>FILMES</b></h1>
      </Row>
      <Row className="pt-2 pb-3">
        {filmes.map((filme, index) => (
          <Col xs={6} sm={4} md={3} lg={2}>
            <Link to={"/filme/" + filme.id}>
              <Card>
                <Card.Img variant="top" src={filme.url_thumbnail} height={400} />
              </Card>
              <Card.Body>
                <Card.Title className='text-center' >{filme.titulo}</Card.Title>
              </Card.Body>
            </Link>

          </Col>
        ))}
      </Row>

   




    </>
  )

}

export default MoviePage;