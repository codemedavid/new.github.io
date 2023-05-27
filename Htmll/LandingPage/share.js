const link = encodeURI(window.location.href);
const message = encodeURIComponent('Balloon Garland');
const title = encodeURIComponent(document.querySelector('titel').textContent);

console.log([link,message,title]);

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;
