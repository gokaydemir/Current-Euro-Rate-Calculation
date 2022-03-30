let yeniDizi=[]
let dovizKeys=[]
axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=85dc0abf04222be587efc836de92a404')
  .then((response) => {
   console.log(response.data);
    yeniDizi.push(response.data)
    console.log(yeniDizi[0].rates);
    dovizKeys.push(Object.keys(yeniDizi[0].rates))
    dovizKeys.push(Object.values(yeniDizi[0].rates))

let girilenMiktar=document.getElementById('text1')
let cıkanMiktar=document.getElementById('text2')
let ilkİslemYapılıcakBirim=document.getElementById('doviz')
let ikinciİslemYapılıcakBirim=document.getElementById('doviz2')
  
function dovizHesaplama() {
  for (let i = 0; i < dovizKeys[0].length; i++) {
  let options=document.createElement('option')
  ikinciİslemYapılıcakBirim.appendChild(options)
  options.classList.add('secenek')
  options.innerText=dovizKeys[0][i]
  options.value=dovizKeys[1][i].toFixed(2)
  options.title=dovizKeys[0][i]
  
  }
}
dovizHesaplama()
   
ikinciİslemYapılıcakBirim.addEventListener('click',hesapla)
ikinciİslemYapılıcakBirim.addEventListener('click',tersHesapla)
girilenMiktar.addEventListener('keyup',hesapla)
cıkanMiktar.addEventListener('keyup',tersHesapla)
function hesapla() {
  if (ilkİslemYapılıcakBirim.value>=dovizKeys[1]) {
    cıkanMiktar.value=girilenMiktar.value/ikinciİslemYapılıcakBirim.value
  }
 else if (ilkİslemYapılıcakBirim.value<=dovizKeys[1]){
  cıkanMiktar.value=girilenMiktar.value*ikinciİslemYapılıcakBirim.value
 }
 

}
function tersHesapla() { 
  if (dovizKeys[1]>=ilkİslemYapılıcakBirim.value) {
  girilenMiktar.value=cıkanMiktar.value/ikinciİslemYapılıcakBirim.value
}
else if (dovizKeys[1]<=ilkİslemYapılıcakBirim.value) {
  girilenMiktar.value=cıkanMiktar.value*ikinciİslemYapılıcakBirim.value
}

 
}


  });
 












