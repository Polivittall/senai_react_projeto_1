import { type } from '@testing-library/user-event/dist/type';
import Carousel from 'react-bootstrap/Carousel';

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
        <b>FILMES EM CATÁLOGO</b>

        <div>

        </div>
      

      </div>

    </div>
            
   
        </>
    )

}

export default HomePage;
