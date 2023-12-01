import React from 'react';
import './Game.css';
import { NavLink, useNavigate } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Game() {
  let [data, setData] = useState('');

    const fetchData = async () => {
      let jsonData = 'hello';
      try {
        const response = await fetch('http://localhost:8000/game', {
          method : "GET",
          mode: 'cors'
        });
        jsonData = await response.json();
        console.log(jsonData);
      // console.log(jsonData);
      // setData(jsonData);
      if (!response.ok){
        const crystalError = new Error('ohno');
        throw crystalError;
      }
      
    } catch (crystalError) {
      console.error('Crystal :(');
    } finally {
      return jsonData.message + ' ' + jsonData.known.name;
    }
  }
var [score, setScore] = useState(0);
  return (
    <body>
        <div className='left-side'>
        <svg className ='plant' xmlns="http://www.w3.org/2000/svg" width="68" height="84" viewBox="0 0 68 84" fill="none">
  <ellipse cx="33.5" cy="80" rx="32.5" ry="4" fill="black" fill-opacity="0.18"/>
  <path d="M29 20V18H38V20C37.7 19.641 36.38 18.9231 33.5 18.9231C30.62 18.9231 29.3 19.641 29 20Z" fill="#29572D" stroke="#29572D"/>
  <path d="M54 10.3866C50.407 9.73527 41.8363 13.1908 38 15V13.1004C44.7368 9.40962 51.4737 8.84877 54 9.02969V10.3866Z" fill="#60A266"/>
  <path d="M35 15.3415C38.4153 19.4794 49.3966 23.5621 66 6.78986C56.5424 3.38759 37.1017 0.334735 35 15.3415Z" fill="#407C46"/>
  <path d="M28.7206 31.8129V17.2164C27.3441 17.2164 27 16.4678 27 16.0936C27 14.8959 28.1471 14.7212 28.7206 14.7836V0H38.4706V14.7836C39.0441 14.7836 40 14.9708 40 16.0936C40 16.9918 38.8529 17.2164 38.2794 17.2164V32L28.7206 31.8129Z" fill="#407C46"/>
  <path d="M29 20V18H38V20C37.7 19.641 36.38 18.9231 33.5 18.9231C30.62 18.9231 29.3 19.641 29 20Z" fill="#29572D" stroke="#29572D"/>
  <path d="M54 10.3866C50.407 9.73527 41.8363 13.1908 38 15V13.1004C44.7368 9.40962 51.4737 8.84877 54 9.02969V10.3866Z" fill="#60A266"/>
  <path d="M61.4356 79H7.06931L2.41823 51.1854L2.0198 51.1842C0.841584 51.1842 0 50.8158 0 50.0789V45.4737C0 44.2947 1.12211 44 1.68317 44H65.7261C67.5426 44 67.9989 44.8596 68 45.2895V49.3421C68 51.3685 66.494 51.3684 65.7327 51.3684H65.7261L61.4356 79Z" fill="#EB8765"/>
  <path d="M66 51.2963L2 51L2.84881 55C22.6769 53.4593 52.6454 54.358 65.1512 55L66 51.2963Z" fill="#D7785C"/>
  <path d="M63 44H5C5.41802 41.8795 7.4965 41.2231 8.48348 41.16C9.87688 34.4954 15.3343 33.3342 17.8889 33.5866C21.9297 29.1941 26.8879 29.8631 28.8619 30.7466C32.7634 25.5968 36.7578 28.8533 38.2673 31.1253C45.0949 29.1562 48.1952 33.9653 48.8919 36.616C55.4408 35.8587 58.7037 39.3298 59.5165 41.16C61.8853 41.16 62.8258 43.0533 63 44Z" fill="#574B39"/>
  <path d="M36.6146 31.9176C35.2326 28.444 31.4319 28.5195 29.8771 29.841L29.0997 30.5017L28.3223 31.1625C23.2086 29.1991 19.1661 32.2323 17.7841 33.9943C11.012 33.8433 8.62791 39.0915 8.28239 41.7346C6.48571 41.7346 5.34551 43.2449 5 44H57C55.3415 40.0732 49.629 38.5881 46.9801 38.3364C45.0452 32.7483 39.2636 31.7289 36.6146 31.9176Z" fill="#867052"/>
  <ellipse cx="33.5" cy="80" rx="32.5" ry="4" fill="black" fill-opacity="0.18"/>
  <path d="M61.4356 79H7.06931L2.41823 51.1854L2.0198 51.1842C0.841584 51.1842 0 50.8158 0 50.0789V45.4737C0 44.2947 1.12211 44 1.68317 44H65.7261C67.5426 44 67.9989 44.8596 68 45.2895V49.3421C68 51.3685 66.494 51.3684 65.7327 51.3684H65.7261L61.4356 79Z" fill="#A54829"/>
  <path d="M66 51.2963L2 51L2.84881 55C22.6769 53.4593 52.6454 54.358 65.1512 55L66 51.2963Z" fill="#7E3520"/>
  <path d="M63 44H5C5.41802 41.8795 7.4965 41.2231 8.48348 41.16C9.87688 34.4954 15.3343 33.3342 17.8889 33.5866C21.9297 29.1941 26.8879 29.8631 28.8619 30.7466C32.7634 25.5968 36.7578 28.8533 38.2673 31.1253C45.0949 29.1562 48.1952 33.9653 48.8919 36.616C55.4408 35.8587 58.7037 39.3298 59.5165 41.16C61.8853 41.16 62.8258 43.0533 63 44Z" fill="#574B39"/>
  <path d="M36.6146 31.9176C35.2326 28.444 31.4319 28.5195 29.8771 29.841L29.0997 30.5017L28.3223 31.1625C23.2086 29.1991 19.1661 32.2323 17.7841 33.9943C11.012 33.8433 8.62791 39.0915 8.28239 41.7346C6.48571 41.7346 5.34551 43.2449 5 44H57C55.3415 40.0732 49.629 38.5881 46.9801 38.3364C45.0452 32.7483 39.2636 31.7289 36.6146 31.9176Z" fill="#867052"/>
</svg>
    <p className='score'>Score: {score}</p>
    <button onClick={async ()=> setData(data = await fetchData())}></button>
    <p>{data}</p>
</div>
    </body>
  );
}

export default Game;
