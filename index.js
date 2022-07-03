window.onload = function () {
    // 动画函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 15);
    }

    var photo = document.querySelector('.photo');
    var photoWidth = photo.offsetWidth;
    var ul = photo.querySelector('ul');
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;

    function play() {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * photoWidth, function () { })
    }

    var timer = setInterval(function () {
        play();
    }, 2000);

    var buto01 = document.querySelector('.buto01');
    var buto02 = document.querySelector('.buto02');
    var album = document.querySelector('.album');
    var info = document.querySelector('.info');
    buto01.addEventListener('click', function () {
        album.style.backgroundColor = 'orange';
        info.style.backgroundColor = 'rgb(255, 140, 0)';
    });
    buto02.addEventListener('click', function () {
        album.style.backgroundColor = 'pink';
        info.style.backgroundColor = 'rgb(255, 157, 174)';
    });

}



