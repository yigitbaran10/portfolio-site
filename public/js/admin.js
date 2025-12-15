// Tema renkleri ile body class güncelleme
document.querySelectorAll('input[name="color"]').forEach(input=>{
    input.addEventListener('input', e=>{
        document.body.style.backgroundColor = e.target.value;
        document.body.style.color = (getComputedStyle(document.body).backgroundColor === 'rgb(255, 255, 255)') ? '#000' : '#fff';
    });
});

// Dinamik Light/Dark kontrolü
function updateBodyClass(theme){
    if(theme.toLowerCase().includes('dark')) document.body.classList.add('dark');
    else document.body.classList.add('light');
}

// Sayfa yüklendiğinde mevcut temayı uygula
const currentTheme = document.body.getAttribute('data-current-theme');
if(currentTheme) updateBodyClass(currentTheme);
