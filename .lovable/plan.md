# Repassa — Fases 1 e 2

## Objetivo
Construir o protótipo mobile-first do marketplace universitário conforme o PDF, limitado à fundação visual, Home, Busca e ao card reutilizável de material, usando apenas dados locais.

## Implementação
- Aplicar a identidade do documento: roxo principal/escuro, lilás, coral, off-white, grafite e cores semânticas; Poppins em títulos e Inter no restante.
- Ajustar as variantes compartilhadas de botão e badge para ações primárias, secundárias, destrutivas, desabilitadas e estados de anúncio.
- Criar o layout base com cabeçalho responsivo e navegação fixa de cinco abas; nesta fase, Início e Buscar serão funcionais e as demais abas aparecerão como destinos futuros sem conteúdo de fases posteriores.
- Criar dados mock tipados para materiais e vendedores, respeitando a modelagem do documento.
- Gerar uma coleção coerente de fotos de livros, calculadora, jaleco e materiais acadêmicos usados.
- Montar a Home com busca em destaque, atalhos de categorias e grade de materiais em destaque.
- Montar a Busca com termo livre e filtros funcionais por curso, categoria, faixa de preço e estado de conservação, incluindo contagem e estado vazio.
- Criar `MaterialCard` reutilizável com foto, título, preço, preço novo riscado, conservação, curso, categoria, vendedor identificado, nota e status textual.
- Adicionar metadados próprios da página e manter acessibilidade, foco visível e adaptação para celular, tablet e desktop.

## Validação
- Verificar tipos e compilação pelo ambiente.
- Exercitar busca, filtros, limpeza de filtros e troca entre Início e Buscar.
- Conferir visualmente em tamanhos de celular e desktop, sem sobreposição da navegação inferior.

## Fora desta iteração
Detalhes do material, anúncio, chat, perfil, avaliações, compra, autenticação e gerenciamento de anúncios não serão implementados.
