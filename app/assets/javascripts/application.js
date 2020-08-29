// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require_tree .
//= require bootstrap-sprockets


// $( document ).on('turbolinks:load', function() {
//   function readURL(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//         $('#avatar_img_prev').attr('src', e.target.result);
//       }
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

//   $("#post_img").change(function(){
//     $('#avatar_img_prev').removeClass('hidden');
//     $('.avatar_present_img').remove();
//     readURL(this);
//   });
// });


$(function(){
    // inputのidから情報の取得
    $('#item-image').on('change', function (e) {
// ここから既存の画像のurlの取得
    var reader = new FileReader();
    reader.onload = function (e) {
        $(".image").attr('src', e.target.result);
    }
// ここまで
    reader.readAsDataURL(e.target.files[0]); //取得したurlにアップロード画像のurlを挿入
});
});


$(document).ready(function () {
  $('.jquery').on('click', function(){
    $(this).css('color','#009966');
  });
});

$(document).ready(function () {
  $('.jquery1').on('click', function(){
    $(this).css('color','dodgerblue');
  });
});

$(document).ready(function () {
  $('.jquery2').on('click', function(){
    $(this).css('color','mediumslateblue');
  });
});

$(document).ready(function () {
  $('.jquery3').on('click', function(){
    $(this).css('color','deeppink');
  });
});



$(document).ready(function () {
  $("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'fade',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'bubble',
    // 子要素の種類("div" or "img")
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : false,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 2500,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});