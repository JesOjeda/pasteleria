<template>
  <div class="home">
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/banner1.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/banner2.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/banner3.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div class="row" id="nosotros">
        <div class="col-sm-6">
          <div class="card" style="border: none;" >
            <div class="card-body" >
              <p class="card-text">
                <img src="../assets/nosotros.png" class="card-img-top cardchef" alt="...">
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card" style="border: none;">
            <div class="card-body">
              <h5 class="card-title t1">Sobre Nosotros</h5>
              <hr class="line">
              <p class="card-text p1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type
                   specimen book. It has survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It was popularised in
                     the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section class="categorias" id="pasteles">
        <br>
      <h2>Nuestras Categorias</h2>
      <br>
    <div class="row row-cols-1 row-cols-md-3 g-4" style="margin-left: 10%; margin-right: 10%;">
        <div class="col">
          <div class="card">
            <img src="../assets/pastelcumple.jpg" class="card-img-top   " alt="...">
            <div class="card-body">
              <h5 class="card-title">PASTEL DE XV AÑOS</h5>
              <h5>Precio: $258.00</h5>
              <button type="button" class="btn btn-outline-info" onclick="location.href='pastel.html'" >Añadir caracteristicas</button>

            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../assets/pastelxv.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PASTEL DE BODA</h5>
              <h5>Precio: $258.00</h5>
              <button type="button" class="btn btn-outline-info" onclick="location.href='pastel.html'" >Añadir caracteristicas</button>


            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="../assets/pastelcumple.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">PASTEL DE CUMPLEAÑOS</h5>
              <h5>Precio: $258.00</h5>
              <button type="button" class="btn btn-outline-info" onclick="location.href='pastel.html'" >Añadir caracteristicas</button>


            </div>
          </div>
        </div>
      </div>
      <br>
      <br>
    </section>
  
    <br>
    <h2 id="contacto">Contactanos</h2>

    <div class="row">
      <div class="col-sm-6">
        <div class="card" style="border: none; margin-left: 10%;">
          <div class="card-body">
            <h3 class="">Dirección</h3>
             <Datos/>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card" style="border: none; margin-right: 10%;">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1">Correo</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
               <div class="form-group">
                <label for="exampleFormControlTextarea1">Comentarios</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <br>
              <div class="d-grid gap-2">
                <button class="btn btn-" type="button" style="background-color: #f3b8cc; color: white;">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.16417425626!2d-99.28369902580344!3d19.3906799675842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1646535490866!5m2!1ses-419!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>







  
  </div>
</template>

<script>
// @ is an alias to /src
import Datos from '@/components/Datos.vue'

export default {
  name: 'HomeView',
  components: {
    Datos,
  }
 
}
</script>


<style>

*{
    font-family: 'Nunito', sans-serif;  
    


}

h2{
    font-family: 'Pinyon Script', cursive;
    font-size: 4em;
    text-align: center;

}


.cardchef{
    width: 80%;
    margin-left: 10%;
    margin-top: 10%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #fb72bc;
    box-shadow: 10px 5px 5px #fb72bc;
}

.cardpastel{
    width: 80%;
    margin-left: 10%;
    margin-top: 20%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background: #fb72bc;
    box-shadow: 10px 5px 5px #fb72bc;;

}

.t1{
    padding-top: 2.5em;
    font-size: 4em;
    padding-bottom: .2em;
    font-family: 'Pinyon Script', cursive;
}

.p1{
    text-align: justify;
    font-size: 1.2em;
    margin-right: 10%;
}

.line{
    margin-right: 10%;
    border-top: 2px solid #fb72bc;


}
.line2{
    margin-top: 29px;
    margin-right: 10%;
    border-top: 2px solid #fb72bc;


}

.categorias{
    background-color: #f6dfe5;

}

h5{
    font-weight: bold;
}

.btn-info{
    background-color: #a8d0d8;
    border: #a8d0d8;

}
.pastel1{
    padding-top: 1em;
    font-size: 4em;
    padding-bottom: .2em;
    font-family: 'Pinyon Script', cursive;
}
.pastel2{
    padding-top: .8em;
    font-size: 4em;
    font-family: 'Pinyon Script', cursive;
}


</style>