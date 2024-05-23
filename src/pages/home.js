
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';


function HomePage() {


  return (

    <>

      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <div>
            <video src='https://media.w3.org/2010/05/sintel/trailer_hd.mp4' autoPlay loop muted></video>
          </div>


          <Carousel.Caption>
            <font color="white">
              <h5 >Filmes</h5>
              <h1><b>Mergulhe na atmosfera de outro mundo!</b></h1></font>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://miro.medium.com/v2/resize:fit:1200/1*wp7gvRlw2nw-_Nb5x901zg.png'}
            alt="Filmes"
          />
          <Carousel.Caption>
            <font color="white">
              <h5 >Monstros S.A</h5>
            </font>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'https://www.amorporlivros.com.br/wp-content/uploads/livros-populares-2021.jpg'}
            alt="Livros"
          />
          <Carousel.Caption>
            <font color="white">
              <h5 >Livros</h5>
              <h1><b>Se aventure e conheça novas histórias!</b></h1></font>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


      <div className='row boder pt-2'></div>
      <b><h1>TOP FILMES</h1></b>


      <div >

        <div className='content mb-2 col-sm-2 col-md-3 col-lg-12 pt-2 d-flex gap-5'>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://br.web.img3.acsta.net/pictures/16/09/12/22/13/415370.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Moana</Card.Title>
              <Card.Text className='text-center'>
                Infantil/Aventura
                1h 47m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/91EKyuECxDL._AC_UF1000,1000_QL80_.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Encanto</Card.Title>
              <Card.Text className='text-center'>
                Infantil/Fantasia
                1h 49m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://lumiere-a.akamaihd.net/v1/images/daylight_payoff_poster_brazil_27eb2c00.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>Wish</Card.Title>
              <Card.Text className='text-center'>
                Infantil/Fantasia
                1h 42m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://lumiere-a.akamaihd.net/v1/images/image_b0bdb13a.jpeg?region=0%2C0%2C540%2C810&width=320" />
            <Card.Body>
              <Card.Title className='text-center'>Divertidamente 2 </Card.Title>
              <Card.Text className='text-center'>
                Infantil/Comédia
                1h 36m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://apostiladecinema.com.br/wp-content/uploads/2021/06/luca-filme-pixar-animacao-disney-2021-critica-poster-scaled-e1629396654805.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Luca</Card.Title>
              <Card.Text className='text-center'>
                Infantil/Fantasia
                1h 38m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://lh4.googleusercontent.com/xbryw1wWK0SAxsKaNRX7QnMcaTWTZg9s24y_g-XtpPtOTNE6I5MWN_6rLrBgokcPYawGYMR8QMGurel-E4k5sn2qnjiV7Ru9ulQuBowuC3aUhbc0Y8FOzrnQGZRA-94wYr44ja1XH6M2306IDg" />
            <Card.Body>
              <Card.Title className='text-center'>A fantástica fábrica de chocolate</Card.Title>
              <Card.Text className='text-center'>
                Infantil/Fantasia
                1h 55m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://br.web.img3.acsta.net/medias/nmedia/18/91/05/36/20127436.jpg" />
            <Card.Body>
              <Card.Title className='text-center'>Toy Story</Card.Title>
              <Card.Text className='text-center'>
                Comédia/Aventura
                1h 32m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

          <Card className='text-center' style={{ width: '12rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwPKnv5ZSM5JNAA1AYQQTRZbwmrh0Cm0zE-sBZcrqzw&s" />
            <Card.Body>
              <Card.Title className='text-center'>Monstros S.A</Card.Title>
              <Card.Text className='text-center'>
                Comédia/Aventura
                1h 32m
              </Card.Text>
              <Card.Link href="#">Acessar</Card.Link>
            </Card.Body>
          </Card>

        </div>

        <div className='row'></div>
        <b><h1>TOP LIVROS</h1></b>

        <div>
          <div className='content mb-2 col-sm-12 col-md-6 col-lg-6 pt-2 d-flex gap-5'>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/719esIW3D7L._AC_UF1000,1000_QL80_.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Orgulho e preconceito</Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/A1UjcPz4gZL._AC_UF1000,1000_QL80_.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Percy Jackson e os olimpianos</Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51fMZPtkW+L.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Uma segunda chance</Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://osmelhoreslivros.com.br/wp-content/uploads/2021/04/corte-de-nevoa-e-furia-202x300.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Corte de névoa e fúria</Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71SYepTUsDL._AC_UF1000,1000_QL80_.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Vermelho, branco e sangue azul</Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61GFsO7j0ZL._AC_UF1000,1000_QL80_DpWeblab_.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Um estudo em vermelho</Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/715+3WHXWyL._AC_UF1000,1000_QL80_.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>Quem é você Alasca? </Card.Title>
              </Card.Body>
            </Card>

            <Card className='border md-4 col-sm-12 col-md-6 col-lg-6' style={{ width: '12rem' }}>
              <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51M9IbBqxCL._AC_UF1000,1000_QL80_.jpg" />
              <Card.Body>
                <Card.Title className='align-middle'>A culpa é das estrelas</Card.Title>
              </Card.Body>
            </Card>

          </div>


        </div>
        <div>
        </div>
      </div>

    </>
  )

}

export default HomePage;
