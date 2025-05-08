import React from 'react'

const Carouselcomponent = () => {
  return (
    <section class="row">
    <div class="col-md-12">
        <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
            {/* <!-- Wrapper for our carousel inner --> */}
             <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="images/slide1.jpg" alt="" class="w-100 d-block" height="420"/>
                </div>
                <div class="carousel-item">
                    <img src="images/slidefour.jpg" alt="" class="w-100 d-block" height="420"/>
                </div>
                <div class="carousel-item">
                    <img src="images/slide6.jpg" alt="" class="w-100 d-block" height="420"/>
                </div>
                <div class="carousel-item">
                    <img src="images/slide7.webp" alt="" class="w-100 d-block" height="420"/>
                </div>
             </div>

             {/* <!-- Controllers for the carousel --> */}
              <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-secondary"></span>
              </a>

              <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                <span class="carousel-control-next-icon bg-secondary"></span>
              </a>
        </div>
    </div>
  </section>
  )
}

export default Carouselcomponent