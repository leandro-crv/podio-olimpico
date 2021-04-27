<template>
    <div class='divPais'>
        {{procurar}}
        <img :src="p.bandeira" />
        <p> {{ p==null ? 'sem informações' : p.nomePais}}</p>
    </div>
    
</template>
<script>
import codigos from "../../bancoDeDados/codigos.js";

export default {
    props:['codigo'],
    computed:{
        procurar:function(){
            let indice = codigos.findIndex(element => element.coi == this.codigo.cod)
            if(indice ==-1){
                this.p = {
                    nomePais:'Não encontrado'
                }
            }
            else{

                this.p = codigos[indice]
            }
        }
    },
     data(){
        return{
            p:''
        }
    } 
}

</script>
<style scoped>

img{
    width:5rem;
}
</style>