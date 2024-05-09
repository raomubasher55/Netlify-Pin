import React, { useEffect, useState, useContext } from 'react';
import NavbarContext from '../context/posts/NavbarContext';
import { Spinner } from './Spinner';


export const Home = () => {
  const { showNavbar, setShowNavbar } = useContext(NavbarContext);
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true)

  // const fetchAllPost = async () => {
  //   setSpinner(true);
  //   const response = await fetch(`http://localhost:5000/`, {
  //     method: "GET",
  //   });
  //   const result = await response.json();
  //   setSpinner(false);
  //   setData(result);
  // }

  useEffect(() => {
    setShowNavbar(true);
    const timer = setTimeout(() => {
      setSpinner(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [])



  return (
    <>
      {spinner && <Spinner />}
      {/* <div className="max-w-1200 mx-1 mt-[87px] pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-arial"> */}
      <h1 className='text-white text-center mt-20 text-3xl font-bold' >Home</h1>
      <div className="max-w-1200 mx-1 mt-[20px] pt-6  font-arial">
        <div className="Container">
          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/006.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>





          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/013.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>





          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/021.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>




          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/015.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>



          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/025.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>


          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/026.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>
          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/008.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>
          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/019.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>

          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/014.jpg`} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>
          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/020.jpg `} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>
          <div className="box cardColor p-2">
            <img src={`https://orionstardesign.com/wp-content/uploads/2023/08/024.jpg `} alt="image" />
            <div className="caption font-bold mt-2">Title</div>
            <div className="caption font-bold mt-1">Description</div>
            <div className='flex justify-between mt-2'>
            </div>
          </div>



        </div>

      </div>
    </>
  );
};
