(function() {

  window.onscroll = function() {
    const scrollPos = window.pageYOffset;
    const docHeight = document.body.offsetHeight;
    const defaultTimerInMinutes = 10;
    if(scrollPos >= docHeight/2){
      const prevDateTime = Date.parse(localStorage.getItem('savedDateTime'));
      const currentDateTime = new Date();
      const difference = currentDateTime - prevDateTime;
      // difference is milisecs --> divide by 1000 --> secs --> divide by 60 --> minutes
      const minutesDifference = Math.floor(difference/1000/60);
      if(minutesDifference >= defaultTimerInMinutes || isNaN(minutesDifference)) document.getElementById("newsletter-panel").classList.remove('hide-newsletter-panel');
    } else {
      document.getElementById("newsletter-panel").classList.add('hide-newsletter-panel');
    }
  }
})();

function closeSticky(e, target){
  switch(target){
    case "notification-panel":
      document.getElementById(target).classList.add('hide-notification-panel');
      break;
    case "newsletter-panel": {
      var currentDateTime = new Date();
      localStorage.setItem('savedDateTime', currentDateTime);
      document.getElementById(target).classList.add('hide-newsletter-panel');
    }
      break;
    default:
      break;
  }
}
