// To save data to local storage

$(document).ready(function () {

    $('.time-block').each(function () {
  
      let timeBlockId = $(this).attr('id');
      let savedData = localStorage.getItem(timeBlockId);
  
      if (savedData) {
        $(this).find('textarea').val(savedData);
      }
    });
  
  
  
  const saveBtn = $('.saveBtn')
  
  // To save information when the save button is clicked
  saveBtn.on('click', function (event) {
    event.preventDefault();
  
    const timeBlock = $(this).parent();
    const timeBlockId = timeBlock.attr('id');
    const description = timeBlock.children('textarea').val();
  
    localStorage.setItem(timeBlockId, description);
  
  });
  
  var today = dayjs();
  
  //The display of the date and time
  $('#1a').text(today.format('MMMM D, YYYY'));
  $('#2a').text(today.format('h:mm A'));
  
  
  
  // each time block is color-coded to indicate whether it is in the past, present or future
  $('.time-block').each(function () {
    const hour = parseInt($(this).attr('id'));
    const currHour = parseInt(dayjs().format('HH'));
  
    if (hour < currHour) {
      $(this).addClass('past');
    } else if (hour === currHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
  
  // refresh by 6pm every day
  const currHour = dayjs().hour();
  
  if (currHour >= 18) {
    localStorage.clear();
  }
  
  
  });