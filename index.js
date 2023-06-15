function shout(hello) {
    return hello.toUpperCase();
  }
  function whisper(HELLO) {
    return HELLO.toLowerCase();

  }
  function logShout(hello) {
    console.log (hello.toUpperCase());
  }
  function logWhisper(hello) {
    console.log(hello.toLowerCase());
  }
 
  const string = "Hello";
  function sayHiToHeadphonedRoommate(string) {
    
    
    if (string === string.toUpperCase()) {
     let newString = "YES INDEED!"

      return newString
    }

    if (string === string.toLowerCase()) {
      let newString = "I can\'t hear you!"
 
       return newString
     }
     if (string = "Let's have dinner together!") {
      let newString = "I would love to!"
      return newString
     }
  }
    