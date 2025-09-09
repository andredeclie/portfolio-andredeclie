// Função para trocar o conteúdo dinamicamente
function mostrar(secao) {
  let conteudo = document.getElementById("conteudo");

  if (secao === "sobre") {
    conteudo.innerHTML = `
      <h2>Sobre Mim</h2>
      <p>Meu nome é <strong>André Declie</strong>. Sou apaixonado por tecnologia, programação e música. 
      Nos meus momentos livres gosto de tocar violão e explorar novas linguagens de programação.</p>
    `;
  } 
  else if (secao === "formacao") {
    conteudo.innerHTML = `
      <h2>Formação</h2>
      <p>Atualmente curso <strong>Engenharia de Software</strong>. Tenho interesse em desenvolvimento web, bancos de dados e inteligência artificial.</p>
      <p><strong>Idiomas:</strong> Português (nativo), Inglês (intermediário).</p>
    `;
  } 
  else if (secao === "portfolio") {
    conteudo.innerHTML = `
      <h2>Portfólio</h2>
      <p>Aqui estão alguns trabalhos que desenvolvi durante o curso:</p>
      <ul style="text-align: left; max-width: 500px; margin: auto;">
        <li><a href="#" target="_blank">Sistema de Gerenciamento de Funcionários (Python)</a></li>
        <li><a href="#" target="_blank">Site de Loja de Marmitas (HTML/CSS/JS)</a></li>
        <li><a href="#" target="_blank">Banco de Dados de Vendas (SQL)</a></li>
      </ul>
    `;
  } 
  else if (secao === "contato") {
    conteudo.innerHTML = `
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Seu nome" required>
        <input type="email" placeholder="Seu e-mail" required>
        <textarea rows="5" placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    `;
  }
}
