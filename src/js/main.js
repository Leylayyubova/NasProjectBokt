// // document.addEventListener('DOMContentLoaded', function () {
// //     const button = document.getElementById('languageButton');
// //     button.addEventListener('click', function () {
// //         const currentLang = document.documentElement.lang;
// //         if (currentLang === 'az') {
// //             window.location.href = 'index.html';
// //         } else {
// //             window.location.href = 'language.html';
// //         }
// //     });
// // });


// document.addEventListener('DOMContentLoaded', function () {
//     const languageButton = document.getElementById('languageButton');
//     const elementsToTranslate = document.querySelectorAll('[data-az], [data-ru]');

//     languageButton.addEventListener('click', function () {
//         elementsToTranslate.forEach(element => {
//             let azText = element.getAttribute('data-az');
//             let ruText = element.getAttribute('data-ru');
//             let currentText = element.textContent.trim();

//             if (currentText === azText && ruText) {
//                 element.textContent = ruText;
//             } else if (currentText === ruText && azText) {
//                 element.textContent = azText;
//             }
//         });
//     });
// });
function changeLanguage() {
    var currentLanguage = localStorage.getItem('language') || 'az';
    var newLanguage = currentLanguage === 'az' ? 'ru' : 'az';

    var elements = document.querySelectorAll('[data-az], [data-ru]');

    elements.forEach(function(element) {
        if (newLanguage === 'az') {
            element.textContent = element.getAttribute('data-az');
        } else {
            element.textContent = element.getAttribute('data-ru');
        }
    });

    localStorage.setItem('language', newLanguage);

    document.documentElement.lang = newLanguage;
}

window.onload = function() {
    var currentLanguage = localStorage.getItem('language') || 'az';
    document.documentElement.lang = currentLanguage;

    var elements = document.querySelectorAll('[data-az], [data-ru]');

    elements.forEach(function(element) {
        if (currentLanguage === 'az') {
            element.textContent = element.getAttribute('data-az');
        } else {
            element.textContent = element.getAttribute('data-ru');
        }
    });
}

document.getElementById('languageButton').addEventListener('click', changeLanguage);
