
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';



function MoviePage() {


  return (

    <>
      <Row className='text-center'>
        <h1><b>FILMES</b></h1>
      </Row>
      <Row className="pt-2 pb-3">
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://media.fstatic.com/jHbTlGz9yJCCeTsDEfPOXnY_p8A=/210x303/smart/filters:format(webp)/media/movies/covers/2023/09/cats_zFTxwCc.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://static.stealthelook.com.br/wp-content/uploads/2022/09/novos-filmes-que-eu-mal-posso-esperar-para-ver-esse-ano-avatar-the-way-of-the-water-20220908180112.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://ingresso-a.akamaihd.net/prd/img/movie/kung-fu-panda-4/0ee79c4d-3a37-4d03-8b2e-b7da7cd386c8.webp" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://cdn.cineart.com.br/vibezz_780654008.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://a2filmes.com.br/storage/titles/pt-br/1470.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://cdn.cineart.com.br/vibezz_526203857.jpg" />
          </Card>
        </Col>

      </Row>

      <Row className="pt-2 pb-3">
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/540e5d44e4b03111c0805763/448657da-23a9-41f3-91c7-57be699c2f35/Captura+de+Tela+2024-04-15+a%CC%80s+17.43.08.png" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://www.omelete.com.br/webstories/sequencias-melhores-originais/assets/1.jpeg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZwlVkHUZh1Mt4iFX_PzkOSho0Ush4xuuUJj88D5QWNS3Ej083a2zkJe-B0KcqE29qFU&usqp=CAU" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://ingresso-a.akamaihd.net/prd/img/movie/os-farofeiros-2/6aa0e761-c692-44a5-83b2-eeb444f18413.webp" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://www.cinea.com.br/storage/filmes/13481820231228658da6d2a5353.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://s2-globo-play.glbimg.com/m6hPvnz25YU8nDQd1g42z5MU3Ec=/362x536/https://s2-globo-play.glbimg.com/viNmoio4gZqQq1Hn3k9Yk8a1zFQ=/https://s2.glbimg.com/lb-7SfDyvCV5zLjDHpVNySMhmSE=/i.s3.glbimg.com/v1/AUTH_c3c606ff68e7478091d1ca496f9c5625/internal_photos/bs/2023/n/C/JxpHpNRtSiBJNtzWI9kw/10117905-poster.jpg" />
          </Card>
        </Col>

      </Row>

      <Row className="pt-2 pb-3">
        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://www.parisfilmes.com.br/wp-content/uploads/2023/03/a-primeira-comunhao-328x504.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://www.reservacultural.com.br/niteroi/wp-content/uploads/2024/05/chrome-capture-2024-4-22.png" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://www.universalpics.com.br/tl_files/content/movies/super_mario_bros/posters/01.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://mb.web.sapo.io/80dfe6bfba7ab5c9cf2a89a8ec5622a6210426f8.jpg" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://preview.redd.it/2024-nem-come%C3%A7ou-e-j%C3%A1-temos-o-pior-filme-do-ano-v0-u2268jd38ndc1.jpeg?width=640&crop=smart&auto=webp&s=2b65d19ea7ce4a30f0a9192d7f4843c9d5c7f97d" />
          </Card>
        </Col>

        <Col xs={6} sm={4} md={3} lg={2}>
          <Card>
            <Card.Img variant="top" src="https://cdn.cineart.com.br/vibezz_674395185.jpg" />
          </Card>
        </Col>

      </Row>







    </>
  )

}

export default MoviePage;