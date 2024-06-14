document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('test-js').style.color = 'green';
    document.getElementById('test-js').innerText = 'JavaScript está funcionando corretamente!';
    
    // Exemplo de interatividade: Alert ao clicar em um link
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') !== 'index.html') {
                alert(`Você está prestes a visitar: ${link.getAttribute('href')}`);
            }
        });
    });
});
