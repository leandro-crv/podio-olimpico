<template>
   <section>
       <p>Quais medalhas?</p>
       <table class='table' @change="()=> this.$emit('inputChange')">
         <th>Todas</th>
         <th>Ouro</th>
         <th>Prata</th>
         <th>Bronze</th>
         <tr>
            <td class='tdTodas'>
            <input type='radio'  name='inputMedalhas' value='todas' id='medalhaTodas' checked>
             <label for='medalhaTodas' class='todasM'>
               <span class='medalhaPequena ouro '></span>
               <span class='medalhaPequena prata '></span>
               <span class='medalhaPequena bronze '></span>
             </label>

            </td>
            <td>
              <input type='radio'  name='inputMedalhas' value='ouro' id='medalhaOuro' >
             <label for='medalhaOuro' class='medalha ouro'></label>
            </td>
            <td>
             <input type='radio'  name='inputMedalhas' value='prata' id='medalhaPrata' >
             <label for='medalhaPrata' class='medalha prata'></label>
            </td>
            <td>
             <input type='radio'  name='inputMedalhas' value='bronze' id='medalhaBronze' >
             <label for='medalhaBronze' class='medalha bronze'></label>
            </td>
        </tr>
      </table>
</section>
</template>
<script>
export default {
    
}
</script>
<style scoped>

.tdTodas{
  vertical-align: middle;
}
.todasM{
  opacity: 0.5;
  
}

.medalhaPequena{
  display: inline-block;
  width:1rem;
  height: 1rem;
   border: gray solid thin;
  border-radius:50%;
}


.medalha{
  display: inline-block;
  width:6rem;
  height: 6rem;
  
  border: gray solid thin;
  border-radius:50%;
  font-weight: bold;
  opacity: 0.5;
}
.todas{
  background-image: linear-gradient(goldenrod,silver,#bf8970);
}
.ouro{
  background-color: goldenrod;
}

.prata{
  background-color: silver;
}

.bronze{
  background-color:  #bf8970;
}

input[type="radio"] {
    display: none;
}
input[type="radio"]:checked + label {
  border: solid black thick;
  opacity: 1;
}
</style>