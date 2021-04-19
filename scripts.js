// Если есть какие-либо предложения по организации кода, то лучше их записывать сразу в мейн и растаскивать по остальным веткам


// Позиционирование текста по координатам

'use strict'

class Text_over_image {
    constructor (parent_name, div_name, x, y, w, h) {
        let div_name = document.getElementById();
        let parent_name = div_name.parentNode.id;
    }
    text_positioning() {
        div_name.style.position = 'absolute';
        div_name.style.left = x + 'px';
        div_name.style.top = y + 'px';
        div_name.style.width = w + 'px';
        div_name.style.height = h + 'px';
        document.parent_name.appendChild (div_name);
        return div_name;
    }
};

