const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $(".playlist");

const app = {
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
  handlEvents: function () {
    document.onscroll = function () {
      console.log(window.scrollY);
    }
  },
  start: function () {
    this.handlEvents()
    this.render()

  },
}
app.start();

