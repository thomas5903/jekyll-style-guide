(function () {
  
  var buixldrs = $("a .buixldr");

  buixldrs.click(function(){
    //console.log($('a').index(this));
    switch( buixldrs.index(this)) {
    
    case 0:
      //home
      var thisId = $(this).attr('id');
      console.log($(this).attr('id'));
      
      $(this).addClass('active-img');
      
      $('#Joe').addClass('active-bio');
      console.log(thisId+"is true");

      $('#Colin, #Logan, #Jacaline ,#Ryan, #David').removeClass('active-bio');
      $('#2, #3, #4, #5, #6').removeClass('active-img');
      
      break;
    case 1:
  
      var thisId = $(this).attr('id');
      console.log($(this).attr('id'));
      
      $(this).addClass('active-img');
      
      $('#Colin').addClass('active-bio');
      console.log(thisId+"is true");

      $('#Joe, #David, #Logan, #Jacaline ,#Ryan').removeClass('active-bio');
      $('#1, #3, #4, #5, #6').removeClass('active-img');

      break;
    //Add your case here!
    case 2:
        //bio
      var thisId = $(this).attr('id');
      console.log($(this).attr('id'));
      
      $(this).addClass('active-img');
      
      $('#David').addClass('active-bio');
      console.log(thisId+"is true");

      $('#Joe, #Colin, #Logan, #Jacaline, #Ryan').removeClass('active-bio');
      $('#1, #2, #4, #5, #6').removeClass('active-img');
        break;

    case 3:
      var thisId = $(this).attr('id');
      console.log($(this).attr('id'));
      
      $(this).addClass('active-img');
      
      $('#Jacaline').addClass('active-bio');
      console.log(thisId+"is true");

      $('#Joe, #Colin, #Ryan, #David, #Logan').removeClass('active-bio');
      $('#1, #2, #3, #5, #6').removeClass('active-img');
        //skills
        break;

    case 4:
        //work
        var thisId = $(this).attr('id');
      console.log($(this).attr('id'));
      
      $(this).addClass('active-img');
      
      $('#Ryan').addClass('active-bio');
      console.log(thisId+"is true");

      $('#Joe, #Colin, #Jacaline, #Logan, #David').removeClass('active-bio');
      $('#1, #2, #3, #4, #6').removeClass('active-img');

        break;

    case 5:
        var thisId = $(this).attr('id');
      console.log($(this).attr('id'));
      
      $(this).addClass('active-img');
      
      $('#Logan').addClass('active-bio');
      console.log(thisId+"is true");

      $('#Joe, #Colin, #Jacaline, #Ryan, #David').removeClass('active-bio');
      $('#1, #2, 3, #4, #5').removeClass('active-img');
        break;
    
    default:
      console.log("nothing clicked");
  }
  });

})();
