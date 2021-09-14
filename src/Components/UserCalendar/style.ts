import styled from "styled-components";

export const StyledCalendar = styled.div`
  .fc-media-screen {
    height: 430px;
    max-height: 430px;
    color: var(--Main-White);
  }
  .fc-daygrid {
    height: 535px;
  }
  .fc-scrollgrid-liquid{
    height: 70%;
  }
  .fc-scroller-liquid-absolute {
    overflow: hidden;
  }
  .fc-col-header-cell-cushion {
    color: white;
  }
  .fc-daygrid-day-number {
    color: white;
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
  .fc-today-button:enabled {
    width: 35px;
    height: 25px;
    padding: 0;
    font-size: 0.7rem;
    font-weight: bold;
    background-color: var(--Main-Black);
  }
  .fc-today-button:disabled {
    background-color: var(--Main-Black);
    width: 35px;
    height: 25px;
    padding: 0;
    font-size: 0.7rem;
    font-weight: bold;
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
  .fc .fc-scrollgrid-section-body table, .fc .fc-scrollgrid-section-footer table{
    width: 100%;
  }
`;
