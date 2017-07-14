$(document).ready(function(){
    $("#dropdown-nav-button").click(function() {
        $("#nav-menu").toggleClass('display-block');
    });
    $("#main-top-carousel").owlCarousel({
        singleItem : true,
        autoPlay : 3000
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
    $('#comments-carousel').owlCarousel({
        singleItem : true,
        navigation	: true,
        navigationText : ['<span class="spec-arrow-left  spec-arrow" aria-hidden="true"><span>', '<span class="spec-arrow-right  spec-arrow" aria-hidden="true"></span>']
    });
    $('#lookmore-carousel').owlCarousel({
        itemsCustom : [ [0, 1],
                        [904, 2],
                        [1296, 3] ],
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
    $('.jq-selectbox__dropdown ul').jScrollPane();
//    function initMap() {
//        map = new google.maps.Map(document.getElementById('map'), {
//            center : {
//                lat: 50.445382,
//                lng: 30.505490
//            },
//            zoom: 8
//        });
//    }

    $('.has-dropdown').hover( function() {
        $(this).children('.dropdown-menu').slideToggle(300);
    },  );

    $('#nav-menu > li').hover( function() {
        $(this).find('.dropdown-menu').slideToggle(300);
    });


    // var inc = $("#including");

    // var incChildren = $(inc).children();

    // var incChildrenSingle = incChildren[0];

    // var incChildrenWidth = $(incChildrenSingle).css('width');
    // var incChildrenInnerWidth = $(incChildrenSingle).innerWidth();
    // var incChildrenOuterWidth = $(incChildrenSingle).outerWidth();

    // console.log( inc );
    // console.log( incChildren );
    // console.log( incChildrenWidth );
    // console.log( incChildrenInnerWidth );
    // console.log( incChildrenOuterWidth );









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

//    bar(1);
//    bar(2, 3);
    var range = $('#range');
    range.oninput = function () {
        alert(1);
    };
    //contextmenu




//    function handler() {
//   alert( 'Спасибо!' );
// }
//     var cub = document.getElementById('range');
//     cub.addEventListener("input", function () { alert(10) }  );




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
console.log('\n\n\n\n');


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
