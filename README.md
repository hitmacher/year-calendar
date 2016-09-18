# year-calendar
Simple calendar to display whole year.

## Initialisation
### Recomended way
```html
<script src="yearCalendar.js" type="text/javascript"></script>
<link href="yearCalendar.css" rel="stylesheet" type="text/css"/>
```
```html
<div id="calendar"></div>
```
```javascript
var calendar = new yearCalendar('calendar', 2016);
```
### Alternative ways
Creating calendar without any parameters will append a calendar to <body>. Current year will be used:
```javascript
var calendar = new yearCalendar();
```
You can set just a year. The calendar will be append to your <body>.
```javascript
var calendar = new yearCalendar(2020);
```
And you can set just the id of your container. The calendar will  render inside of your div. Current year will be set as default:
```html
<div id="calendar"></div>
```
```javascript
var calendar = new yearCalendar('calendar');
```
## Methods
| Method        | Description   |
| :------------ | :-------------  |
| getYear()     | returns current year |
| setYear(year) | rerender calendar with year you passed through |
Example: 
```javascript
var calendar = new yearCalendar();
calendar.setYear(2025)
```






