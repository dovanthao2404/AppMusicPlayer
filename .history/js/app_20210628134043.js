const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $('.player');

const playList = $(".playlist");
const heading = $('header h2');
const cdThumb = $(".cd-thumb");
const audio = $("#audio")
const cd = $('.cd');

const playBtn = $('.btn-toggle-play');


const app = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: 'Nevada',
      singer: 'Vicetone',
      path: '../music/nevada.mp3',
      image: '../img/nevada.jpeg'
    }, {
      name: 'Bai Nay Child Phe',
      singer: 'Den Vau',
      path: '../music/child.mp3',
      image: '../img/bainaychildphet.jpg'
    }, {
      name: 'Dance monkey',
      singer: 'Tones',
      path: '../music/dancemokey.mp3',
      image: '../img/dancemonkey.jpg'
    }, {
      name: 'Loi nho',
      singer: 'Den Vau',
      path: '../music/loinho.mp3',
      image: '../img/loinho.jpg'
    }, {
      name: 'Tron Tim',
      singer: 'Den Vau',
      path: '../music/trontim.mp3',
      image: '../img/trontim.jpg'
    }, {
      name: 'Waiting for love',
      singer: 'Avicii',
      path: '../music/waitingforlove.mp3',
      image: '../img/waitingforlove.jpg'
    },

  ],
  render: function () {
    const htmls = this.songs.map(song => {
      return `<div class="song">
      <div class="thumb" style="background-image: url('${song.image}')">
      </div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
      </div>
      <div class="option">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>`
    })
    playList.innerHTML = htmls.join('');
  },
  defineProperties: function () {
    Object.defineProperty(this, 'currentSong', {
      get: function () {
        return this.songs[this.currentIndex];
      }
    })
  },
  handlEvents: function () {

    // xu ly phong to thu nho cd
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0 + 'px';

      cd.style.opacity = newCdWidth / cdWidth;
    }

    // xu ly click play
    playBtn.onclick = function () {
      audio.play();
      player.classList.toggle("playing");
    }

  },
  loadCurrentSong: function () {
    heading.texContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
    audio.src = this.currentSong.path;
  },
  start: function () {

    // Dinh nghia cac thuoc tinh cho object
    this.defineProperties()

    // Lang nghe xu ly su kien
    this.handlEvents()
    // Tai bai dau tien vao UI khi chay
    this.loadCurrentSong();
    // render playlist
    this.render()

  },
}
app.start();

