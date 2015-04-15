# jQuery Country Select

jQuery Country Select is a "Country Picker/Chooser" plugin for jQuery which populates a select drop-down with all available countries and ensures that the correct value is selected.

The plugin populates the drop-down without making any style changes, making it compatible with most any UI style kit. 

## Getting Started
Clone the repository or simply download the [minified version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/jasonhinkle/jquery-country-select/master/dist/jquery.country.select.min.js
[max]: https://raw.githubusercontent.com/jasonhinkle/jquery-country-select/master/dist/jquery.country.select.js

Include the following on your web page. This example uses the id "country" for the select input, however you can use any id that you choose.

```html
<!-- specify the selected value using the 'data-selected-value' attrib -->
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

When initializing the country selector, you can override the default options by passing an object with any/all of the following values:

```javascript
var options = {
  showFullName: true,
  showEmptyValue: true,
  emptyValueLabel: 'Select Country...',
  countries: {US: 'United States', CA: 'Canada'}
};
             
$('#country').countrySelect(options);
```


## Release History
* 0.1.0 Initial Release
