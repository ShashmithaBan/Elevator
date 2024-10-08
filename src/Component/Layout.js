import React, { useEffect } from 'react';
import Black from './Floors/Black';
import Red from './Floors/Red';
import Green from './Floors/Green';
import { HiArrowSmDown, HiArrowSmUp } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { btnAction } from './Store/Btn';
import { floorAction } from './Store/Floor';

const Layout = () => {
  const isBtnVisible = useSelector(state => state.btn.elevatorBtnVisible);
  const whichFloor = useSelector(state => state.floor.floorNo);
  const isPassengerIn = useSelector(state => state.floor.isPassengerIn);
  const dispatch = useDispatch();

const moveElevatorToPassenger = (targetFloor) =>{
  let currentFloor = whichFloor;

  const interval = setInterval(() => {
    if(currentFloor === targetFloor){
      dispatch(floorAction.isPassengerIn())
      clearInterval();
    }else if(currentFloor<targetFloor){
      currentFloor++;
      dispatch(floorAction.elevatorReachTheDestination(currentFloor));
    }else{
      currentFloor--;
      dispatch(floorAction.elevatorReachTheDestination(currentFloor))
    }
    
  }, 1100);
  
}

  const floorSelectionHandler = (floorNo) => {
    moveElevatorToPassenger(floorNo);
    dispatch(btnAction.upDownToggle());
  }

  return (
    <>
      <section className='flex justify-center m-10 space-x-10'>
        <div className="space-y-5 flex-row items-center">
          {whichFloor === 5 ? (isPassengerIn ? <Green no={5} /> : <Green no={5} />) : <Black no={5} />}
          {whichFloor === 4 ? (isPassengerIn ? <Green no={4} /> : <Red no={4}/>) : <Black no={4} />}
          {whichFloor === 3 ? <Red no={3} /> : <Black no={3} />}
          {whichFloor === 2 ? <Red no={2} /> : <Black no={2} />}
          {whichFloor === 1 ? <Red no={1} /> : <Black no={1} />}
        </div>
        <div className='flex items-center'>
          {isBtnVisible ? (
            <div>
              {[1, 2, 3, 4, 5].map(floor => (
                <div key={floor}>
                  <h3 className='text-center'>Floor {floor}</h3>
                  <div className='space-x-5'>
                    <button 
                      onClick={() => floorSelectionHandler(floor)}
                      className='border-2 border-black hover:border-green-500 hover:bg-green-100 transition-all duration-300 active:bg-green-300'
                    >
                      <HiArrowSmUp className='text-4xl hover:text-green-500 transition-all duration-300' />
                    </button>
                    <button 
                      onClick={() => floorSelectionHandler(floor)}
                      className='border-2 border-black hover:border-green-500 hover:bg-green-100 transition-all duration-300 active:bg-green-300'
                    >
                      <HiArrowSmDown className='text-4xl hover:text-green-500 transition-all duration-300' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='border-black border-2 p-5 flex-row space-y-2'>
              {[1, 2, 3, 4, 5, 6].map(floor => (
                <button
                  key={floor}
                  onClick={() => floorSelectionHandler(floor)}
                  className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'
                >
                  {floor}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Layout;