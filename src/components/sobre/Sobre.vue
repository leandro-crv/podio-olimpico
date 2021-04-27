<template>
  <section :class="classe ? 'sobre' : 'invisivel'">
    <button type="button" class="close" aria-label="Close" @click="fechar">
      <span aria-hidden="true">&times;</span>
    </button>
    <ul>
      <li>
        <span class="rotulo">Fonte:</span>
        Os dados foram obtidos no site oficial do
        <a href="https://www.olympic.org/" target="_blank"
          >Comitê Olímpico Internacional (COI)</a
        >. Para acessar todos os esportes em todos as edições dos jogos
        olímpicos foi utilizada uma URL que começa com https://www.olympic.org +
        /edição dos jogos + /esporte. Por exemplo, para pegar os resultados de
        futebol nas olimpiadas do Rio de Janeiro se acessou
        <a href="https://www.olympic.org/rio-2016/football" taget="_blank"
          >https://www.olympic.org/rio-2016/football </a
        >.
      </li>
      <li>
        <span class="rotulo">Pódio:</span>
        O pódio é montado com os países que mais ganharam medalhas de acordo com
        os filtros feitos: período dos jogos, esportes e quais medalhas (todas,
        ouro, prata ou bronze). Havendo empate são mostrados todos países com
        mesmo número de medalhas.
      </li>
      <li>
        <span class="rotulo">Paises:</span>
        As medalhas estão atreladas ao nome do país na época em que as
        olimpiadas foram disputadas. Sendo assim, aparecerão resultados de
        países que não existem mais, como por exemplo: União Soviética, Alemanha
        Oriental, Alemanha Ocidental, Iugoslávia entre outros. Há também a
        Equipe Unificada (1992), composta por ex membros da União Soviética e a
        Equipe Alemanha Unida (1956–1964), edições dos jogos em que Alemanha
        Oriental e Ocidental competiam juntas.
      </li>
      <li>
        <span class="rotulo">Esportes:</span>
        Todos esportes dos jogos olimpicos de verão estão disponíveis em
        <a href="https://www.olympic.org/sports" target="_blank"
          >https://www.olympic.org/sports</a
        >. Para fins de organização os nomes foram traduzidos para o português e
        alguns deles foram agrupados. Por exemplo, canoe slalom e canoe spring
        foram classificados com canoagem.
      </li>
      <li>
        <span class="rotulo">Observação:</span>
        Este site foi construído utilizando web scraping para pegar os dados
        disponíveis em https://www.olympic.org. Pode haver divergência com os
        números oficiais do COI.
      </li>
    </ul>
  </section>
</template>
<script>
import sair from "../../assets/sair.svg";
export default {
  props: ["classe"],
  data() {
    return {
      classe,
      sair: sair,
    };
  },
  methods: {
    fechar: function () {
      this.classe = !this.classe;
    },
  },
};
</script>
<style scoped>
.sobre {
  background-color: rgb(214, 214, 214);
  border: black solid thick;
  border-radius: 5%;
  width: 70%;
  margin: 1% auto;
  padding: 2%;
  text-align: justify;
}
.rotulo {
  font-weight: bold;
}
li {
  margin-top: 2%;
}

.invisivel {
  display: none;
}

</style>