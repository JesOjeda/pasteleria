<template>
<div class="sabores">

  <form style="margin-right: 10%;" name="form" v-on:submit.prevent="procesar();">
                <h5>Datos de Contacto</h5>
                <div class="row g-2">
                    <div class="col">
                        <div class="form-group" >
                            <input type="text" class="form-control" id="name" placeholder="Nombre">

                          </div>
                    </div>
                    <div class="col">
                        <div class="form-group" >
                            <input type="tel" class="form-control" id="tel" placeholder="telefono">

                          </div>
                    </div>
                  </div>
                  <br>
                  <div class="col-12">
                    <input type="email" class="form-control" id="inputAddress" placeholder="correo@gmail.com">
                  </div>
                <br>
 <h5>Sabores</h5>
                <div class="row g-2">
                    <div class="col">
                        <div class="form-group" >
                            <label>Elige tu sabor preferido</label>
                            <select class="form-control"  name="sabor1" v-model="formPastel.sabor1" id="exampleFormControlSelect1">
                              <option>Almendra  $50.00</option>
                              <option>Cerezas  $50.00</option>
                              <option>Licor Italiano  $50.00</option>
                              <option>Nutella  $50.00</option>
                            </select>
                          </div>
                    </div>
                    <div class="col">
                        <div class="form-group" >
                            <label>¿Deseas combinarlo?</label>
                            <select class="form-control" name="sabor2" v-model="formPastel.sabor2" id="exampleFormControlSelect3">
                              <option>Chocolate  $50.00</option>
                              <option>Almendra  $50.00</option>
                              <option>Cerezas  $50.00</option>
                              <option>Licor Italiano  $50.00</option>
                              
                            </select>
                          </div>
                    </div>
                  </div>
<br>
                  <h5>Adornos</h5>
                  <div class="row g-3">
                    <div class="col">
                        <div class="form-group" >
                            <label>Escoge un adorno</label>
                            <select class="form-control" name="adorno1" v-model="formPastel.adorno1" id="exampleFormControlSelect4">
                                <option>Letreritos  $80.00</option>
                                <option>Luces Led  $80.00</option>
                                <option>Perlas de azucar  $80.00</option>
                                <option>Envoltorio de corazon  $80.00</option>
                              </select>
                          </div>
                    </div>
                    <div class="col">
                        <div class="form-group" >
                            <label>¿Deseas combinarlo?</label>
                            <select class="form-control" name="adorno2" v-model="formPastel.adorno2" id="exampleFormControlSelect5">
                                <option>Letreritos  $80.00</option>
                                <option>Luces Led  $80.00</option>
                                <option>Flores  $80.00</option>
                                <option>Envoltorio de corazon  $80.00</option>
                              </select>
                          </div>
                    </div>
                  </div>
                       <br> 
                  <h5>Extras</h5>
                <div class="form-group">
                  <textarea class="form-control" name="extras" v-model="formPastel.extras" id="exampleFormControlTextarea1" rows="2" placeholder="¿Tienes alguna peticion especial?"></textarea>
                </div>

                <br>
                
                
                <div class="d-grid gap-2">
                    <button class="btn btn-" type="submit" style="background-color: #f3b8cc; color: white;">Enviar</button>
                  </div>
              </form>



  
    </div>


 
</template>

<script>
import {required} from 'vuelidate/lib/validators';

export default {
  name: 'Sabores',
  data(){
    return{
      formPastel:{
        sabor1: '',
        sabor2: '',
        adorno1: '',
        adorno2: '',
        extras: ''
      }
    }
  },
  methods:{
    procesar(){
     
      alert(this.formPastel.sabor1);

    }
  },
  validations:{
    formPastel: {
      sabor1:{
        required

      },
      adorno1:{
        required

      }

    }
  }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
