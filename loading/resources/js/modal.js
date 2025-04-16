const modal = document.getElementById('modal');
const modalImages = document.getElementById('modal-images');
const closeBtn = document.querySelector('.close');

// image-box들 클릭 이벤트
document.querySelectorAll('.image-box').forEach((box) => {
    box.addEventListener('click', () => {
        // 이미지 데이터: dataset 속성으로 가져오기
        const imgs = box.dataset.images.split(',');

        // 모달 내용 초기화
        modalImages.innerHTML = '';

        // 이미지 하나씩 추가
        imgs.forEach((src) => {
            const img = document.createElement('img');
            img.src = src.trim();
            modalImages.appendChild(img);
        });

        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// 닫기 버튼 이벤트
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 스크롤 해제
});

// 모달 바깥 클릭 시 닫기
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
