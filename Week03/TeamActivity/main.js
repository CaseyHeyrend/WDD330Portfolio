 // Solution 1
 const inventors1500 = inventors.filter(
    (inventor) => inventor.year >= 1500 && inventor.year <= 1599
  );
  console.log('inventors1500', inventors1500);

  // Solution 2
  const inventorsFirstLast = inventors.map((inventor) => {
    return {
      first: inventor.first,
      last: inventor.last,
      yearsLived: inventor.passed - inventor.year
    };
  });
  console.log('inventorsFirstLast', inventorsFirstLast);

  // Solution 3
  const inventorsSorted = inventors.sort((inventor1, inventor2) => {
    if (inventor1.year < inventor2.year) {
      return -1;
    }

    if (inventor1.year === inventor2.year) {
      return 0;
    }

    return 1;
  });
  console.log('inventorsSorted', inventorsSorted);

  // Solution 4
  const inventorsTotalYears = inventors.reduce((result, inventor) => {
    return result + inventor.passed - inventor.year;
  }, 0);
  console.log('inventorsTotalYears', inventorsTotalYears);

  // Solution 5
  const inventorsSorted2 = inventors.sort((inventor1, inventor2) => {
    if ((inventor1.passed - inventor1.year) > (inventor2.passed - inventor2.year)) {
      return -1;
    }

    if ((inventor1.passed - inventor1.year) === (inventor2.passed - inventor2.year)) {
      return 0;
    }

    return 1;
  });
  console.log('inventorsSorted2', inventorsSorted2);

  // Solution 6
  //const newLinks = links.filter((link) => link.innerText.search(" de ") >= 0);

  // Solution 7
  const peopleSorted = people.sort((person1, person2) => {
    const person1Names = person1.split(', ');
    const person2Names = person2.split(', ');

    if (person1Names[0] < person2Names[0]) {
      return -1;
    }

    if (person1Names[0] === person2Names[0]) {
      return 0;
    }

    return 1;
  });
  console.log('peopleSorted', peopleSorted);

  // Solution 8
  const dataSums = data.reduce((result, item, index, list) => {
    if (result[item]) {
      result[item]++;
    } else {
      result[item] = 1;
    }

    return result;
  }, {});
  console.log('dataSums', dataSums);