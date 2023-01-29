//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/
const dummyData = {
  sorgu: "176.42.30.138",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "06",
  bölgeAdı: "Ankara",
  şehir: "Ankara",
  zip: "06010",
  enlem: 39.978600000000000136424205265939235687255859375,
  boylam: 32.826200000000000045474735088646411895751953125,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "Turkcell Internet",
  organizasyon: "",
  as: "AS34984 Superonline Iletisim Hizmetleri A.S.",
};

//kodlar buraya gelecek

axios.get("http://example.com/data", {
  params: {
    ip: "176.42.30.138",
  },
});

let cards = document.querySelector(".cards");

const cardYapici = (item) => {
  const {
    ülke,
    parabirimi,
    saatdilimi,
    isp,
    şehir,
    enlem,
    boylam,
    sorgu,
    ülkeKodu,
    ülkebayrağı,
  } = item;

  const divEkle = document.createElement("div");
  divEkle.setAttribute("class", "card");

  const imgEkle = document.createElement("img");
  imgEkle.setAttribute("src", ülkebayrağı);
  divEkle.appendChild(imgEkle);

  const divEkle2 = document.createElement("div");
  divEkle2.setAttribute("class", "card-info");
  divEkle.appendChild(divEkle2);

  const h3Ekle = document.createElement("h3");
  h3Ekle.setAttribute("class", "ip");
  h3Ekle.textContent = sorgu;
  divEkle2.appendChild(h3Ekle);

  const pEkle = document.createElement("p");
  pEkle.classList.add("ulke");
  pEkle.textContent = `${ülke} (${ülkeKodu})`;
  divEkle2.appendChild(pEkle);

  const pEkle2 = document.createElement("p");
  pEkle2.textContent = `Enlem: ${enlem} Boylam: ${boylam}`;
  divEkle2.appendChild(pEkle2);

  const pEkle3 = document.createElement("p");
  pEkle3.textContent = `Şehir: ${şehir}`;
  divEkle2.appendChild(pEkle3);

  const pEkle4 = document.createElement("p");
  pEkle4.textContent = `Saat dilimi: ${saatdilimi}`;
  divEkle2.appendChild(pEkle4);

  const pEkle5 = document.createElement("p");
  pEkle5.textContent = `Para birimi: ${parabirimi}`;
  divEkle2.appendChild(pEkle5);

  const pEkle6 = document.createElement("p");
  pEkle6.textContent = `ISP: ${isp}`;
  divEkle2.appendChild(pEkle6);

  return divEkle;
};

const connection = async function () {
  await ipAdresimiAl();
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipgeoapi/" + benimIP,
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      cards.appendChild(cardYapici(a));
    });
};

connection();
