switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }

if(browser=="Edge"){
    window.alert("You've got the Edge!");   
} else if(browser=="Chrome" || browser=="Opera" || browser=="Safari" || browser=="Firefox"){
    alert("Ok, we suppoprt them too");
} else {
    alert("We hope that page looks ok!");
}