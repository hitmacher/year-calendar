function yearCalendar(parent_id, year) {

    var that = this;

    // Dynamic 'id' to have easy access to calendar object
    var id = 'calendar_' + Math.floor((Math.random() * 9999));

    /**
     * Create an empty container for calendar and return its id
     * @returns {String}
     */
    var createContainer = function () {

        var parent_id = "yearCalendarContainer";
        var container = document.createElement('div');
        container.id = parent_id;
        document.getElementsByTagName('body')[0].appendChild(container);

        return parent_id;
    }

    // Checking which parameters were passed through
    // -------------------------------------------------------------

    // Use current year if no year was passed through
    if (typeof year === "undefined") {
        var year = new Date().getFullYear();
    }

    // Create container for our calendar if no container specified
    if (typeof parent_id === "undefined") {
        var parent_id = createContainer();
    }

    // In case the parent_id is a year -> set this year to simplify
    // creation of calendar instance
    else if (!isNaN(parent_id) && parent_id.toString().length == 4) {

        var year = parent_id;
        var parent_id = createContainer();
    }

    if (typeof parent_id === "undefined") {

        console.log("Error while creating calendar. Please check arguments...");
        return;
    }

    this.container = document.getElementById(parent_id);

    // @TODO: month names should be passed via options 
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // @TODO: day names should be passed via options
    var dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];


    /**
     * Get the day of week (0 = Sunday, 6 = Saturday)
     * @param {int} year
     * @param {int} month
     * @param {int} day
     * @returns {String}
     */
    var getDayOfWeek = function (year, month, day) {

        return new Date(year, month, day).getDay();
    };

    /**
     * Get amount of days in month
     * @param {int} year
     * @param {int} month
     * @returns {int} Amount of days in month
     */
    var getDaysInMonth = function (year, month) {

        return new Date(year, month, 1, -1).getDate();
    };

    /**
     * Helper method to wrap values into span tag 
     * @param {mixed} value
     * @returns {String}
     */
    var htmlSpan = function (value) {
        return '<span>' + value + '</span>';
    };

    /**
     * Render calendar grid. 
     * @param {int} alternativeYear 
     */
    var renderCalendarGrid = function (alternativeYear) {

        if (typeof alternativeYear !== "undefined") {
            year = alternativeYear;
        }

        // Is for building of html structure of finel html grid of 
        // calendar 
        var gridTemplate = '';

        // Generate 32 rows (32 be cause of header)
        for (var day = 0; day <= 31; day++) {

            gridTemplate += '<tr>';

            for (var month = 0; month < 12; month++) {

                // Render month names
                if (day === 0) {

                    gridTemplate += '<th>' + monthNames[month] + '</th>';
                    continue;
                }

                // Render empty cell if the day is out of range for 
                // current month
                if (day > getDaysInMonth(year, month + 1)) {

                    gridTemplate += '<td></td>';

                    continue;
                }

                // Regular day (1-28, 1-29, 1-30 or 1-31)
                var dayNum = htmlSpan(day <= 9 ? '0' + day : day);
                var dayStr = htmlSpan(dayNames[getDayOfWeek(year, month, day)]);

                if (getDayOfWeek(year, month, day) == 0) {
                    gridTemplate += '<td class="sunday">' + dayNum + dayStr + '</td>';
                    continue;
                }

                gridTemplate += '<td>' + dayNum + dayStr + '</td>';

            }

            gridTemplate += '</tr>';

        }

        // Write generated content into container
        that.container.innerHTML = '<table class="yearCalendar" id="' + id + '">' + gridTemplate + '</table>';

    };

    /**
     * Get current year 
     * @returns {int} Current year
     */
    this.getYear = function () {
        return year;
    };

    /**
     * Set alternative year on the fly
     * @param {int} year
     */
    this.setYear = function (year) {
        renderCalendarGrid(year);
    }

    /**
     * Init Calendar
     * @returns {void}
     */
    var init = function () {
        renderCalendarGrid();
    };

    /**
     * Constructor method.
     * Note: we don't need to pass 'this' yet, but possible in future
     * it will be necessery
     * @type 
     */
    var __constructor = function (that) {

        init();

    }(this);

}
