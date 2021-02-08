const app = new Vue({
  el: '#root',
  data: {
    arrayCd: [],
    arrayGeneri: [],
    genereScelto: 'all',
  },
  mounted(){
    let quel = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp){
      quel.arrayCd = resp.data.response
      console.log(quel.arrayCd)
      quel.arrayCd.forEach((item) => {
        if(!quel.arrayGeneri.includes(item.genre)){
          quel.arrayGeneri.push(item.genre)
        }
        console.log(quel.arrayGeneri)

      });

    })
  },
})
