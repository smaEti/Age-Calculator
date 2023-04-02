import './index.css';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Text from './components/Text';
import { useState , useRef } from 'react';
//TODO use state for Errors
const AgeCalculator = () => {
  let [dayError,setDayError] = useState('');
  let [monthError,setMonthError] = useState('');
  let [yearError,setYearError] = useState('');
  const dayInput = useRef();
  let monthInput = useRef();
  let yearInput = useRef();
  let [days,setDays] = useState(0);
  let [months,setMonths] = useState(0);
  let [years,setYears] = useState(0);
  const Time = new Date();
  const calculateAge = () => {
    //validating the inputs (days)
    if (dayInput.current.value == '' ){
      dayInput.current.classList.add('border-red-600');
      setDayError('this field is requierd');
      setDays(0);
    }else if (dayInput.current.value > 30){
      dayInput.current.classList.add('border-red-600');
      setDayError('must be a valid day');
      setDays(0);
    }else{
      dayInput.current.classList.remove('border-red-600');
      setDayError('');
    }
    //validating the inputs (years)
    if (yearInput.current.value == '' ){
      yearInput.current.classList.add('border-red-600');
      setYearError('this field is requierd');
      setMonths(0);
    }else if (yearInput.current.value > Time.getFullYear()){
      yearInput.current.classList.add('border-red-600');
      setYearError('must be in the past');
      setMonths(0);
    }else{
      yearInput.current.classList.remove('border-red-600');
      setYearError('');
    }
    //validating the inputs (months)
    if (monthInput.current.value == '' ){
      monthInput.current.classList.add('border-red-600');
      setMonthError('this field is requierd');
      setYears(0);
    }else if (monthInput.current.value > 12){
      monthInput.current.classList.add('border-red-600');
      setMonthError('must be a valid month');
      setYears(0);
    }else{
      monthInput.current.classList.remove('border-red-600');
      setMonthError('');
    }
    if ( yearError == '' && monthError == '' && dayError == ''){
      let wholeDays = ((Time.getFullYear() - Number(yearInput.current.value))*12*30) + ((Time.getMonth() + 1)*30 + Time.getDate()) - (Number(monthInput.current.value*30) + (Number(dayInput.current.value)));
      setDays(Number(wholeDays) - (Math.floor(wholeDays / 360)*12*30 + Math.floor(( Number(wholeDays) - (Math.floor(wholeDays / 360)*12*30)) / 30)*30)); 
      setMonths(Math.floor(( Number(wholeDays) - (Math.floor(wholeDays / 360)*12*30)) / 30));
      setYears((Time.getFullYear()-Number(yearInput.current.value))==2023?'--': Math.floor(wholeDays / 360));
      // console.log(Time.getFullYear()-Number(yearInput.current.value))
    }
  };
  return (
    <div className="container w-11/12 bg-white md:w-5/12 mt-36 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-notFull md:h-fit">
      <div className=' pl-5 md:pl-14 md:pb-10'>
      <div className="flex md:gap-8 gap-5 pt-13 ">
        <Input place="DD" error={dayError} Refrence={dayInput} head="DAY" />
        <Input place="MM" error={monthError} Refrence={monthInput} head="MONTH" />
        <Input place="YYYY" error={yearError} Refrence={yearInput} head="YEAR" />
      </div>
      <Button calculate={calculateAge} />
        <Text number={years} text="years"/>
        <Text number={months} text="months"/>
        <Text number={days} text="days"/>
      <br />
    </div>
    </div>
  );
};
export default AgeCalculator;
