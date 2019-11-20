if (annyang) {
  const commands = {
    'hello': showHello,
    'turn off the light': turnOffLight,
    'turn on the light': turnOnLight,
    'show me *tag': showGallery
  };

  function showHello() {
    $('#hello').removeClass('hidden');
  };

  function turnOffLight() {
    $('body').css('background-color', 'black');
    $('.on').css('color', 'white');
    $('#hello').css('color', 'black')
  }

  function turnOnLight() {
    $('body').css('background-color', 'white');
    $('.on').css('color', 'black');
    $('#hello').css('color', '')
  }

  function showGallery(tag) {
    $('#search').removeClass('hidden').text(`Ok. Searching for ${tag}`);
    const flickerAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON(flickerAPI, {
      tags: tag,
      tagmode: 'any',
      format: 'json'
    })
      .done((data) => {
        $('#gallery').empty();
        $.each(data.items, (i, item) => {
          $('<img>').attr('src', item.media.m).appendTo('#gallery');
          if (i === 3) {
            return false;
          }
        });
        $('#search').addClass('hidden');
        $('#gallery').removeClass('hidden');
      });
  };

  annyang.addCommands(commands);
  annyang.start();
}
