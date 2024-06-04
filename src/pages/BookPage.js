import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function HomePage() {


  const [livros, setLivros] = useState([]);

  //realizar ações ao iniciar componente
  useEffect(() => {
    async function buscaLivros() {
      const livros = axios.get("http://143.198.156.185/api/livros").then(function (value) {
        setLivros(value.data);
      }).catch(function (value) {
        console.log(value);
      });
    }
    buscaLivros();
  });

  return (

    <>

      <Row className="pt-2 pb-3">
        <Carousel s>
  
            <Carousel.Item>
              <img
                className="d-block w-100 pt-2 pb-3" width={800}
                src="https://rocketexpansion.com/wp-content/uploads/2022/02/perfect-website-for-a-book-v2-fb.jpg"
              />
              <Carousel.Caption>
                <font color="white">
                  <h5 >LIVROS</h5>
                  <b>Se aventure e conheça novas histórias!</b></font>
              </Carousel.Caption>
            </Carousel.Item>
          
        </Carousel>
      </Row>


      <Row className='text-center'>
        <h1><b>LIVROS</b></h1>
      </Row>
      <Row className="pt-2 pb-3">
        {livros.map((livro, index) => (
          <Col xs={6} sm={4} md={3} lg={2}>
            <Link to={"/livros/" + livro.id}>
              <Card>
                <Card.Img variant="top" src={livro.url_thumbnail} height={350} />
              </Card>
              <Card.Body>
                <Card.Title className='text-center' >{livro.titulo}</Card.Title>
              </Card.Body>
            </Link>

          </Col>
        ))}
      </Row>



    </>
  )

}

export default HomePage;