![PedrenriqueAnalytics](https://raw.githubusercontent.com/henchaves/pedrenrique-analytics/master/frontend/public/brand.png)

# Introdução

A ideia por trás do nosso trabalho final de Programação Avançada, foi a de criar uma empresa que prestasse serviços para hospitais fazendo o uso principalmente das técnicas de Inteligência Artificial. Os serviços a serem prestados foram divididos em duas principais categorias: assistência médica e infraestrutura. A primeira, trata de soluções com foco no paciente, como os casos de diagnóstico, prognóstico e tratamento de doenças. Já a segunda, é voltada para a organização hospitalar e os aparelhos, focando no gerenciamento, monitoramento e predição de falhas. 

# Aplicação

Com o intuito de demonstrar como seria um de nossos serviços,  criamos um produto mínimo viável que consiste em uma página na web com uma demonstração de serviço.  Nessa demonstração, utilizamos um classificador de Raio-X de pulmão treinado em um modelo Tensorflow. Esse classificador recebe uma imagem de um Raio-X e passa por uma rede convolucional, podendo gerar trêsclassificaçoes como resultado:  COVID, Pneumonia ou Normal.  Essa aplicação não possui validação médica ainda, é apenas um exemplo de como seria utilizado pelos médicos e hospitais.

# Tecnologia

Para o nosso produto mínimo viável (MVP), dividimos nossa aplicação em três camadas independentes: **frontend**, **backend** e **tensorflow**.  Na primeira camada (frontend), utilizamos o **React**, uma das bibliotecas mais conhecidas para desenvolvimento de SPAs (Single Page Application), com seu framework **Next.js**, que implementa Server-Side Rendering das páginas e possui vantagens como a facilidade na criação de rotas.  Além disso, também utilizamos em conjunto a biblioteca **rbx**, que implementa componentes do **Bulma UI**, um framework CSS, facilitando a criação de uma página para quem não possui muitos conhecimentos de design.  O backend  ́e o nosso interlocutor entre o frontend e o modelo tensorflow, portanto, escolhemos o framework **Flask** para essa camada.  Um framework na linguagem Python permite que utilizemos outras bibliotecas da linguagem que lidam muito bem com tratamento de dados.  No caso, como nosso modelo tensorflow também foi treinado em Python,  um backend na mesma linguagem permite uma reprodutibilidade do método de processamento antes da inferência dos dados.  Por  ́ultimo, utilizamos um modelo **Tensorflow** em um sistema chamado de **Tensorflow Serving**, onde disponibiliza modelos de Deep Learning através de **RESTful API**, facilitando a inferência por requisições. Todas essas camadas estão isoladas em containers **Docker** independentes, facilitando a manutenção individualizada de cada uma. O código da nossa aplicação pode ser acessado nesse repositório.

# Referências

[1] https://github.com/sandeco/CanalSandeco/tree/master/Deep%20Learning%20s%C3%A9rie/%2315%20-%20Detectando%20Covid-19%20em%20imagens%20m%C3%A9dicas

[2] https://www.coursera.org/specializations/ai-for-medicine

[3] https://venturebeat.com/2021/04/16/facebook-claims-ai-can-predict-drug-combinations-to-treat-complex-diseases/

[4] https://nihcc.app.box.com/v/ChestXray-NIHCC

[5] https://www.kaggle.com/tawsifurrahman/covid19-radiography-database
