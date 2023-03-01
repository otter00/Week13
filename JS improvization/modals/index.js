!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
    let modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay      = document.querySelector('#overlay-modal'),
        closeButtons = document.querySelector('.js-modal-close');
    
    /* открытие окон. */
    modalButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {

        e.preventDefault();

            modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

        modalElem.classList.add('active');
        overlay.classList.add('active');
       }); // end click
    }); // end foreach

    /* закрытие окон */
    closeButtons.forEach(function(item) {
        item.addEventListener('click', function(e) {
        let parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
        });
    }); // end foreach

    /* закрытие по ESC */
    document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (e.key == 27) {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay.active').classList.remove('active');
        };
    }, false);

    /* скрытие окна при клике на подложку */
    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
  }); // end ready