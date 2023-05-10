
/*
Dessa forma, o empresário chegou nos seguintes resultados:

Despesas fixas (DF) = 15% sobre a venda
Despesas variáveis (DV) = 20% sobre a venda
Margem de lucro (ML) = 12%
Custo de produção (CP) = R$ 20

Primeiro calculamos o Markup:
markup = 100 / [100 - (df + dv + ml)]
markup = 100 / [100 - (15 + 20 + 12)]
100/[100 -47]
100/53

Markup = 1,88
*/

// Função para calcular o markup
function calcularMarkup(event) {
    event.preventDefault();
    
    const df = parseFloat(document.getElementById('df').value.replace(',','.'));
    const dv = parseFloat(document.getElementById('dv').value.replace(',','.'));
    const ml = parseFloat(document.getElementById('ml').value.replace(',','.'));
  /*const custo = parseFloat(document.getElementById('custo').value.replace(',','.'));*/
  

    // Verifica se os campos são válidos
    if (isNaN(df) || isNaN(dv) || isNaN(ml)) {        
        alert('Por favor, preencha todos os campos corretamente, inserindo somente números.');  
        limpar();
        
        return;
    }

    const markup = 100 / [100 - (df + dv + ml)];
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `O Markup é: ${markup.toFixed(2).replace('.',',')}`;

}

// Adiciona o evento de submit ao formulário
document.getElementById('markupForm').addEventListener('submit', calcularMarkup);

/*FUNÇÃO LIMPAR CAMPOS*/
function limpar(){
    with (document) {
    getElementById("df").value = "";
    getElementById("dv").value = "";
    getElementById("ml").value = "";        
 /* getElementById("custo").value = ""; */
    getElementById("resultado").innerHTML = "";
        df.focus();
    }
}

/*
Para calcular o Preço de Venda, usamos a seguinte fórmula:
Preço de Venda (PV)
Markup (MK)
Custo de Produção (ML)

Preço de venda = Markup x Custo de Produção
*/

// Função para calcular PREÇO DE VENDA
function calcularPrecoVenda(event) {
    event.preventDefault();

    const mk = parseFloat(document.getElementById('mk').value.replace(',','.'));     
    const cp = parseFloat(document.getElementById('cp').value.replace(',','.'));
    
    // Verifica se os campos são válidos
    if (isNaN(mk) || isNaN(cp)) {
        alert('Por favor, preencha todos os campos corretamente, inserindo somente números.'); 
        limparCampos();
        return;
    }

    const precoVenda = mk * cp ;
    const resultadoElement = document.getElementById('resultado-pv');
    resultadoElement.textContent = `O Preço de Venda é : R$ ${precoVenda.toFixed(2).replace('.',',')}`;
    }


// Adiciona o evento de submit ao formulário
document.getElementById('precodevendaForm').addEventListener('submit', calcularPrecoVenda);

/*FUNÇÃO LIMPAR CAMPOS*/
function limparCampos(){
    with (document) {    
    getElementById("mk").value = "";       
    getElementById("cp").value = "";
    getElementById("resultado-pv").innerHTML = "";
        mk.focus();
    }
}

