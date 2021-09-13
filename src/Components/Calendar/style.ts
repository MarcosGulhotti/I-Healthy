import styled from "styled-components";

export const StyledCalendar = styled.div`
  .fc-media-screen {
    height: 600px;
    max-height: 600px;
    color: var(--Main-Black);
  }
  .fc-daygrid {
    height: 535px;
  }
  .fc-scroller-liquid-absolute {
    overflow: hidden;
  }
  .fc-col-header-cell-cushion {
    color: black;
  }
  .fc-daygrid-day-number {
    color: black;
  }
  .fc-event-title-container {
    background-color: black;
  }
  .fc-h-event {
    border: none;
    background: none;
  }
  .fc-daygrid-day-frame {
    max-height: 150px;
    height: 100px;
    overflow: auto;
  }
  .fc-toolbar-title {
    font-size: 1.5rem;
  }
  .fc-today-button {
    width: 35px;
    height: 25px;
    padding: 0;
    font-size: 0.7rem;
    font-weight: bold;
    background-color: var(--Main-Black);
  }
  .fc-today-button:disabled {
    background-color: var(--Main-Black);
  }
  .fc-button-group {
    gap: 2px;
    button {
      padding: 0;
      width: 40px;
      height: 40px;
    }
  }
  .fc-prev-button,
  .fc-next-button {
    background-color: var(--Main-Black);
  }
`;
