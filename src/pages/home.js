
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function HomePage(){

    return (

        <>
         <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src ={'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2016/10/netflix-catalogo.jpg?fit=1060%2C596&ssl=1'} 
          alt="Bibliotech"
        />
        <Carousel.Caption>
        <font color="white">
        <h5 >Filmes</h5>
          <h1><b>Mergulhe na atmosfera de outro mundo!</b></h1></font> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src ={'https://images.sentimentodeleitor.com.br/2020/03/kindle-unlimited-mlehores-livros.jpg'}
          alt="Livros"
        />
        <Carousel.Caption>
        <font color="white">
        <h5 >Livros</h5>
          <h1><b>Se aventure e conheça novas histórias!</b></h1></font> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src ={'https://t.ctcdn.com.br/HQQ7ELtEMylfZulyYYS10uUu-QE=/640x360/smart/i875509.png'}
          alt="Filmes"
        />
      </Carousel.Item>
    </Carousel>
      
    <div className='card'>
      <div className='container pt-2'>
        <h1><b>FILMES EM CATÁLOGO</b></h1>

        <div className='content mb-2 col-sm-12 col-md-6 col-lg-6 pt-2 d-flex gap-5'>
        <CardGroup>
      <Card>
        <Card.Img width={18} variant="top" src="https://historiaparadormir.com/wp-content/uploads/2023/10/Historinha-Infantil-Moana-Historia-Para-Dormir.png"/>
        <Card.Body>
          <Card.Title>Moana</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img width={18} variant="top" src="https://s2-g1.glbimg.com/O8Deo7pBFibV7dfp-bQmYDk0sOs=/65x0:1783x1080/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/T/S/FMXflBTgAEN8bhmmG5eg/encanto-group-1.jpg" />
        <Card.Body>
          <Card.Title>Encanto</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img width={18} variant="top" src="https://cinepop.com.br/wp-content/uploads/2022/11/avatar2_29.jpg" />
        <Card.Body>
          <Card.Title>Avatar</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
        </div>
      

      </div>

    </div>
            
   
        </>
    )

}

export default HomePage;
