$(document).ready(function(){
    $("#dropdown-nav-button").click(function() {
        $("#nav-menu").toggleClass('display-block');
    });
    $("#main-top-carousel").owlCarousel({
        singleItem : true,
        autoPlay : 5000
    });
    $(".spec-carousel").owlCarousel({
        itemsCustom : [ [0, 1],
                        [690, 2],
                        [(362 * 3 + 60), 3], ],
        navigation	: true,
        navigationText : ['<span class="spec-arrow-left  spec-arrow" aria-hidden="true"><span>', '<span class="spec-arrow-right  spec-arrow" aria-hidden="true"></span>']
    });
    $(".service-carousel").owlCarousel({
        itemsCustom : [ [0, 1],
                        [600, 2] ],
        navigation	: true,
        navigationText : ['<span class="spec-arrow-left  spec-arrow" aria-hidden="true"><span>', '<span class="spec-arrow-right  spec-arrow" aria-hidden="true"></span>']
    });
    $('.comments-carousel').owlCarousel({
        singleItem : true,
        navigation	: true,
        navigationText : ['<span class="spec-arrow-left  spec-arrow" aria-hidden="true"><span>', '<span class="spec-arrow-right  spec-arrow" aria-hidden="true"></span>']
    });
    $('#languages-carousel').owlCarousel({
        wid : 130,
        itemsCustom : [ [0, 1],
                        [( (130*2) + 140), 2],
                        [( (130*4) + 140 ), 4],
                        [( (130*8) + 140 ), 8],
                        [( (130*12) + 140 ), 12] ],
        items: 12,
        navigation	: true,
        navigationText : ['<span class="spec-arrow-left  spec-arrow" aria-hidden="true"><span>', '<span class="spec-arrow-right  spec-arrow" aria-hidden="true"></span>']
    });
    var fileSelect = $(".rate-file-input");
    var rateSelect = $('select.rate-element');
    setTimeout(function() {
        fileSelect.styler();
        rateSelect.styler();
    }, 100);
    $('#nav-menu > li, .has-dropdown').hover(function(){
       $(this).children('.dropdown-menu').slideToggle('300');
    });
    $('.questions .switch').click( function() {
      $(this).parent().siblings('.inside').slideToggle('300');
    } );
    // $('.up').click(function(event) {
    //   event.preventDefault();
    //   while(window.pageYOffset != 0) {
    //     window.scrollBy(0, -10);
    //   }
    // } );
    $("#slider").slider({
        min: 0,
        max: 10,
        value: 8.6,
        range: "min",
        step: 0.1,
        animate: "normal",
        orientation: "horizontal",
        slide: function(event, ui) {
          $("#total").val($(this).slider("value"));
          var a = $('#slider').slider("value");
          $('#total').attr('value', a);
        },
        stop: function(event, ui) {
          $("#total").val($(this).slider("value"));
          var a = $('#slider').slider("value");
          $('#total').attr('value', a);
        }
    });
    $('#total').change( function() {
      var value = $('#total').val();
      console.log(value);
      var valueArr = value.split('');

      // verify and customize if it needs
      for (var i = 0; i < valueArr.length; i++) {
        var a = valueArr[i];
        if (a == ',' || a == '.') {
          valueArr[i] = '.';
          valueArr.length = i+2;
          break;
        };
        if (isNaN(a) || (a == ' ')) {
          valueArr.splice(i, 1);
          i--;
        }
      }
      value = valueArr.join('');

      if ( value > 10 ) { value = 10};
      if( value < 0 ) { value = 0};
      console.log(value);
      $('#slider').slider("value", value);
      $('#total').attr('value', value);
      $('#total').val(value);
    } );

    $('#range-cont').click(function() {
      $(this).find('.dropped-range-wp').fadeToggle('100');
    });

});










   function bar(form, action) {
        if (action === undefined) {
            alert('stop');
        }
    }
    var bars = function(form, action) {
        if(action === undefined) {
            alert('aaaa');
        }
    }
    var g = 21;

var print = console.log;

// square rooooot
function square(a, b) {
    var c = 1;
    for(var i = 0; i < b; i++) {
        c*=a;
    }
    return c;
};


// random-number generator
function randomNum(to) {
    var a = Math.floor( (Math.random() * to+1) );
    return a;
}



// start counting time for testing
var time = performance.now();

// create our array
var arr = [];
for (var i = 0; i < 19; i++) {
    arr.push( randomNum(50) );
}

print(arr);

    for (var i = 0; i < arr.length; i++) {
        var maxNum = 0;
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    print(maxNum);
    }

// end counting time and pring
time = performance.now() - time;
print("\n \ntime " + time);


function logSum(arg) {
    var sum = 0;
    for (var i = 0; i < arg; i++) {
        sum += arg-i;
    }
    return sum;
}

var arw = logSum(50);
print(arw);

function logSumRecurse(arg) {
    if(arg > 0) {
        var sum = arg + logSumRecurse(arg-1);
        return sum;
    } else {
        return 0;
    }
};
var arw2 = logSumRecurse(50);
print(arw2);


var a = 20;
var b = 5;

a = a ^ b;
b = a ^ b;
a = a ^ b;


console.log('\n\n\n\n');

function digPow(n, p) {
    var splitted = String(n).split("");
    var degree = --p;
    var sum = 0;
    for (i = 0; i < splitted.length; i++) {
        sum += Math.pow( splitted[i], ++degree);
    }
    console.log(sum);
    var rest = sum%n;
    if (rest == 0) {
        console.log(sum/n);
    } else {
        console.log(-1);
    }

}
digPow(46288 , 3);


function disemvowel(str) {
  var vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];

  var res = str.split('');
  for (var i = 0; i < res.length; i++) {
    for (var b = 0; b < vowels.length; b++) {
      if(res[i] == vowels[b]) {
        res.splice(i, 1);
        i--;
      }
    }
  }
  return res;
}

console.log( disemvowel('абракадабра') );
console.log('\n\n\n\n');
console.log(1);
var mm = [1, 2, 3, 4, 5, 6, 7];
mm.splice(0, 1);
mm.splice(-1, 1);
console.log(mm)

function removeChar(str) {
 //You got this!

 b = str.split('');
 b.splice(0, 1);
 b.splice(-1, 1);
 return b.join('');
};
console.log( removeChar('абракадбра') );


function positiveSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++ ) {
    if(arr[i] < 0) {
      arr.splice(i, 1);
      i--;
      console.log(arr.length);
    } else {
      sum += arr[i];
    }
  }
  return sum;
}
console.log( positiveSum([1, 2, -1, -6, -7]) );

function findShort(s){
    var splitted = s.split(' ');

    var shortestAmount = splitted[0].length;
    var shortestWord;

    for (var i = 0; i < splitted.length; i++) {
      if(splitted[i].length < shortestAmount) {
        shortestAmount = splitted[i].length;
        shortestWord = splitted[i];
      }
    }

    return shortestWord;
}

function accum(s) {
	// your code
  var splitted = s.split('');
  var resArr = [];
  var number = 0;
  for (var i = 0; i < splitted.length; i ++) {
    var sell = [];
    sell.push( splitted[i].toUpperCase() );
    for(var b = 0; b < number; b++ ) {
      sell.push(splitted[i].toLowerCase);
    }
    resArr.push( sell.join('') );
    number++;
  }
  return resArr.join('-');
}


console.log( accum("abcd") );


function isTriangle(a,b,c) {
  if (a+b > c && b + c > a && c + a > b) {
    return true;
  } else return false;
}
