
    module.exports = function filtrar(bd,anoInicio,anoFim,arrayEsportes,arrayMedalhas){
       console.log('dados no filtrar',{
           anoInicio,
           anoFim,
           arrayEsportes,arrayMedalhas
       })
        let paises = [];
        let filtro = bd.filter(element  => element.ano >= anoInicio && element.ano <=anoFim && arrayEsportes.includes(element.esportePort) && arrayMedalhas.includes(element.medalha));
        
        filtro.map((e)=> paises.push(e.pais));
      
       return montarPodio(organizarArray(paises))
       
    }
    
    
    function organizarArray(array){
       
        let paisesSemDuplicatas = [...new Set(array)]
        
        let medalhasPorPais = [];
        paisesSemDuplicatas.map((u)=>{
            let aparicoes = 0;
            for(let i=0;i<array.length;i++){
                u==array[i] ? aparicoes++:'';
            }
            medalhasPorPais.push({
                pais:u,
                aparicoes
            })
        })
    
        return medalhasPorPais;
    
    }
    
    function montarPodio(array){
        let sohNumeros = [];
        array.map((a)=>sohNumeros.push(a.aparicoes))
        let numeros = [...new Set(sohNumeros)]
            
        let primeiro = Math.max(...numeros);
        let segundo = Math.max(...numeros.filter(element => element < primeiro));
        let terceiro = Math.max(...numeros.filter(element=> element < segundo));
       
    
        let ouro = [];
        let prata = [];
        let bronze=[];
    
        array.map((a)=>{
            a.aparicoes==primeiro ? ouro.push(a.pais):'';
            a.aparicoes==segundo ? prata.push(a.pais):'';
            a.aparicoes==terceiro ? bronze.push(a.pais):'';
        });
        
       var resultado = {
        primeiroLugar:{paises:ouro,medalhas:primeiro},
        segundoLugar:{paises:prata,medalhas:segundo},
        terceiroLugar:{paises:bronze,medalhas:terceiro}
       }
       return resultado;
    }
    
    
    


