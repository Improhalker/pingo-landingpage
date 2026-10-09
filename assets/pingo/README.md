# Pingo — coleção 3D da landing page

Coleção de dez imagens individuais: as versões Acenando e Feliz existentes, mais as oito poses solicitadas em 06/10/2026. Cada pose foi gerada em uma chamada própria da ferramenta integrada `image_gen`, usando o Pingo 3D Acenando como referência para as variações.

Todos os PNGs têm **1254 × 1254 px** e canal alfa. Os arquivos são propostas para revisão visual; a referência oficial e os assets 2D do projeto financeiro foram preservados.

## Catálogo

| Pose        | Expressão                    | Ação                                           | Imagem                               | Prompt aplicado                                |
| ----------- | ---------------------------- | ---------------------------------------------- | ------------------------------------ | ---------------------------------------------- |
| Acenando    | Sorriso acolhedor            | Acenando, sem acessórios                       | [PNG](./pingo-3d-acenando-v1.png)    | [Prompt](./pingo-3d-acenando-v1.prompt.txt)    |
| Feliz       | Alegria tranquila            | Braços levemente abertos                       | [PNG](./pingo-3d-feliz-v1.png)       | [Prompt](./pingo-3d-feliz-v1.prompt.txt)       |
| Pensando    | Curiosidade concentrada      | Uma mão próxima ao queixo                      | [PNG](./pingo-3d-pensando-v1.png)    | [Prompt](./pingo-3d-pensando-v1.prompt.txt)    |
| Analisando  | Atenção e interesse          | Observando uma pequena lupa                    | [PNG](./pingo-3d-analisando-v1.png)  | [Prompt](./pingo-3d-analisando-v1.prompt.txt)  |
| Insight     | Descoberta confiante         | Apresentando uma lâmpada simples               | [PNG](./pingo-3d-insight-v1.png)     | [Prompt](./pingo-3d-insight-v1.prompt.txt)     |
| Atenção     | Preocupação leve, sem alarme | Apontando para um pequeno calendário sem texto | [PNG](./pingo-3d-atencao-v1.png)     | [Prompt](./pingo-3d-atencao-v1.prompt.txt)     |
| Organizando | Concentração serena          | Segurando duas pastas simples                  | [PNG](./pingo-3d-organizando-v1.png) | [Prompt](./pingo-3d-organizando-v1.prompt.txt) |
| Explicando  | Segurança e proximidade      | Palma aberta, apresentando espaço ao lado      | [PNG](./pingo-3d-explicando-v1.png)  | [Prompt](./pingo-3d-explicando-v1.prompt.txt)  |
| Comemorando | Satisfação moderada          | Pequeno gesto de comemoração                   | [PNG](./pingo-3d-comemorando-v1.png) | [Prompt](./pingo-3d-comemorando-v1.prompt.txt) |
| Descansando | Tranquilidade                | Sentado, com postura relaxada                  | [PNG](./pingo-3d-descansando-v1.png) | [Prompt](./pingo-3d-descansando-v1.prompt.txt) |

## Uso e procedência

- Usar `object-fit: contain`, preservando o personagem e os acessórios no enquadramento.
- O fundo preto exibido por alguns visualizadores representa a área transparente; não faz parte de um cenário gerado.
- Os acessórios das versões Analisando, Insight, Atenção e Organizando fazem parte do respectivo PNG.
- Não inverter ou recolorir o personagem para o tema escuro; adaptar sua superfície de apoio.
- Os prompts individuais registram exatamente as instruções aplicadas. Expressões futuras devem continuar usando o mesmo modelo como referência.
- A fonte de identidade é `sistemafinanceiro/docs/assets/pingo-referencia.jpg`; o primeiro 3D também usou `docs/referencias-visuais/pingo/pingo-normal.png` desse projeto.
- Nenhum personagem ou asset da Wiser foi usado como entrada destas oito gerações.
- [Manifesto](./manifest.json): dimensões, descrição de cada pose, referência, hashes e evidências de validação.

## Conferência desta coleção

As oito novas poses foram vistas individualmente após a geração. Os dez arquivos foram abertos para conferir dimensões e formato ARGB; os prompts correspondentes existem. As oito novas cópias têm SHA256 idêntico ao arquivo gerado.

A conferência dos cantos encontrou alfa zero, exceto um canto de Analisando com alfa 1/255, resíduo praticamente transparente. Os arquivos e seu canal alfa foram preservados sem pós-processamento. A coleção não foi aplicada em uma página nem convertida em vídeo nesta tarefa.
