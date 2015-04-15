# jQuery Country Select

Populates drop-down lists with all countries

## Getting Started
Download the [minified version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/jasonhinkle/jquery-country-select/master/dist/jquery.country.select.min.js
[max]: https://raw.githubusercontent.com/jasonhinkle/jquery-country-select/master/dist/jquery.country.select.js

On your web page:

```html
<select id="country" data-selected-value="US"></select>

<script src="path/to/jquery.js"></script>
<script src="path/to/jquery.country.select.min.js"></script>
<script>
$(document).ready(function(){
    
  // initialize the country drop-down
  $('#country').countrySelect();
             
});
</script>
```

## Documentation

Available Options:

```javascript
var options = {
  showFullName: true,
  showEmptyValue: true,
  emptyValueLabel: 'Select Country...'
};
             
$('#country').countrySelect(options);
```


## Release History
* 0.1.0 Initial Release
