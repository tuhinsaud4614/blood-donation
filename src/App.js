import DateSlider from "./shared/components/date-slider/DateSlider";

function App() {
  return (
    <>
      <DateSlider
        items={[
           "0" ,
           "1" ,
           "2" ,
           "3" ,
           "4" ,
           "5" ,
           "6" ,
           "7" ,
           "8" ,
           "9" ,
        ]}
        closeItemNum={2}
      >
        Years Old
      </DateSlider>
      <DateSlider
        items={[
          "Jan" ,
          "Feb" ,
          "Mar" ,
          "Apr" ,
        ]}
        closeItemNum={1}
      >
        Month
      </DateSlider>
    </>
  );
}

export default App;
