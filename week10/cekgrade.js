indL = 80
engL = 75
math = 85
science = 70
rate = (indL + engL + math + science) / 4
const cekGrade = (nilai) =>{
    if (nilai <= 90 && nilai >= 100) {
        console.log('nilai A')
    }
    else if (nilai <= 80) {
        console.log('nilai B')  
    }
    else if (nilai <= 70) {
        console.log('nilai C')
    }
    else if (nilai <= 60 && nilai >= 0) {
        console.log('nilai D')
    }
    else{
        console.log('input salah')
    }
}
cekGrade(rate)