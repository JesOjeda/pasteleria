<template>
  <div class="pastelero"> 
   <div class="row">
    <div class="col-sm-6">
      <div class="card" style="border: none;" >
        <div class="card-body" >
            <h5 class="card-title pastel2">Inventario</h5>
          <p class="card-text" style="padding-top: 0;">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Sabores</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Adornos</th>
                    <th scope="col">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Almendra</th>
                    <td>5</td>
                    <td>Perlas de azucar</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <th >Chocolate</th>
                    <td>10</td>
                    <td>Letreritos</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <th >Nutella</th>
                    <td>15</td>
                    <td>Luces Led</td>
                    <td>18</td>

                  </tr>
                </tbody>
              </table>
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card" style="border: none;">
        <div class="card-body">
          <h5 class="card-title pastel1" >Pedido</h5>
          <hr class="line2">
          <p class="card-text ">
            <form style="margin-right: 10%;">

                <h5>Datos de Contacto</h5>
                <div class="row g-2">
                    <div class="col">
                        <div class="form-group" >
                            <input type="text" class="form-control" id="name" placeholder="Juanito Perez">

                          </div>
                    </div>
                    <div class="col">
                        <div class="form-group" >
                            <input type="tel" class="form-control" id="tel" placeholder="5578963245">

                          </div>
                    </div>
                  </div>
                  <br>
                  <div class="col-12">
                    <input type="email" class="form-control" id="inputAddress" placeholder="juanitop@gmail.com">
                  </div>
                <br>


                <h5>Sabores</h5>
                <div class="row g-2">
                    <div class="col">
                        <div class="form-group" >
                            <select class="form-control" id="exampleFormControlSelect1">
                              <option>Almendra  $50.00</option>
                             
                            </select>
                          </div>
                    </div>
                    <div class="col">
                        <div class="form-group" >
                            <select class="form-control" id="exampleFormControlSelect3">
                              <option>Chocolate  $50.00</option>
                             
                              
                            </select>
                          </div>
                    </div>
                  </div>
<br>
                  <h5>Adornos</h5>
                  <div class="row g-3">
                    <div class="col">
                        <div class="form-group" >
                            <select class="form-control" id="exampleFormControlSelect4">
                                <option>Perlas de azucar  $80.00</option>
                             
                              </select>
                          </div>
                    </div>
                    <div class="col">
                        <div class="form-group" >
                            <select class="form-control" id="exampleFormControlSelect5">
                                <option>Letreritos  $80.00</option>
                              
                              </select>
                          </div>
                    </div>
                  </div>
                       <br> 
                  <h5>Extras</h5>
                <div class="form-group">
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" placeholder="El letrerito tiene que decir 25 años"></textarea>
                </div>
                <br>
                <h3>Total: $258.00</h3>
                
                
               
              </form>
          </p>
        </div>
      </div>
    </div>
  </div>
  
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Pastelero',
  components: {
    Dashboard,
  }
 
}
</script>


