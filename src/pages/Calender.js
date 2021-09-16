import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calender = () => {
  const [state, setState] = useState({
    weekendsVisible: true,
    currentEvents: [
      {
        id: 1,
        title: "event",
      },
      {
        id: 1,
        title: "event",
      },
      {
        id: 1,
        title: "event",
      },
    ],
  });
  function renderSidebarEvent(event) {
    return (
      <li key={event.id}>
        <b>
          {formatDate(event.start, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </b>
        <i>{event.title}</i>
      </li>
    );
  }
  return (
    <section className="container-fluid ">
      <div className="row demo-app m-4 ">
        <div className="col col-sm-12 col-lg-4 col-md-4">
          <div className="demo-app-sidebar">
            <div className="demo-app-sidebar-section">
              <h2>Instructions</h2>
              <ul>
                <li>
                  Select dates and you will be prompted to create a new event
                </li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
              </ul>
            </div>
            <div className="demo-app-sidebar-section">
              <label>
                <input
                  type="checkbox"
                  checked={state.weekendsVisible}
                  //   onChange={handleWeekendsToggle}
                ></input>
                toggle weekends
              </label>
            </div>
            <div className="demo-app-sidebar-section">
              <h2>All Events ({state.currentEvents.length})</h2>
              <ul> {state.currentEvents.map(renderSidebarEvent)} </ul>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-8 col-lg-8 demo-app-main">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            themeSystem="bootstrap"
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={state.weekendsVisible}
          />
          ;
        </div>
      </div>
    </section>
  );
};

export default Calender;
