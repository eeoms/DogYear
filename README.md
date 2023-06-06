# DogYear

Use this module to convert human years for your pet into dog years, and reverse.

[![NPM](https://nodei.co/npm/dogyear.png)](https://nodei.co/npm/dogyear/)

## Human years to dog years

```javascript
const dy = require('dogyear');

// The first parameter is the actual human years age of the dog, and the second is if you want to round the age or not.
console.log(dy.dogYear(7, true));
> 62
```

## Dog years to human years

```javascript
const dy = require('dogyear');

// The first parameter is the actual dog years age of the dog, and the second is if you want to round the age or not.
console.log(dy.reverseDogYear(71, true));
> 12
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

Mozilla Public License 2.0
