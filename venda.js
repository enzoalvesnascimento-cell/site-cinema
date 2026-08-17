function calcularBilheteria() {
    // 1. Definição do Estoque Máximo
    const estoqueMaxMeia = 80;
    const estoqueMaxInteira = 100;
    const estoqueMaxVip = 20;

    // 2. Definição dos Preços
    const precoMeia = 15.00;
    const precoInteira = 30.00;
    const precoVip = 50.00;

    // 3. Captura dos valores digitados pelo usuário
    const vendidasMeia = parseInt(document.getElementById('qtdMeia').value) || 0;
    const vendidasInteira = parseInt(document.getElementById('qtdInteira').value) || 0;
    const vendidasVip = parseInt(document.getElementById('qtdVip').value) || 0;

    // 4. Validação de Capacidade (Estoque)
    if (vendidasMeia > estoqueMaxMeia) {
        alert("Erro: Quantidade de Meia-entrada ultrapassa a capacidade permitida (80)!");
        return;
    }
    if (vendidasInteira > estoqueMaxInteira) {
        alert("Erro: Quantidade de Inteira ultrapassa a capacidade permitida (100)!");
        return;
    }
    if (vendidasVip > estoqueMaxVip) {
        alert("Erro: Quantidade de VIP ultrapassa a capacidade permitida (20)!");
        return;
    }

    const faturamentoMeia = vendidasMeia * precoMeia;
    const faturamentoInteira = vendidasInteira * precoInteira;
    const faturamentoVip = vendidasVip * precoVip;
    
    const faturamentoBruto = faturamentoMeia + faturamentoInteira + faturamentoVip;
    const totalVendidos = vendidasMeia + vendidasInteira + vendidasVip;

    const sobraMeia = estoqueMaxMeia - vendidasMeia;
    const sobraInteira = estoqueMaxInteira - vendidasInteira;
    const sobraVip = estoqueMaxVip - vendidasVip;
    const totalSobrou = sobraMeia + sobraInteira + sobraVip;

    const mediaValorPago = totalVendidos > 0 ? (faturamentoBruto / totalVendidos) : 0;

    document.getElementById('resFaturamento').innerHTML = `<strong>Faturamento Bruto Total:</strong> R$ ${faturamentoBruto.toFixed(2)}`;
    document.getElementById('resEstoque').innerHTML = `<strong>Ingressos Restantes no Estoque:</strong> ${totalSobrou} (Meia: ${sobraMeia} | Inteira: ${sobraInteira} | VIP: ${sobraVip})`;
    document.getElementById('resMedia').innerHTML = `<strong>Média de valor por ingresso vendido:</strong> R$ ${mediaValorPago.toFixed(2)}`;

    document.getElementById('resultado').style.display = 'block';
}
