import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Declaramos duas variáveis para armazenar os parâmetros de consulta (query params)
  // query: armazena a string de consulta
  // page: armazena o número da página
  query: string | null = null;
  page: number | null = null;

  // O construtor injeta o serviço ActivatedRoute para acessar informações sobre a rota ativa
  constructor(private route: ActivatedRoute) { }

  // O método ngOnInit é um ciclo de vida do Angular que é executado após a criação do componente
  ngOnInit() {
      // Inscreve-se no observable queryParamMap para obter os parâmetros de consulta da rota ativa
      this.route.queryParamMap.subscribe(parametros => {
        // Obtém o valor do parâmetro 'query' e armazena na variável query
        this.query = parametros.get('query');
        // Obtém o valor do parâmetro 'page', converte para número (com +), e armazena na variável page
        // Se o valor for nulo ou indefinido, armazena null
        this.page = parametros.get('page') ? +parametros.get('page')! : null;
      })
  }
}
