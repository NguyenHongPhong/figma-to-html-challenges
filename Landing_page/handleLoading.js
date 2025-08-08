const loadDOM = async (path, containerId) => {
    const res = await fetch(path);
    const html = await res.text();
    const container = document.querySelector(containerId);
    container.innerHTML += html;
}

loadDOM('./components/article1.html', '#section1');
loadDOM('./components/article2.html', '#article2');
loadDOM('./components/article3.html', '#section3');
loadDOM('./components/article4.html', '#section4');
loadDOM('./components/section5.html', '#section5');

