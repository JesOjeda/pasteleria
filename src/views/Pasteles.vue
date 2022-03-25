<template>
  <div class="pasteles"> 
   <div class="row">
    <div class="col-sm-6">
      <div class="card" style="border: none;" >
        <div class="card-body" >
          <p class="card-text">
            <img src="../assets/pastelboda.png" class="card-img-top cardpastel" alt="...">
          </p>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card" style="border: none;">
        <div class="card-body">
          <h5 class="card-title pastel1">Pastel Boda</h5>
          <hr class="line">
          <p class="card-text ">
          <Sabores/>
          </p>
        </div>
      </div>
    </div>
  </div> 
  </div>
</template>

<script>
// @ is an alias to /src
import Sabores from '@/components/Sabores.vue'

export default {
  name: 'Pasteles',
  components: {
    Sabores,
  }
 
}
</script>


