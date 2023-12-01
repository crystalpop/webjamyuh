import React from 'react';
import './App.css';
import { NavLink, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  return (
    <body>
      <h1>WebJam 2023</h1>
      <h2>Welcome! </h2>
      <div class="intro">
      <svg width="7" height="165" viewBox="0 0 7 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Line 3" d="M2.75 164.005V164.505H3.75V164.005H2.75ZM3.75 4.99657L6.13675 -0.0034256H0.363249L2.75 4.99657H3.75ZM3.75 164.005V163.005H2.75V164.005H3.75ZM3.75 161.005L3.75 159.005H2.75L2.75 161.005H3.75ZM3.75 157.005L3.75 155.004H2.75L2.75 157.005H3.75ZM3.75 153.004L3.75 151.004H2.75L2.75 153.004H3.75ZM3.75 149.004V147.004H2.75V149.004H3.75ZM3.75 145.004L3.75 143.004H2.75L2.75 145.004H3.75ZM3.75 141.004L3.75 139.004H2.75L2.75 141.004H3.75ZM3.75 137.004L3.75 135.003H2.75L2.75 137.004H3.75ZM3.75 133.003L3.75 131.003H2.75L2.75 133.003H3.75ZM3.75 129.003V127.003H2.75L2.75 129.003H3.75ZM3.75 125.003L3.75 123.003H2.75L2.75 125.003H3.75ZM3.75 121.003L3.75 119.003H2.75L2.75 121.003H3.75ZM3.75 117.003L3.75 115.002H2.75L2.75 117.003H3.75ZM3.75 113.002V111.002H2.75V113.002H3.75ZM3.75 109.002L3.75 107.002H2.75L2.75 109.002H3.75ZM3.75 105.002L3.75 103.002H2.75V105.002H3.75ZM3.75 101.002L3.75 99.0016H2.75L2.75 101.002H3.75ZM3.75 97.0015V95.0014H2.75V97.0015H3.75ZM3.75 93.0013L3.75 91.0012H2.75L2.75 93.0013H3.75ZM3.75 89.0011L3.75 87.001H2.75L2.75 89.0011H3.75ZM3.75 85.0009L3.75 83.0008H2.75L2.75 85.0009H3.75ZM3.75 81.0007V79.0006H2.75V81.0007H3.75ZM3.75 77.0005L3.75 75.0004H2.75L2.75 77.0005H3.75ZM3.75 73.0003L3.75 71.0002H2.75L2.75 73.0003H3.75ZM3.75 69.0001L3.75 67H2.75L2.75 69.0001H3.75ZM3.75 64.9999L3.75 62.9998H2.75L2.75 64.9999H3.75ZM3.75 60.9997V58.9996H2.75L2.75 60.9997H3.75ZM3.75 56.9995L3.75 54.9994H2.75L2.75 56.9995H3.75ZM3.75 52.9993L3.75 50.9992H2.75L2.75 52.9993H3.75ZM3.75 48.9991L3.75 46.999H2.75L2.75 48.9991H3.75ZM3.75 44.9989V42.9988H2.75V44.9989H3.75ZM3.75 40.9987L3.75 38.9986H2.75L2.75 40.9987H3.75ZM3.75 36.9985L3.75 34.9984H2.75V36.9985H3.75ZM3.75 32.9983L3.75 30.9982H2.75L2.75 32.9983H3.75ZM3.75 28.9981V26.998H2.75V28.9981H3.75ZM3.75 24.9979L3.75 22.9978H2.75L2.75 24.9979H3.75ZM3.75 20.9977L3.75 18.9976H2.75L2.75 20.9977H3.75ZM3.75 16.9975L3.75 14.9974H2.75L2.75 16.9975H3.75ZM3.75 12.9972V10.9971H2.75L2.75 12.9972H3.75ZM3.75 8.99703L3.75 6.99693H2.75L2.75 8.99703H3.75ZM3.75 4.99682L3.75 2.99671H2.75L2.75 4.99682H3.75Z" fill="#F2EDC4"/>
</svg>
    <p>MoreOrLessCarbon is a web application built by University of California, Irvine students that aims to raise awareness towards web applications that run productively and efficiently. We also took economical steps for MoreOrLessCarbon like making it a PWA for lazy loading and making the aesthetic darker to reduce electricity consumption per viewer. We hope that by playing a fun and interactive game with this novel concept, more people will begin to think about how to create web applications that are better for the environment. Enjoy playing!</p>
    <svg width="7" height="165" viewBox="0 0 7 165" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Line 3" d="M2.75 164.005V164.505H3.75V164.005H2.75ZM3.75 4.99657L6.13675 -0.0034256H0.363249L2.75 4.99657H3.75ZM3.75 164.005V163.005H2.75V164.005H3.75ZM3.75 161.005L3.75 159.005H2.75L2.75 161.005H3.75ZM3.75 157.005L3.75 155.004H2.75L2.75 157.005H3.75ZM3.75 153.004L3.75 151.004H2.75L2.75 153.004H3.75ZM3.75 149.004V147.004H2.75V149.004H3.75ZM3.75 145.004L3.75 143.004H2.75L2.75 145.004H3.75ZM3.75 141.004L3.75 139.004H2.75L2.75 141.004H3.75ZM3.75 137.004L3.75 135.003H2.75L2.75 137.004H3.75ZM3.75 133.003L3.75 131.003H2.75L2.75 133.003H3.75ZM3.75 129.003V127.003H2.75L2.75 129.003H3.75ZM3.75 125.003L3.75 123.003H2.75L2.75 125.003H3.75ZM3.75 121.003L3.75 119.003H2.75L2.75 121.003H3.75ZM3.75 117.003L3.75 115.002H2.75L2.75 117.003H3.75ZM3.75 113.002V111.002H2.75V113.002H3.75ZM3.75 109.002L3.75 107.002H2.75L2.75 109.002H3.75ZM3.75 105.002L3.75 103.002H2.75V105.002H3.75ZM3.75 101.002L3.75 99.0016H2.75L2.75 101.002H3.75ZM3.75 97.0015V95.0014H2.75V97.0015H3.75ZM3.75 93.0013L3.75 91.0012H2.75L2.75 93.0013H3.75ZM3.75 89.0011L3.75 87.001H2.75L2.75 89.0011H3.75ZM3.75 85.0009L3.75 83.0008H2.75L2.75 85.0009H3.75ZM3.75 81.0007V79.0006H2.75V81.0007H3.75ZM3.75 77.0005L3.75 75.0004H2.75L2.75 77.0005H3.75ZM3.75 73.0003L3.75 71.0002H2.75L2.75 73.0003H3.75ZM3.75 69.0001L3.75 67H2.75L2.75 69.0001H3.75ZM3.75 64.9999L3.75 62.9998H2.75L2.75 64.9999H3.75ZM3.75 60.9997V58.9996H2.75L2.75 60.9997H3.75ZM3.75 56.9995L3.75 54.9994H2.75L2.75 56.9995H3.75ZM3.75 52.9993L3.75 50.9992H2.75L2.75 52.9993H3.75ZM3.75 48.9991L3.75 46.999H2.75L2.75 48.9991H3.75ZM3.75 44.9989V42.9988H2.75V44.9989H3.75ZM3.75 40.9987L3.75 38.9986H2.75L2.75 40.9987H3.75ZM3.75 36.9985L3.75 34.9984H2.75V36.9985H3.75ZM3.75 32.9983L3.75 30.9982H2.75L2.75 32.9983H3.75ZM3.75 28.9981V26.998H2.75V28.9981H3.75ZM3.75 24.9979L3.75 22.9978H2.75L2.75 24.9979H3.75ZM3.75 20.9977L3.75 18.9976H2.75L2.75 20.9977H3.75ZM3.75 16.9975L3.75 14.9974H2.75L2.75 16.9975H3.75ZM3.75 12.9972V10.9971H2.75L2.75 12.9972H3.75ZM3.75 8.99703L3.75 6.99693H2.75L2.75 8.99703H3.75ZM3.75 4.99682L3.75 2.99671H2.75L2.75 4.99682H3.75Z" fill="#F2EDC4"/>
</svg>
<div className="game-screen"> 
<div className='svg2'>
  <svg width="46" height="88" viewBox="0 0 46 88" fill="none" xmlns="http://www.w3.org/2000/svg">
<path id="Vector 5" d="M23.8324 1C6.60254 16.2663 -17.5193 54.8391 23.8324 87C39.806 72.4122 62.1689 34.7894 23.8324 1Z" fill="#C8FB96" stroke="#44C350"/>
</svg>
  </div>
  <div className='svg1'>
  <svg width="93" height="112" viewBox="0 0 93 112" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="Vector 6" d="M46.5 112V90.2M46.5 3V90.2M46.5 3C37.8041 3.67075 23.6746 7.89116 13.8891 18.76M46.5 3C41.271 5.99615 32.4488 14.0366 27.4411 26.98M46.5 3C51.5364 6.60727 59.8111 15.0852 64.5788 26.98M46.5 3C55.775 3.45368 70.7559 7.50452 80.4912 18.76M3.01881 47.69C3.3533 34.9447 7.77265 25.5536 13.8891 18.76M3.01881 47.69C2.68551 60.3902 6.8127 69.5464 12.8666 76.03M3.01881 47.69H10.628H18.2373M46.5 90.2C55.3472 90.2 69.8185 86.8676 79.6175 76.03M46.5 90.2C37.3379 89.9759 22.6079 86.4628 12.8666 76.03M46.5 90.2C41.271 87.7032 32.4488 80.5052 27.4411 68.0401M46.5 90.2C51.0495 87.0787 58.7005 79.4194 63.618 68.0401M89.9812 47.69C90.3079 34.9141 86.3492 25.5327 80.4912 18.76M89.9812 47.69H74.7628M89.9812 47.69C89.656 60.4067 85.4702 69.557 79.6175 76.03M68.2406 47.69C68.5346 40.0242 67.0143 33.0563 64.5788 26.98M68.2406 47.69H23.6724M68.2406 47.69C67.9457 55.3796 66.1418 62.1998 63.618 68.0401M23.6724 47.69C23.6724 39.7796 25.1615 32.8719 27.4411 26.98M23.6724 47.69C23.6724 55.6004 25.1615 62.3659 27.4411 68.0401M13.8891 18.76C15.3385 20.0466 18.4547 23.274 23.6724 25.89M27.4411 26.98C34.5162 29.72 51.8489 33.556 64.5788 26.98M80.4912 18.76C76.3777 22.6479 70.6102 25.1333 68.2406 25.89M79.6175 76.03C75.6747 72.542 70.3901 70.2167 68.2406 69.49M12.8666 76.03C15.0192 74.3333 18.1519 70.6499 22.5 69.49M27.4411 68.0401C34.1669 65.3768 50.8184 61.6482 63.618 68.0401" stroke="#407C46" stroke-width="5"/>
  </svg>
  </div>
</div>
<button onClick={() => navigate('./game')}>Play</button>
</div>

    </body>
  );
}

export default App;
