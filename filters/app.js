angular.module('myApp', [])
  .controller('Ctrl', function(
    $scope,
    filterFilter, // filters are injected by naming them <filtername>Filter, so this example is injecting angular's "filter" filter
    reverseFiltFilter  // this one is injecting the custom reverseFilt filter... you wouldn't normally need to do this, becuase this kind of filter is performant when used in the template
  ){
    $scope.data = {
      text: 'The QUICK brown Fox JUMPS over The LAZY dog',
      nums: '0123456789',
      specialChars: '!@#$%^&*()',
      whitespace: '    ',
      bignum: 10000000,
      num: 1.0,
      smallnum: 0.999,
      tinynum: 0.00000001,
      unix: 1394787566535,
      iso: '2014-03-14T08:59:26Z',
      date: new Date(2014,2,14,1,59,26,535),
      strArray: ['Bazinga', 'Tomb', 'Fluezy', 'Destiny', 'Fork'],
      numArray: [1, 23, 456, 7890]
    };
    $scope.filteredData = {
      strArray: filterFilter($scope.data.strArray, 'a'),
      numArray: filterFilter($scope.data.numArray, 3),
      text: reverseFiltFilter($scope.data.text)
    };
    $scope.superHeros = [
      {
        name: 'Super Man',
        age: '30',
        alterEgo: 'Clark Kent'
      },
      {
        name: 'Batman',
        age: '43',
        alterEgo: 'Bruce Wayne'
      },
      {
        name: 'Spider Man',
        age: '17',
        alterEgo: 'Peter Parker'
      },
      {
        name: 'Hulk',
        age: '39',
        alterEgo: 'Bruce Banner'
      }
    ];
  })
  .filter('reverseFilt', function() {
    // return a function where the first argument is the data to be filtered and the
    // remaining arguments are the options
    return function(input, lowercase) {
      input = input || '';
      var out = '';
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }
      // conditional based on optional argument
      if (lowercase) {
        out = out.toLowerCase();
      }
      return out;
    }
  })
  .filter('shFilter', function() {
    return function(input, age) {
      if (age === undefined) {age = 0;}
      return input.filter(function(el) {
        console.log(el.age);
        return el.age > age;
      });
    }
  });

