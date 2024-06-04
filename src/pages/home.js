import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

const HomePage = () => {

    const [filmes, setFilmes] = useState([]);
    const [livros, setLivros] = useState([]);

    //realizar ações ao iniciar componente
    useEffect(() => {
        async function buscarFilmes() {
            const filmes = axios.get("http://143.198.156.185/api/filmes").then(function (value) {
                setFilmes(value.data);console.log(value.data)
            }).catch(function (value) {
                console.log(value);
            });
        }

        async function buscaLivros() {
            const filmes = axios.get("http://143.198.156.185/api/livros").then(function (value) {
                setLivros(value.data);
            }).catch(function (value) {
                console.log(value);
            });
        }
        buscarFilmes();
        buscaLivros();
    });

    return (
        <>
            <Row className="pt-2 pb-3">
                <Carousel s>
                    {filmes.map((filme, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={filme.imagens[0].url}
                                alt={filme.titulo}
                            />
                            <Carousel.Caption>
                                <h3>{filme.title}</h3>
                                <p>{filme.sinopse}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
            <Row>
                <h1>FILMES</h1>
            </Row>
            <Row className="pt-2 pb-3">
                {filmes.map((filme, index) => (
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={filme.url_thumbnail} height={350} />
                            <Card.Body>
                                <Card.Title className='text-center'>{filme.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <h1>LIVROS</h1>
            </Row>
            <Row className="pt-2 pb-3">
                {livros.map((livro, index) => (
                    <Col xs={6} sm={4} md={3} lg={2}>
                        <Card>
                            <Card.Img variant="top" src={livro.url_thumbnail} />
                            <Card.Body>
                                <Card.Title className='text-center'>{livro.titulo}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
         

        </>

    );
};

export default HomePage;

