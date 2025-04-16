const loading = document.querySelector('.loading');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

window.addEventListener('load', () => {
    setTimeout(() => {
        //로딩속도 구현

        loading.style.opacity = '0';
        html.style.overflow = 'auto'; //스크롤 방지 해제

        setTimeout(() => {
            loading.style.display = 'none';
        }, 400);
    }, 5000);
});

const text = 'Loading...'; // 타이핑할 문구
let index = 0;

function typeWriter() {
    const element =
        document.getElementsByClassName('loading-text')[0];

    if (index < text.length) {
        element.textContent += text[index];
        // element.textContet = element.textContet + text[index];
        index++;
        setTimeout(typeWriter, 200);
    } else {
        // 타이핑이 끝난 후
        setTimeout(() => {
            element.textContent = ''; // 텍스트 초기화
            index = 0;
            typeWriter();
        }, 1000);
    }
}

typeWriter();
