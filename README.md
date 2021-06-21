![PedrenriqueAnalytics](https://raw.githubusercontent.com/henchaves/pedrenrique-analytics/master/frontend/public/brand.png)

# Introdução

A ideia por trás do nosso trabalho final de Programação Avançada, foi a de criar uma empresa que prestasse serviços para hospitais fazendo o uso principalmente das técnicas de Inteligência Artificial. Os serviços a serem prestados foram divididos em duas principais categorias: assistência médica e infraestrutura. A primeira, trata de soluções com foco no paciente, como os casos de diagnóstico, prognóstico e tratamento de doenças. Já a segunda, é voltada para a organização hospitalar e os aparelhos, focando no gerenciamento, monitoramento e predição de falhas. 

# Aplicação

Com o intuito de demonstrar como seria um de nossos serviços,  criamos um produto mínimo viável que consiste em uma página na web com uma demonstração de serviço.  Nessa demonstração, utilizamos um classificador de Raio-X de pulmão treinado em um modelo Tensorflow. Esse classificador recebe uma imagem de um Raio-X e passa por uma rede convolucional, podendo gerar trêsclassificaçoes como resultado:  COVID, Pneumonia ou Normal.  Essa aplicação não possui validação médica ainda, é apenas um exemplo de como seria utilizado pelos médicos e hospitais.

# Tecnologia

Para o nosso produto m ́ınimo vi ́avel (MVP), dividimos nossa aplica ̧c ̃ao em trˆes camadas indepen-dentes:frontend,backendetensorflow.  Na primeira camada (frontend), utilizamos oReact,uma das bibliotecas mais conhecidas para desenvolvimento de SPAs (Single Page Application), comseu frameworkNext.js, que implementa Server-Side Rendering das p ́aginas e possui vantagens comoa facilidade na cria ̧c ̃ao de rotas.  Al ́em disso, tamb ́em utilizamos em conjunto a bibliotecarbx, queimplementa componentes doBulma UI, um framework CSS, facilitando a cria ̧c ̃ao de uma p ́aginapara quem n ̃ao possui muitos conhecimentos de design.  O backend  ́e o nosso interlocutor entre ofrontend e o modelo tensorflow, portanto, escolhemos o frameworkFlaskpara essa camada.  Umframework na linguagemPythonpermite que utilizemos outras bibliotecas da linguagem que lidammuito bem com tratamento de dados.  No caso, como nosso modelo tensorflow tamb ́em foi treinadoem Python,  um backend na mesma linguagem permite uma reprodutibilidade do m ́etodo de pro-cessamento antes da inferˆencia dos dados.  Por  ́ultimo, utilizamos um modeloTensorflowem umsistema chamado deTensorflow Serving, onde disponibiliza modelos de Deep Learning atrav ́es deRESTful API, facilitando a inferˆencia por requisi ̧c ̃oes.  Todas essas camadas est ̃ao isoladas em con-tainers Docker independentes, facilitando a manuten ̧c ̃ao individualizada de cada uma. O código da nossa aplicação pode ser acessado nesse repositório.

# Referências

[1] https://github.com/sandeco/CanalSandeco/tree/master/Deep%20Learning%20s%C3%A9rie/%2315%20-%20Detectando%20Covid-19%20em%20imagens%20m%C3%A9dicas

[2] https://www.coursera.org/specializations/ai-for-medicine

[3] https://venturebeat.com/2021/04/16/facebook-claims-ai-can-predict-drug-combinations-to-treat-complex-diseases/

