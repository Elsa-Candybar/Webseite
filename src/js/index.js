import { Calendar } from "@fullcalendar/core";
import listPlugin from "@fullcalendar/list";
import iCalendarPlugin from "@fullcalendar/icalendar";

const calendarEl = document.querySelector("calendar");

var calendar = new Calendar(calendarEl, {
  initialView: "listMonth",
  plugins: [listPlugin, iCalendarPlugin],
  height: "auto",
  dayMaxEvents: true, // allow "more" link when too many events
  events: {
    url:
      "https://calendar.google.com/calendar/ical/elsacandybarhh%40gmail.com/public/basic.ics",
    format: "ics"
  }
});

calendar.render();