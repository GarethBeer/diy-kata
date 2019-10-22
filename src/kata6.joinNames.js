const joinNames = namesObj => {
        // return a string of all names in array objects
      const lengthSplit = namesObj.length -1;
      const firstNames = namesObj.map( e => e.name).splice('', lengthSplit).join(', ');
      const lastName = namesObj[lengthSplit].name;
      return (firstNames + ' & ' + lastName)
    };


module.exports = joinNames;


