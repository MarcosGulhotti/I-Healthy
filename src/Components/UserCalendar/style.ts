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
  .fc-scrollgrid-liquid {
    height: 100%;
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
    background-color: var(--Main-White);
    color: var(--Main-Black);
  }
  .fc-h-event {
    border: none;
    background: none;
  }
  .fc-daygrid-day-frame {
    max-height: 85px;
    height: 80px;
    overflow: auto;
  }
  .fc-toolbar-title {
    font-size: 1.5rem;
  }
  .fc-header-toolbar {
    padding: 10px;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #848484;
  }
  .fc .fc-view-harness-active > .fc-view {
    height: 395px;
  }
  @media (max-width: 323px) {
    .fc-toolbar-title {
      font-size: 1.2rem;
    }
    .fc .fc-view-harness-active > .fc-view {
      height: 370px;
    }
  }
  .fc-today-button:enabled {
    width: 45px;
    height: 25px;
    padding: 0;
    font-size: 0.7rem;
    font-weight: bold;
    background-color: var(--Main-Black);
    color: white;
    border: 1px solid white;
  }
  .fc-today-button:disabled {
    width: 45px;
    height: 25px;
    padding: 0;
    font-size: 0.7rem;
    font-weight: bold;
    background-color: var(--Main-Black);
    color: white;
    border: 1px solid white;
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
    border: 1px solid white;
    font-size: 1.2rem;
  }
  .fc .fc-scrollgrid-section-body table,
  .fc .fc-scrollgrid-section-footer table {
    width: 100%;
  }

  @media (min-width: 1441px) {
    .fc-media-screen {
      height: 610px;
    }
    .fc-view-harness {
      height: 680px;
      max-height: 680px;
    }
    .fc-view-harness .fc-view-harness-active {
      height: 680px;
    }

    .fc .fc-view-harness-active > .fc-view {
      height: 640px;
    }
    .fc-daygrid-body {
      width: 100%;
    }
    .fc-daygrid-day-frame {
      height: 180px;
      max-height: 180px;
    }
    .fc-daygrid-day {
      width: 250px;
    }
  }
`;
