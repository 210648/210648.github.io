$(document).ready(function(){


    $("#charcterforgame").show();
    $('.stormtroopers').hide();
     $('.win').hide();

$(document).keydown(function(e) {
    $("#charcterforgame").keydown;
    switch (e.which) {

      //move left
      case 37:
        $("#charcterforgame").animate({
          left: "-=40px"
        }, 'fast');
        break;

        //move up
      case 38:
        $("#charcterforgame").animate({
          top: "-=40px"
        }, 'fast');
        break;

        //move right
      case 39:
        $("#charcterforgame").animate({
          left: "+=40px"
        }, 'fast');
        break;
};
});

 function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }


  window.setInterval(function() {
    //function that makes the magic happen! Below, jQuery prints the word "FALSE" into #results
    $('#result').text('False');
    //IMPORTANT!!! Below declares the class of divs that your sprite collides with!!
    $.each($('.stormtroopers'), function() {
      if (collision($('#charcterforgame'), $(this))) { //another if statement. If #myCar DOES hit something, the following will happen:
 


               $("#gameover").show();



        //all the actions that happen during a collision go here

      }
    });
  }, 200); //this is how often it checks for a collision




    $('.buttonone').click(function(){
     $("#stormtrooperthirtyone").show();
     $("#stormtrooperthirtythree").show();
     $("#stormtrooperthirtyfour").show();
     $("sormtrooperthirtyfive").show();
     $("#stormtrooperthirtysix").show();
     $("#stormtrooperthirtyone").hide(5000);
     $("#stormtrooperthirtythree").hide(5000);
     $("#stormtrooperthirtyfour").hide(5000);
     $("sormtrooperthirtyfive").hide(5000);
     $("#stormtrooperthirtysix").hide(5000);
     $("#stormtrooperthirtyseven").show(5000);
     $("#stormtrooperthirtynine").show(5000);
     $("#stormtrooperfourty").show(5000);
     $("#stormtrooperfourtyone").show(5000);
     $("#stormtrooperfourtytwo").show(5000);
     $("#stormtrooperthirtyseven").hide(10000);
     $("#stormtrooperthirtynine").hide(10000);
     $("#stormtrooperfourty").hide(10000);
     $("#stormtrooperfourtyone").hide(10000);
     $("#stormtrooperfourtytwo").hide(10000);
     $("#stormtrooperfourtythree").show(10000);
     $("#stormtrooperfourtyfive").show(10000);
     $("#stormtrooperfourtysix").show(10000);
     $("#stormtrooperfourtyseven").show(10000);
     $("#stormtrooperfourtyeight").show(10000);
     $("#stormtrooperfourtythree").hide(15000);
     $("#stormtrooperfourtyfive").hide(15000);
     $("#stormtrooperfourtysix").hide(15000);
     $("#stormtrooperfourtyseven").hide(15000);
     $("#stormtrooperfourtyeight").hide(15000);
     $("#stormtrooperfourtynine").show(15000);
     $("#stormtrooperfiftyone").show(15000);
     $("#stormtrooperfiftytwo").show(15000);
     $("#stormtrooperfiftythree").show(15000);
     $("#stormtrooperfiftyfour").show(15000);
     $("#stormtrooperfourtynine").hide(20000);
     $("#stormtrooperfiftyone").hide(20000);
     $("#stormtrooperfiftytwo").hide(20000);
     $("#stormtrooperfiftythree").hide(20000);
     $("#stormtrooperfiftyfour").hide(20000);
     $("#stormtrooperfiftyfive").show(20000);
     $("#stormtrooperfiftyseven").show(20000);
     $("#stormtrooperfiftyeight").show(20000);
     $("#stormtrooperfiftynine").show(20000);
     $("#stormtroopersixty").show(20000);
     $("#stormtrooperfiftyfive").hide(25000);
     $("#stormtrooperfiftysix").hide(25000);
     $("#stormtrooperfiftyseven").hide(25000);
     $("#stormtrooperfiftynine").hide(25000);
     $("#stormtroopersixty").hide(25000);
     //bottom does wave 2
     $("#stormtrooperthirtyone").show(25000);
     $("#stormtrooperthirtythree").show(25000);
     $("#stormtrooperthirtytwo").show(25000);
     $("sormtrooperthirtyfive").show(25000);
     $("#stormtrooperthirtysix").show(25000);
     $("#stormtrooperthirtyone").hide(30000);
     $("#stoemtrooperthiretytwo").hide(30000);
     $("#stormtrooperthirtythree").hide(30000);
     $("#stormtrooperthirtyfour").hide(30000);
     $("sormtrooperthirtyfive").hide(30000);
     $("#stormtrooperthirtysix").hide(30000);
     $("#stormtrooperthirtyseven").show(30000);
     $("#stormtrooperthirtynine").show(30000);
     $("#stormtrooperthirtynine").show(30000);
     $("#stormtrooperfourtyone").show(30000);
     $("#stormtrooperfourtytwo").show(30000);
     $("#stormtrooperthirtyseven").hide(35000);
     $("#stormtrooperthirtynine").hide(35000);
     $("#stormtrooperthirtyeight").hide(35000);
     $("#stormtrooperfourtyone").hide(35000);
     $("#stormtrooperfourtytwo").hide(35000);
     $("#stormtrooperfourtythree").show(35000);
     $("#stormtrooperfourtyfive").show(35000);
     $("#stormtrooperfourtysix").show(35000);
     $("#stormtrooperfourtyfour").show(35000);
     $("#stormtrooperfourtyeight").show(35000);
     $("#stormtrooperfourtythree").hide(40000);
     $("#stormtrooperfourtyfive").hide(40000);
     $("#stormtrooperfourtysix").hide(40000);
     $("#stormtrooperfourtyfour").hide(40000);
     $("#stormtrooperfourtyeight").hide(40000);
     $("#stormtrooperfourtynine").show(45000);
     $("#stormtrooperfiftyone").show(45000);
     $("#stormtrooperfifty").show(45000);
     $("#stormtrooperfiftythree").show(45000);
     $("#stormtrooperfiftyfour").show(45000);
     $("#stormtrooperfourtynine").hide(50000);
     $("#stormtrooperfiftyone").hide(50000);
     $("#stormtrooperfifty").hide(50000);
     $("#stormtrooperfiftythree").hide(50000);
     $("#stormtrooperfiftyfour").hide(50000);
     $("#stormtrooperfiftyfive").show(50000);
     $("#stormtrooperfiftysix").show(50000);
     $("#stormtrooperfiftyseven").show(50000);
     $("#stormtrooperfiftynine").show(50000);
     $("#stormtroopersixty").show(50000);
     $("#stormtrooperfiftyfive").hide(55000);
     $("#stormtrooperfiftysix").hide(55000);
     $("#stormtrooperfiftyseven").hide(55000);
     $("#stormtrooperfiftynine").hide(55000);
     $("#stormtroopersixty").hide(55000);
     //bottom does wave 3
     $("#stormtrooperthirtyone").show(55000);
     $("#stormtrooperthirtythree").show(55000);
     $("#stormtrooperthirtytwo").show(55000);
     $("sormtrooperthirtyfive").show(55000);
     $("#stormtrooperthirtysix").show(55000);
     $("#stormtrooperthirtyone").hide(60000);
     $("#stoemtrooperthiretytwo").hide(60000);
     $("#stormtrooperthirtythree").hide(60000);
     $("#stormtrooperthirtyfour").hide(60000);
     $("sormtrooperthirtyfive").hide(60000);
     $("#stormtrooperthirtysix").hide(60000);
     $("#stormtrooperthirtyseven").show(60000);
     $("#stormtrooperthirtynine").show(60000);
     $("#stormtrooperthirtynine").show(60000);
     $("#stormtrooperfourtyone").show(60000);
     $("#stormtrooperfourtytwo").show(60000);
     $("#stormtrooperthirtyseven").hide(65000);
     $("#stormtrooperthirtynine").hide(65000);
     $("#stormtrooperthirtyeight").hide(65000);
     $("#stormtrooperfourtyone").hide(65000);
     $("#stormtrooperfourtytwo").hide(65000);
     $("#stormtrooperfourtythree").show(65000);
     $("#stormtrooperfourtyfive").show(65000);
     $("#stormtrooperfourtysix").show(65000);
     $("#stormtrooperfourtyfour").show(65000);
     $("#stormtrooperfourtyeight").show(65000);
     $("#stormtrooperfourtythree").hide(70000);
     $("#stormtrooperfourtyfive").hide(70000);
     $("#stormtrooperfourtysix").hide(70000);
     $("#stormtrooperfourtyfour").hide(70000);
     $("#stormtrooperfourtyeight").hide(70000);
     $("#stormtrooperfourtynine").show(70000);
     $("#stormtrooperfiftyone").show(70000);
     $("#stormtrooperfifty").show(70000);
     $("#stormtrooperfiftythree").show(70000);
     $("#stormtrooperfiftyfour").show(70000);
     $("#stormtrooperfourtynine").hide(75000);
     $("#stormtrooperfiftyone").hide(75000);
     $("#stormtrooperfifty").hide(75000);
     $("#stormtrooperfiftythree").hide(75000);
     $("#stormtrooperfiftyfour").hide(75000);
     $("#stormtrooperfiftyfive").show(75000);
     $("#stormtrooperfiftysix").show(75000);
     $("#stormtrooperfiftyseven").show(75000);
     $("#stormtrooperfiftynine").show(75000);
     $("#stormtroopersixty").show(75000);
     $("#stormtrooperfiftyfive").hide(80000);
     $("#stormtrooperfiftysix").hide(80000);
     $("#stormtrooperfiftyseven").hide(80000);
     $("#stormtrooperfiftynine").hide(80000);
     $("#stormtroopersixty").hide(80000);
     //bottom does wave 4
     $("#stormtrooperthirtyone").show(80000);
     $("#stormtrooperthirtythree").show(80000);
     $("#stormtrooperthirtytwo").show(80000);
     $("sormtrooperthirtyfive").show(80000);
     $("#stormtrooperthirtysix").show(80000);
     $("#stormtrooperthirtyone").hide(85000);
     $("#stoemtrooperthiretytwo").hide(85000);
     $("#stormtrooperthirtythree").hide(85000);
     $("#stormtrooperthirtyfour").hide(85000);
     $("sormtrooperthirtyfive").hide(85000);
     $("#stormtrooperthirtysix").hide(85000);
     $("#stormtrooperthirtyseven").show(85000);
     $("#stormtrooperthirtynine").show(85000);
     $("#stormtrooperthirtynine").show(85000);
     $("#stormtrooperfourtyone").show(85000);
     $("#stormtrooperfourtytwo").show(85000);
     $("#stormtrooperthirtyseven").hide(90000);
     $("#stormtrooperthirtynine").hide(90000);
     $("#stormtrooperthirtyeight").hide(90000);
     $("#stormtrooperfourtyone").hide(90000);
     $("#stormtrooperfourtytwo").hide(90000);
     $("#stormtrooperfourtythree").show(90000);
     $("#stormtrooperfourtyfive").show(90000);
     $("#stormtrooperfourtysix").show(90000);
     $("#stormtrooperfourtyfour").show(90000);
     $("#stormtrooperfourtyeight").show(90000);
     $("#stormtrooperfourtythree").hide(95000);
     $("#stormtrooperfourtyfive").hide(95000);
     $("#stormtrooperfourtysix").hide(95000);
     $("#stormtrooperfourtyfour").hide(95000);
     $("#stormtrooperfourtyeight").hide(95000);
     $("#stormtrooperfourtynine").show(95000);
     $("#stormtrooperfiftyone").show(95000);
     $("#stormtrooperfifty").show(95000);
     $("#stormtrooperfiftythree").show(95000);
     $("#stormtrooperfiftyfour").show(95000);
     $("#stormtrooperfourtynine").hide(100000);
     $("#stormtrooperfiftyone").hide(100000);
     $("#stormtrooperfifty").hide(100000);
     $("#stormtrooperfiftythree").hide(100000);
     $("#stormtrooperfiftyfour").hide(100000);
     $("#stormtrooperfiftyfive").show(100000);
     $("#stormtrooperfiftysix").show(100000);
     $("#stormtrooperfiftyseven").show(100000);
     $("#stormtrooperfiftynine").show(100000);
     $("#stormtroopersixty").show(100000);
     $("#stormtrooperfiftyfive").hide(105000);
     $("#stormtrooperfiftysix").hide(105000);
     $("#stormtrooperfiftyseven").hide(105000);
     $("#stormtrooperfiftynine").hide(105000);
     $("#stormtroopersixty").hide(105000);
     //bottoem does wave 5
     $("#stormtrooperthirtyone").show(105000);
     $("#stormtrooperthirtythree").show(105000);
     $("#stormtrooperthirtytwo").show(105000);
     $("sormtrooperthirtyfive").show(105000);
     $("#stormtrooperthirtysix").show(105000);
     $("#stormtrooperthirtyone").hide(110000);
     $("#stoemtrooperthiretytwo").hide(110000);
     $("#stormtrooperthirtythree").hide(110000);
     $("#stormtrooperthirtyfour").hide(110000);
     $("sormtrooperthirtyfive").hide(110000);
     $("#stormtrooperthirtysix").hide(110000);
     $("#stormtrooperthirtyseven").show(110000);
     $("#stormtrooperthirtynine").show(110000);
     $("#stormtrooperthirtynine").show(110000);
     $("#stormtrooperfourtyone").show(110000);
     $("#stormtrooperfourtytwo").show(110000);
     $("#stormtrooperthirtyseven").hide(115000);
     $("#stormtrooperthirtynine").hide(115000);
     $("#stormtrooperthirtyeight").hide(115000);
     $("#stormtrooperfourtyone").hide(115000);
     $("#stormtrooperfourtytwo").hide(115000);
     $("#stormtrooperfourtythree").show(115000);
     $("#stormtrooperfourtyfive").show(115000);
     $("#stormtrooperfourtysix").show(115000);
     $("#stormtrooperfourtyfour").show(115000);
     $("#stormtrooperfourtyeight").show(115000);
     $("#stormtrooperfourtythree").hide(120000);
     $("#stormtrooperfourtyfive").hide(120000);
     $("#stormtrooperfourtysix").hide(120000);
     $("#stormtrooperfourtyfour").hide(120000);
     $("#stormtrooperfourtyeight").hide(120000);
     $("#stormtrooperfourtynine").show(120000);
     $("#stormtrooperfiftyone").show(120000);
     $("#stormtrooperfifty").show(120000);
     $("#stormtrooperfiftythree").show(120000);
     $("#stormtrooperfiftyfour").show(120000);
     $("#stormtrooperfourtynine").hide(125000);
     $("#stormtrooperfiftyone").hide(125000);
     $("#stormtrooperfifty").hide(125000);
     $("#stormtrooperfiftythree").hide(125000);
     $("#stormtrooperfiftyfour").hide(125000);
     $("#stormtrooperfiftyfive").show(125000);
     $("#stormtrooperfiftysix").show(125000);
     $("#stormtrooperfiftyseven").show(125000);
     $("#stormtrooperfiftynine").show(125000);
     $("#stormtroopersixty").show(125000);
     $("#stormtrooperfiftyfive").hide(130000);
     $("#stormtrooperfiftysix").hide(130000);
     $("#stormtrooperfiftyseven").hide(130000);
     $("#stormtrooperfiftynine").hide(130000);
     $("#stormtroopersixty").hide(130000);
     //bottom does wave 6
     $("#stormtrooperthirtyone").show(130000);
     $("#stormtrooperthirtythree").show(130000);
     $("#stormtrooperthirtytwo").show(130000);
     $("sormtrooperthirtyfive").show(130000);
     $("#stormtrooperthirtysix").show(130000);
     $("#stormtrooperthirtyone").hide(134000);
     $("#stoemtrooperthiretytwo").hide(134000);
     $("#stormtrooperthirtythree").hide(134000);
     $("#stormtrooperthirtyfour").hide(134000);
     $("sormtrooperthirtyfive").hide(134000);
     $("#stormtrooperthirtysix").hide(134000);
     $("#stormtrooperthirtyseven").show(134000);
     $("#stormtrooperthirtynine").show(134000);
     $("#stormtrooperthirtynine").show(134000);
     $("#stormtrooperfourtyone").show(134000);
     $("#stormtrooperfourtytwo").show(134000);
     $("#stormtrooperthirtyseven").hide(138000);
     $("#stormtrooperthirtynine").hide(138000);
     $("#stormtrooperthirtyeight").hide(138000);
     $("#stormtrooperfourtyone").hide(138000);
     $("#stormtrooperfourtytwo").hide(138000);
     $("#stormtrooperfourtythree").show(138000);
     $("#stormtrooperfourtyfive").show(138000);
     $("#stormtrooperfourtysix").show(138000);
     $("#stormtrooperfourtyfour").show(138000);
     $("#stormtrooperfourtyeight").show(138000);
     $("#stormtrooperfourtythree").hide(142000);
     $("#stormtrooperfourtyfive").hide(142000);
     $("#stormtrooperfourtysix").hide(142000);
     $("#stormtrooperfourtyfour").hide(142000);
     $("#stormtrooperfourtyeight").hide(142000);
     $("#stormtrooperfourtynine").show(146000);
     $("#stormtrooperfiftyone").show(146000);
     $("#stormtrooperfifty").show(146000);
     $("#stormtrooperfiftythree").show(146000);
     $("#stormtrooperfiftyfour").show(146000);
     $("#stormtrooperfourtynine").hide(150000);
     $("#stormtrooperfiftyone").hide(150000);
     $("#stormtrooperfifty").hide(150000);
     $("#stormtrooperfiftythree").hide(150000);
     $("#stormtrooperfiftyfour").hide(150000);
     $("#stormtrooperfiftyfive").show(150000);
     $("#stormtrooperfiftysix").show(150000);
     $("#stormtrooperfiftyseven").show(150000);
     $("#stormtrooperfiftynine").show(150000);
     $("#stormtroopersixty").show(150000);
     $("#stormtrooperfiftyfive").hide(154000);
     $("#stormtrooperfiftysix").hide(154000);
     $("#stormtrooperfiftyseven").hide(154000);
     $("#stormtrooperfiftynine").hide(154000);
     $("#stormtroopersixty").hide(154000);
     //bottom does wave 7
     $("#stormtrooperthirtyone").show(154000);
     $("#stormtrooperthirtythree").show(154000);
     $("#stormtrooperthirtytwo").show(154000);
     $("sormtrooperthirtyfive").show(154000);
     $("#stormtrooperthirtysix").show(154000);
     $("#stormtrooperthirtyone").hide(157000);
     $("#stoemtrooperthiretytwo").hide(157000);
     $("#stormtrooperthirtythree").hide(157000);
     $("#stormtrooperthirtyfour").hide(157000);
     $("sormtrooperthirtyfive").hide(157000);
     $("#stormtrooperthirtysix").hide(157000);
     $("#stormtrooperthirtyseven").show(157000);
     $("#stormtrooperthirtynine").show(157000);
     $("#stormtrooperthirtynine").show(157000);
     $("#stormtrooperfourtyone").show(157000);
     $("#stormtrooperfourtytwo").show(157000);
     $("#stormtrooperthirtyseven").hide(160000);
     $("#stormtrooperthirtynine").hide(160000);
     $("#stormtrooperthirtyeight").hide(160000);
     $("#stormtrooperfourtyone").hide(160000);
     $("#stormtrooperfourtytwo").hide(160000);
     $("#stormtrooperfourtythree").show(160000);
     $("#stormtrooperfourtyfive").show(160000);
     $("#stormtrooperfourtysix").show(160000);
     $("#stormtrooperfourtyfour").show(160000);
     $("#stormtrooperfourtyeight").show(160000);
     $("#stormtrooperfourtythree").hide(163000);
     $("#stormtrooperfourtyfive").hide(163000);
     $("#stormtrooperfourtysix").hide(163000);
     $("#stormtrooperfourtyfour").hide(163000);
     $("#stormtrooperfourtyeight").hide(163000);
     $("#stormtrooperfourtynine").show(163000);
     $("#stormtrooperfiftyone").show(163000);
     $("#stormtrooperfifty").show(163000);
     $("#stormtrooperfiftythree").show(163000);
     $("#stormtrooperfiftyfour").show(163000);
     $("#stormtrooperfourtynine").hide(166000);
     $("#stormtrooperfiftyone").hide(166000);
     $("#stormtrooperfifty").hide(166000);
     $("#stormtrooperfiftythree").hide(166000);
     $("#stormtrooperfiftyfour").hide(166000);
     $("#stormtrooperfiftyfive").show(166000);
     $("#stormtrooperfiftysix").show(166000);
     $("#stormtrooperfiftyseven").show(166000);
     $("#stormtrooperfiftynine").show(166000);
     $("#stormtroopersixty").show(166000);
     $("#stormtrooperfiftyfive").hide(169000);
     $("#stormtrooperfiftysix").hide(169000);
     $("#stormtrooperfiftyseven").hide(169000);
     $("#stormtrooperfiftynine").hide(169000);
     $("#stormtroopersixty").hide(169000);
     //bottom does wave 8
     $("#stormtrooperthirtyone").show(169000);
     $("#stormtrooperthirtythree").show(169000);
     $("#stormtrooperthirtytwo").show(169000);
     $("sormtrooperthirtyfive").show(169000);
     $("#stormtrooperthirtysix").show(169000);
     $("#stormtrooperthirtyone").hide(171000);
     $("#stoemtrooperthiretytwo").hide(171000);
     $("#stormtrooperthirtythree").hide(171000);
     $("#stormtrooperthirtyfour").hide(171000);
     $("sormtrooperthirtyfive").hide(171000);
     $("#stormtrooperthirtysix").hide(171000);
     $("#stormtrooperthirtyseven").show(171000);
     $("#stormtrooperthirtynine").show(171000);
     $("#stormtrooperthirtynine").show(171000);
     $("#stormtrooperfourtyone").show(171000);
     $("#stormtrooperfourtytwo").show(171000);
     $("#stormtrooperthirtyseven").hide(173000);
     $("#stormtrooperthirtynine").hide(173000);
     $("#stormtrooperthirtyeight").hide(173000);
     $("#stormtrooperfourtyone").hide(173000);
     $("#stormtrooperfourtytwo").hide(173000);
     $("#stormtrooperfourtythree").show(173000);
     $("#stormtrooperfourtyfive").show(173000);
     $("#stormtrooperfourtysix").show(173000);
     $("#stormtrooperfourtyfour").show(173000);
     $("#stormtrooperfourtyeight").show(173000);
     $("#stormtrooperfourtythree").hide(175000);
     $("#stormtrooperfourtyfive").hide(175000);
     $("#stormtrooperfourtysix").hide(175000);
     $("#stormtrooperfourtyfour").hide(175000);
     $("#stormtrooperfourtyeight").hide(175000);
     $("#stormtrooperfourtynine").show(175000);
     $("#stormtrooperfiftyone").show(175000);
     $("#stormtrooperfifty").show(175000);
     $("#stormtrooperfiftythree").show(175000);
     $("#stormtrooperfiftyfour").show(175000);
     $("#stormtrooperfourtynine").hide(178000);
     $("#stormtrooperfiftyone").hide(178000);
     $("#stormtrooperfifty").hide(178000);
     $("#stormtrooperfiftythree").hide(178000);
     $("#stormtrooperfiftyfour").hide(178000);
     $("#stormtrooperfiftyfive").show(178000);
     $("#stormtrooperfiftysix").show(178000);
     $("#stormtrooperfiftyseven").show(178000);
     $("#stormtrooperfiftynine").show(178000);
     $("#stormtroopersixty").show(178000);
     $("#stormtrooperfiftyfive").hide(180000);
     $("#stormtrooperfiftysix").hide(180000);
     $("#stormtrooperfiftyseven").hide(180000);
     $("#stormtrooperfiftynine").hide(180000);
     $("#stormtroopersixty").hide(180000);
     //bottom does wave 9
     $("#stormtrooperthirtyone").show(180000);
     $("#stormtrooperthirtythree").show(180000);
     $("#stormtrooperthirtytwo").show(180000);
     $("sormtrooperthirtyfive").show(180000);
     $("#stormtrooperthirtysix").show(180000);
     $("#stormtrooperthirtyone").hide(181000);
     $("#stoemtrooperthiretytwo").hide(181000);
     $("#stormtrooperthirtythree").hide(181000);
     $("#stormtrooperthirtyfour").hide(181000);
     $("sormtrooperthirtyfive").hide(181000);
     $("#stormtrooperthirtysix").hide(181000);
     $("#stormtrooperthirtyseven").show(181000);
     $("#stormtrooperthirtynine").show(181000);
     $("#stormtrooperthirtynine").show(181000);
     $("#stormtrooperfourtyone").show(181000);
     $("#stormtrooperfourtytwo").show(181000);
     $("#stormtrooperthirtyseven").hide(182000);
     $("#stormtrooperthirtynine").hide(182000);
     $("#stormtrooperthirtyeight").hide(182000);
     $("#stormtrooperfourtyone").hide(182000);
     $("#stormtrooperfourtytwo").hide(182000);
     $("#stormtrooperfourtythree").show(182000);
     $("#stormtrooperfourtyfive").show(182000);
     $("#stormtrooperfourtysix").show(182000);
     $("#stormtrooperfourtyfour").show(182000);
     $("#stormtrooperfourtyeight").show(182000);
     $("#stormtrooperfourtythree").hide(183000);
     $("#stormtrooperfourtyfive").hide(183000);
     $("#stormtrooperfourtysix").hide(183000);
     $("#stormtrooperfourtyfour").hide(183000);
     $("#stormtrooperfourtyeight").hide(183000);
     $("#stormtrooperfourtynine").show(183000);
     $("#stormtrooperfiftyone").show(183000);
     $("#stormtrooperfifty").show(183000);
     $("#stormtrooperfiftythree").show(183000);
     $("#stormtrooperfiftyfour").show(183000);
     $("#stormtrooperfourtynine").hide(184000);
     $("#stormtrooperfiftyone").hide(184000);
     $("#stormtrooperfifty").hide(184000);
     $("#stormtrooperfiftythree").hide(184000);
     $("#stormtrooperfiftyfour").hide(184000);
     $("#stormtrooperfiftyfive").show(184000);
     $("#stormtrooperfiftysix").show(184000);
     $("#stormtrooperfiftyseven").show(184000);
     $("#stormtrooperfiftynine").show(184000);
     $("#stormtroopersixty").show(184000);
     $("#stormtrooperfiftyfive").hide(185000);
     $("#stormtrooperfiftysix").hide(185000);
     $("#stormtrooperfiftyseven").hide(185000);
     $("#stormtrooperfiftynine").hide(185000);
     $("#stormtroopersixty").hide(185000)
     //bottom does wave 10
     $("#stormtrooperthirtyone").show(185000);
     $("#stormtrooperthirtythree").show(185000);
     $("#stormtrooperthirtytwo").show(185000);
     $("sormtrooperthirtyfive").show(185000);
     $("#stormtrooperthirtysix").show(185000);
     $("#stormtrooperthirtyone").hide(190000);
     $("#stoemtrooperthiretytwo").hide(190000);
     $("#stormtrooperthirtythree").hide(190000);
     $("#stormtrooperthirtyfour").hide(190000);
     $("sormtrooperthirtyfive").hide(190000);
     $("#stormtrooperthirtysix").hide(190000);
     $("#stormtrooperthirtyseven").show(190000);
     $("#stormtrooperthirtynine").show(190000);
     $("#stormtrooperthirtynine").show(190000);
     $("#stormtrooperfourtyone").show(190000);
     $("#stormtrooperfourtytwo").show(190000);
     $("#stormtrooperthirtyseven").hide(194000);
     $("#stormtrooperthirtynine").hide(194000);
     $("#stormtrooperthirtyeight").hide(194000);
     $("#stormtrooperfourtyone").hide(194000);
     $("#stormtrooperfourtytwo").hide(194000);
     $("#stormtrooperfourtythree").show(194000);
     $("#stormtrooperfourtyfive").show(194000);
     $("#stormtrooperfourtysix").show(194000);
     $("#stormtrooperfourtyfour").show(194000);
     $("#stormtrooperfourtyeight").show(194000);
     $("#stormtrooperfourtythree").hide(197000);
     $("#stormtrooperfourtyfive").hide(197000);
     $("#stormtrooperfourtysix").hide(197000);
     $("#stormtrooperfourtyfour").hide(197000);
     $("#stormtrooperfourtyeight").hide(197000);
     $("#stormtrooperfourtynine").show(197000);
     $("#stormtrooperfiftyone").show(197000);
     $("#stormtrooperfifty").show(197000);
     $("#stormtrooperfiftythree").show(197000);
     $("#stormtrooperfiftyfour").show(197000);
     $("#stormtrooperfourtynine").hide(200000);
     $("#stormtrooperfiftyone").hide(200000);
     $("#stormtrooperfifty").hide(199000);
     $("#stormtrooperfiftythree").hide(199000);
     $("#stormtrooperfiftyfour").hide(199000);
     $("#stormtrooperfiftyfive").show(199000);
     $("#stormtrooperfiftysix").show(199000);
     $("#stormtrooperfiftyseven").show(199000);
     $("#stormtrooperfiftynine").show(199000);
     $("#stormtroopersixty").show(199000);
     $("#stormtrooperfiftyfive").hide(200000);
     $("#stormtrooperfiftysix").hide(200000);
     $("#stormtrooperfiftyseven").hide(200000);
     $("#stormtrooperfiftynine").hide(200000);
     $("#stormtroopersixty").hide(200000)
      $("#howtowin").show(201000);
    });


});//end of doc.ready