const moviesMock = [
  {
    id: '1b32368a-e596-4701-81c7-c05d646594a7',
    title: 'Lahore',
    year: 1992,
    cover: 'http://dummyimage.com/224x151.bmp/dddddd/000000',
    description:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    duration: 77,
    contentRating: null,
    source:
      'http://ucoz.ru/ipsum/praesent/blandit/lacinia.json?aliquam=turpis&non=donec&mauris=posuere&morbi=metus&non=vitae&lectus=ipsum&aliquam=aliquam&sit=non&amet=mauris&diam=morbi&in=non&magna=lectus&bibendum=aliquam&imperdiet=sit&nullam=amet&orci=diam&pede=in&venenatis=magna&non=bibendum&sodales=imperdiet&sed=nullam&tincidunt=orci&eu=pede&felis=venenatis&fusce=non&posuere=sodales&felis=sed&sed=tincidunt&lacus=eu&morbi=felis&sem=fusce&mauris=posuere&laoreet=felis&ut=sed&rhoncus=lacus&aliquet=morbi&pulvinar=sem&sed=mauris&nisl=laoreet&nunc=ut&rhoncus=rhoncus',
    tags: ['Drama', 'Action|Adventure|Crime|Drama|Romance'],
  },
  {
    id: 'd446ce7a-75e6-4ed6-811c-c109796ff2d5',
    title: 'Superdad',
    year: 2007,
    cover: 'http://dummyimage.com/246x232.jpg/ff4444/ffffff',
    description:
      'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 41,
    contentRating: null,
    source:
      'https://opera.com/rhoncus/sed.png?ante=urna&nulla=pretium&justo=nisl&aliquam=ut&quis=volutpat&turpis=sapien&eget=arcu&elit=sed&sodales=augue&scelerisque=aliquam',
    tags: [
      'Documentary',
      'Drama|Romance|War',
      'Documentary',
      'Comedy|Drama|Musical|Romance',
    ],
  },
  {
    id: '55a750b9-f2cc-4629-a0ea-62f86e79c39b',
    title: 'Red Dust',
    year: 2006,
    cover: 'http://dummyimage.com/126x204.jpg/5fa2dd/ffffff',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
    duration: 98,
    contentRating: null,
    source:
      'http://arizona.edu/sodales/sed/tincidunt.xml?in=suspendisse&consequat=potenti&ut=cras&nulla=in&sed=purus&accumsan=eu&felis=magna&ut=vulputate&at=luctus&dolor=cum&quis=sociis&odio=natoque&consequat=penatibus&varius=et&integer=magnis&ac=dis&leo=parturient&pellentesque=montes&ultrices=nascetur&mattis=ridiculus&odio=mus&donec=vivamus&vitae=vestibulum&nisi=sagittis&nam=sapien&ultrices=cum&libero=sociis&non=natoque&mattis=penatibus&pulvinar=et&nulla=magnis&pede=dis&ullamcorper=parturient&augue=montes&a=nascetur&suscipit=ridiculus&nulla=mus&elit=etiam&ac=vel&nulla=augue&sed=vestibulum&vel=rutrum&enim=rutrum&sit=neque&amet=aenean&nunc=auctor&viverra=gravida&dapibus=sem&nulla=praesent&suscipit=id&ligula=massa&in=id',
    tags: [
      'Adventure|Animation|Children|Fantasy',
      'Sci-Fi',
      'Adventure|Animation|Children|Comedy',
      'Comedy',
      'Documentary',
    ],
  },
  {
    id: '5aab3113-91b7-4fa7-9064-4c22f2ef1f6a',
    title: 'Shallow Hal',
    year: 2009,
    cover: 'http://dummyimage.com/233x129.jpg/cc0000/ffffff',
    description:
      'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
    duration: 96,
    contentRating: null,
    source:
      'https://cbslocal.com/vitae/ipsum/aliquam/non/mauris/morbi.json?nulla=magna&nisl=vestibulum&nunc=aliquet&nisl=ultrices&duis=erat&bibendum=tortor&felis=sollicitudin&sed=mi&interdum=sit&venenatis=amet&turpis=lobortis&enim=sapien&blandit=sapien&mi=non&in=mi&porttitor=integer&pede=ac&justo=neque&eu=duis&massa=bibendum&donec=morbi&dapibus=non&duis=quam&at=nec&velit=dui&eu=luctus&est=rutrum&congue=nulla&elementum=tellus&in=in&hac=sagittis&habitasse=dui&platea=vel&dictumst=nisl&morbi=duis&vestibulum=ac&velit=nibh&id=fusce&pretium=lacus&iaculis=purus&diam=aliquet&erat=at&fermentum=feugiat&justo=non&nec=pretium&condimentum=quis&neque=lectus&sapien=suspendisse&placerat=potenti&ante=in&nulla=eleifend&justo=quam&aliquam=a&quis=odio&turpis=in',
    tags: ['Drama|Musical', 'Comedy|Thriller'],
  },
  {
    id: '6ce908c2-c314-4aa4-844e-3ee0690ce9eb',
    title: 'Sweet Smell of Success',
    year: 1985,
    cover: 'http://dummyimage.com/204x160.png/cc0000/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 77,
    contentRating: null,
    source:
      'https://timesonline.co.uk/eros/elementum/pellentesque/quisque/porta/volutpat/erat.xml?vel=hac&augue=habitasse&vestibulum=platea&ante=dictumst&ipsum=maecenas&primis=ut&in=massa&faucibus=quis&orci=augue&luctus=luctus&et=tincidunt&ultrices=nulla&posuere=mollis&cubilia=molestie&curae=lorem&donec=quisque&pharetra=ut&magna=erat&vestibulum=curabitur&aliquet=gravida&ultrices=nisi&erat=at&tortor=nibh&sollicitudin=in&mi=hac&sit=habitasse&amet=platea&lobortis=dictumst&sapien=aliquam&sapien=augue&non=quam&mi=sollicitudin&integer=vitae&ac=consectetuer&neque=eget&duis=rutrum&bibendum=at&morbi=lorem&non=integer&quam=tincidunt&nec=ante&dui=vel&luctus=ipsum&rutrum=praesent&nulla=blandit&tellus=lacinia&in=erat&sagittis=vestibulum&dui=sed&vel=magna&nisl=at&duis=nunc&ac=commodo&nibh=placerat&fusce=praesent&lacus=blandit&purus=nam&aliquet=nulla&at=integer',
    tags: ['Comedy|Drama', 'Action|Adventure', 'Comedy|Drama', 'Comedy'],
  },
  {
    id: '346b4c7a-98dc-4084-944e-de764784697b',
    title: 'My Favorite Brunette',
    year: 1997,
    cover: 'http://dummyimage.com/201x103.bmp/5fa2dd/ffffff',
    description:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.',
    duration: 17,
    contentRating: null,
    source:
      'http://geocities.jp/a/nibh/in/quis/justo/maecenas.html?quis=odio&turpis=justo&eget=sollicitudin&elit=ut&sodales=suscipit&scelerisque=a&mauris=feugiat&sit=et&amet=eros&eros=vestibulum&suspendisse=ac&accumsan=est&tortor=lacinia&quis=nisi&turpis=venenatis&sed=tristique&ante=fusce&vivamus=congue&tortor=diam&duis=id&mattis=ornare&egestas=imperdiet&metus=sapien&aenean=urna&fermentum=pretium&donec=nisl&ut=ut&mauris=volutpat&eget=sapien&massa=arcu&tempor=sed&convallis=augue&nulla=aliquam&neque=erat&libero=volutpat&convallis=in&eget=congue&eleifend=etiam&luctus=justo&ultricies=etiam&eu=pretium&nibh=iaculis&quisque=justo&id=in&justo=hac&sit=habitasse&amet=platea&sapien=dictumst&dignissim=etiam&vestibulum=faucibus&vestibulum=cursus&ante=urna&ipsum=ut&primis=tellus&in=nulla&faucibus=ut&orci=erat',
    tags: [
      'Adventure|Children|Fantasy|Sci-Fi|Thriller',
      'Documentary',
      'Adventure|Animation|Children|Comedy',
      'Action',
    ],
  },
  {
    id: 'e3c3edab-73bb-4eb9-a104-2d000a35851c',
    title: 'Ragamuffin',
    year: 2004,
    cover: 'http://dummyimage.com/159x162.jpg/ff4444/ffffff',
    description:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
    duration: 12,
    contentRating: null,
    source:
      'https://e-recht24.de/odio/justo/sollicitudin/ut/suscipit/a/feugiat.html?nulla=non&ac=mi&enim=integer&in=ac&tempor=neque&turpis=duis&nec=bibendum&euismod=morbi&scelerisque=non&quam=quam&turpis=nec&adipiscing=dui&lorem=luctus&vitae=rutrum&mattis=nulla&nibh=tellus&ligula=in&nec=sagittis&sem=dui&duis=vel&aliquam=nisl&convallis=duis&nunc=ac&proin=nibh&at=fusce&turpis=lacus&a=purus&pede=aliquet&posuere=at&nonummy=feugiat&integer=non&non=pretium&velit=quis&donec=lectus&diam=suspendisse&neque=potenti&vestibulum=in&eget=eleifend&vulputate=quam&ut=a&ultrices=odio&vel=in&augue=hac&vestibulum=habitasse&ante=platea&ipsum=dictumst&primis=maecenas&in=ut&faucibus=massa&orci=quis&luctus=augue&et=luctus&ultrices=tincidunt&posuere=nulla&cubilia=mollis&curae=molestie&donec=lorem',
    tags: ['Drama|Horror|Thriller', 'Documentary', 'Drama'],
  },
  {
    id: '58de3d64-a7bb-487e-b58f-082365a2dbf1',
    title: 'Cockneys vs Zombies',
    year: 1998,
    cover: 'http://dummyimage.com/233x113.png/ff4444/ffffff',
    description:
      'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 9,
    contentRating: null,
    source:
      'https://newsvine.com/aliquet.jsp?lacus=tempor&at=turpis&turpis=nec&donec=euismod&posuere=scelerisque&metus=quam&vitae=turpis&ipsum=adipiscing&aliquam=lorem&non=vitae&mauris=mattis&morbi=nibh&non=ligula&lectus=nec&aliquam=sem&sit=duis&amet=aliquam&diam=convallis&in=nunc&magna=proin&bibendum=at&imperdiet=turpis&nullam=a&orci=pede&pede=posuere&venenatis=nonummy&non=integer&sodales=non&sed=velit&tincidunt=donec&eu=diam&felis=neque&fusce=vestibulum&posuere=eget&felis=vulputate&sed=ut&lacus=ultrices&morbi=vel&sem=augue&mauris=vestibulum&laoreet=ante&ut=ipsum&rhoncus=primis&aliquet=in&pulvinar=faucibus&sed=orci&nisl=luctus&nunc=et&rhoncus=ultrices&dui=posuere&vel=cubilia&sem=curae&sed=donec&sagittis=pharetra&nam=magna&congue=vestibulum&risus=aliquet&semper=ultrices&porta=erat&volutpat=tortor&quam=sollicitudin&pede=mi&lobortis=sit&ligula=amet&sit=lobortis&amet=sapien&eleifend=sapien&pede=non&libero=mi&quis=integer&orci=ac&nullam=neque&molestie=duis&nibh=bibendum&in=morbi&lectus=non&pellentesque=quam&at=nec&nulla=dui&suspendisse=luctus&potenti=rutrum&cras=nulla&in=tellus&purus=in&eu=sagittis&magna=dui&vulputate=vel&luctus=nisl&cum=duis&sociis=ac&natoque=nibh&penatibus=fusce',
    tags: ['Drama'],
  },
  {
    id: '5b46b45c-136a-4b8e-989d-4ce95ae83935',
    title: "Futurama: Bender's Game",
    year: 1989,
    cover: 'http://dummyimage.com/101x204.bmp/5fa2dd/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
    duration: 88,
    contentRating: null,
    source:
      'http://amazonaws.com/elit/proin/risus/praesent/lectus.html?libero=adipiscing&nullam=elit&sit=proin&amet=risus&turpis=praesent&elementum=lectus&ligula=vestibulum&vehicula=quam&consequat=sapien&morbi=varius&a=ut&ipsum=blandit&integer=non&a=interdum&nibh=in&in=ante&quis=vestibulum&justo=ante&maecenas=ipsum&rhoncus=primis&aliquam=in&lacus=faucibus&morbi=orci&quis=luctus&tortor=et&id=ultrices&nulla=posuere&ultrices=cubilia&aliquet=curae&maecenas=duis&leo=faucibus&odio=accumsan&condimentum=odio&id=curabitur&luctus=convallis&nec=duis&molestie=consequat&sed=dui&justo=nec&pellentesque=nisi&viverra=volutpat&pede=eleifend&ac=donec&diam=ut&cras=dolor&pellentesque=morbi&volutpat=vel&dui=lectus&maecenas=in',
    tags: ['Documentary', 'Comedy', 'Comedy|Romance'],
  },
  {
    id: 'c48e1c47-1633-4781-8adb-f13c804e7e26',
    title: 'Dying Room Only',
    year: 2010,
    cover: 'http://dummyimage.com/182x162.bmp/cc0000/ffffff',
    description:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    duration: 40,
    contentRating: null,
    source:
      'https://homestead.com/metus.aspx?aliquet=fermentum&ultrices=justo&erat=nec&tortor=condimentum&sollicitudin=neque&mi=sapien&sit=placerat&amet=ante&lobortis=nulla&sapien=justo&sapien=aliquam&non=quis&mi=turpis&integer=eget&ac=elit&neque=sodales&duis=scelerisque&bibendum=mauris&morbi=sit&non=amet&quam=eros&nec=suspendisse&dui=accumsan&luctus=tortor&rutrum=quis&nulla=turpis&tellus=sed&in=ante&sagittis=vivamus&dui=tortor&vel=duis&nisl=mattis&duis=egestas&ac=metus&nibh=aenean&fusce=fermentum&lacus=donec&purus=ut&aliquet=mauris&at=eget&feugiat=massa&non=tempor&pretium=convallis&quis=nulla&lectus=neque&suspendisse=libero&potenti=convallis&in=eget&eleifend=eleifend&quam=luctus&a=ultricies&odio=eu&in=nibh&hac=quisque&habitasse=id&platea=justo&dictumst=sit&maecenas=amet&ut=sapien&massa=dignissim&quis=vestibulum&augue=vestibulum&luctus=ante&tincidunt=ipsum&nulla=primis&mollis=in&molestie=faucibus&lorem=orci&quisque=luctus&ut=et&erat=ultrices&curabitur=posuere&gravida=cubilia&nisi=curae&at=nulla&nibh=dapibus&in=dolor&hac=vel&habitasse=est&platea=donec&dictumst=odio&aliquam=justo&augue=sollicitudin&quam=ut&sollicitudin=suscipit&vitae=a&consectetuer=feugiat',
    tags: ['Comedy', 'Drama', 'Comedy'],
  },
];

function filteredMoviesMock(tag) {
  return moviesMock.filter((movie) => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock,
};
