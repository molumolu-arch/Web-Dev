let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  console.log( JSON.stringify(meetup, function replacer(key, value) {
      
    if (value == meetup && key!="") return undefined;
    return value;

  }));

  console.log();