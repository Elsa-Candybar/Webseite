import { Calendar } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";
import iCalendarPlugin from "@fullcalendar/icalendar";

const calendarEl = document.querySelector("calendar");

var calendar = new FullCalendar.Calendar(calendarEl, {

plugins: [
    iCalendarPlugin,
    dayGridPlugin
    ],
    initialView: 'dayGridMonth',
    events: {
    url: 'https://mywebsite.com/icalendar-feed.ics',
    format: 'ics' // important!
    },

headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'listDay,listWeek'
},


views: {
    listDay: { buttonText: 'list day' },
    listWeek: { buttonText: 'list week' }
},

height: 'auto',
initialView: 'listWeek',
navLinks: true, // can click day/week names to navigate views
editable: true,
dayMaxEvents: true, // allow "more" link when too many events
});

calendar.render();