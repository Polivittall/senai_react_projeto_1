
function home (){

    return (

        <>
        <div>
        <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>Livros</h3>
          <p>Se aventure e conheça novas histórias!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Filmes</h3>
          <p>Mergulhe na atmosfera de outro mundo!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
      </Carousel.Item>
    </Carousel>
        </div>

        <div className="container pt-2">
            <div className="card"> 
            <div className="card-tittle pt-4 card-header">
                <h1>FILMES</h1>

                <div className="col-sm-12 col-md-6 col-lg-6">
                    <label className="label-control">Spider Man: No Way Home</label>
                    


                </div>


            </div>

            </div>


        </div>
      

        
        </>
    )

}

export default home;
