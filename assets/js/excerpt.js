'use strict';
/*Requires This CSS
 * dy {
 *   margin: 50px;
 *     font: 15px/1.5 sans-serif;
 *     }
 *     img { margin: .8em 0; }
 *     div {
 *       border: 1px solid black;
 *         padding: 1em 1.5em;;
 *         }
 *         #less { display: none; } */

function excerpt(str, nwords) {
    var words = str.split(' ');
      words.splice(nwords, words.length-1);
        return words.join(' ') +
              (words.length !== str.split(' ').length ? '&hellip;' : '');
}

var $p = $('p');
var $more = $('#more');
var $less = $('#less');

function less() {
    $p.data('text', $p.html()); // store untouched text first
      $p.html( excerpt($p.html(), 50) );
        $more.show();
          $less.hide();
}

function more() {
    $p.html($p.data('text'));
      $more.hide();
        $less.show();
}

less(); // init
$('#more').click(more);
$('#less').click(less);
