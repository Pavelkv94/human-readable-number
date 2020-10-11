module.exports = function toReadable(number) {
    const num = {
        null: [0, , 'ten', 'hundred'],
        one: [1, 'one', 'eleven'],
        two: [2, 'two', 'twelve', 'twenty'],
        three: [3, 'three', 'thirteen', 'thirty'],
        four: [4, 'four', 'fourteen', 'forty'],
        five: [5, 'five', 'fifteen', 'fifty'],
        six: [6, 'six', 'sixteen', 'sixty'],
        seven: [7, 'seven', 'seventeen', 'seventy'],
        eight: [8, 'eight', 'eighteen', 'eighty'],
        nine: [9, 'nine', 'nineteen', 'ninety'],
      };

      //если число 0 то выводим zero
      if (number === 0) { return 'zero' };
      // число от 1 до 9
      if (number > 0 && number < 10) {
        for (key in num) {
          if (number == num[key][0]) { return num[key][1] };
        }
      };
      //число от 10 до 20
      if (number > 9 && number < 20) {

        for (key in num) {
          if ((number % 10) == num[key][0]) { return num[key][2] }
        }
      };
      //число от 20 до 99
      if (number > 19 && number < 100) {
        let x = [];
        if (number % 10 === 0) {
          for (key in num) {
            if (Math.floor(number / 10) == num[key][0]) { return (num[key][3]) };
          }
        } else {
          for (key in num) {

            if (Math.floor(number / 10) == num[key][0]) { x.push(num[key][3]) };
          }
          for (key in num) {
            if (number % 10 == num[key][0]) { x.push(num[key][1]) };
          }
          return x.join(' ');
        } 
      };
      //числа от 100 до 999
      if (number > 99 && number < 1000) {
        let x = [];
        //Добавляем в итоговый массив сотни
        for (key in num) {
          if (Math.floor(number / 100) == num[key][0]) { x.push(num[key][1]); x.push(num.null[3]) };
        };
        //добавляем в итоговый массив десятки от 10 до 100
        if ((number % 100) > 19) {
          for (key in num) {
            if (Math.floor((number % 100) / 10) == num[key][0]) { x.push(num[key][3]) };
          }
          for (key in num) {
            if (number % 10 == num[key][0]) { x.push(num[key][1]) };
          }

        } else if ((number % 100) < 20 && (number % 100) > 9) {
          for (key in num) {
            if (((number % 100) % 10) == num[key][0]) { x.push(num[key][2]) }
          }
        } else if (((number % 100) % 10) > 0 && ((number % 100) % 10) < 10) {
          for (key in num) {
            if (((number % 100) % 10) == num[key][0]) { x.push(num[key][1]) };
          }
        };

        if (x[x.length - 1] !== undefined) { return x.join(' ') }
        else {
          let p = [];
          for (i = 0; i < (x.length - 1); i++) {
            p.push(x[i]);

          }

          return p.join(' ');
        }
      }
    }