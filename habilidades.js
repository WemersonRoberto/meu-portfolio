const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
                    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
                    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
                    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
                    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
                    '<p>Bootstrap</p> <br> <p>É um framework web desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript.</p> <br>',
                    '<p>TypeScript</p> <br> <p>É uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.</p> <br>',
                    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
                    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>'
]
const dataInicio = [
    (new Date(2021, 10, 1)).getTime(), // 0
    (new Date(2021, 10, 1)).getTime(), // 1
    (new Date(2022, 0, 1)).getTime(), // 2
    (new Date(2022, 3, 1)).getTime(), // 3
    (new Date(2022, 3, 1)).getTime(), // 4
    (new Date(2022, 1, 1)).getTime(), // 5
    (new Date(2021, 11, 1)).getTime(), // 6
    (new Date(2021, 11, 1)).getTime(), // 7
    ]
const dataHoje = (new Date()).getTime();

skills.forEach(  (elemento, index) => {
let index1 = index;
let elemento1 = elemento;
elemento.addEventListener('mouseover', (evento) => {
let tempo = 'mês';
let tempoDeExperiencia = Math.round((dataHoje-dataInicio[index1])/(1000*60*60*24*30));
if (tempoDeExperiencia > 1) tempo = 'meses'
descricao.innerHTML = `<p>${sobreSkill[index1]} </p>` ;
} )
elemento.addEventListener('mouseout', (evento, elemento,) => {
descricao.innerHTML = '/* Clique em cima de alguma habilidade para ler a descrição */';
} )
} );
