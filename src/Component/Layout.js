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
  const elevatorWay = useSelector(state => state.btn.elevatorWay);
  const error = useSelector(state => state.btn.error);
  const dispatch = useDispatch();

const moveElevator = (targetFloor) =>{
  let currentFloor = whichFloor;

  const interval = setInterval(() => {
    if(currentFloor === targetFloor){
      clearInterval(interval);
      dispatch(floorAction.isPassengerIn())
      
    }else if(currentFloor<targetFloor){
      currentFloor++;
      dispatch(floorAction.elevatorReachTheFloor(currentFloor));
    }else{
      currentFloor--;
      dispatch(floorAction.elevatorReachTheFloor(currentFloor))
    }
    
  }, 1100);
}
const moveElevatorWithPassenger = (targetFloor , way) =>{
  let currentFloor = whichFloor;

  const interval = setInterval(() => {
    if(currentFloor === targetFloor){
      clearInterval(interval);
      dispatch(floorAction.isPassengerIn())
      
    }else if(currentFloor<targetFloor){
      if(elevatorWay===true){
        currentFloor++;
        dispatch(floorAction.elevatorReachTheFloor(currentFloor));
      }else{
        dispatch(btnAction.elevatorError());
      }
      
    }else{
      if(elevatorWay===false){
        currentFloor--;
        dispatch(floorAction.elevatorReachTheFloor(currentFloor))
      }else{
        dispatch(btnAction.elevatorError());
      }
      
    }
    
  }, 1100);
}
const moveElevatorToFirstFloor = (floorNo) =>{
  let currentFloor = floorNo;

  const interval = setInterval(() => {
    if(currentFloor === 1){
      clearInterval(interval);
    }else{
      currentFloor--;
      dispatch(floorAction.elevatorReachTheFloor(currentFloor))
    }
  }, 1100);
}
  const floorSelectionHandler = (floorNo) =>{
    moveElevatorWithPassenger(floorNo);
    dispatch(btnAction.upDownToggle());
    setTimeout(() => {
      moveElevatorToFirstFloor(floorNo);
    }, 5000);

  }

  const elevatorSelectionHandler = (floorNo , way) => {
    moveElevator(floorNo);
    dispatch(btnAction.upDownToggle());
    if(way === 'up'){
        dispatch(btnAction.elevatorWayChangeUp());
    }else{
        dispatch(btnAction.elevatorWayChangeDown());
    }
  }

  return (
    <>
      <section className='flex justify-center m-10 space-x-10'>
        <div className="space-y-5 flex-row items-center">
          {whichFloor === 5 ? (isPassengerIn ? <Green no={4} /> : <Red no={4} />) : <Black no={4} />}
          {whichFloor === 4 ? (isPassengerIn ? <Green no={3} /> : <Red no={3}/>) : <Black no={3} />}
          {whichFloor === 3 ? (isPassengerIn ? <Green no={2} /> : <Red no={2} />) : <Black no={2} />}
          {whichFloor === 2 ? (isPassengerIn ? <Green no={1} /> : <Red no={1} />) : <Black no={1} />}
          {whichFloor === 1 ? (isPassengerIn ? <Green no={0} /> : <Red no={0} />): <Black no={0} />}
        </div>
        <div className='flex items-center gap-10'>
          
            <div>
              {[1, 2, 3, 4, 5].map(floor => (
                <div key={floor}>
                  <h3 className='text-center'>Floor {floor}</h3>
                  <div className='space-x-5'>
                    <button 
                      onClick={() => elevatorSelectionHandler(floor , 'up')}
                      className='border-2 border-black hover:border-green-500 hover:bg-green-100 transition-all duration-300 active:bg-green-300'
                    >
                      <HiArrowSmUp className='text-4xl hover:text-green-500 transition-all duration-300' />
                    </button>
                    <button 
                      onClick={() => elevatorSelectionHandler(floor , 'down')}
                      className='border-2 border-black hover:border-green-500 hover:bg-green-100 transition-all duration-300 active:bg-green-300'
                    >
                      <HiArrowSmDown className='text-4xl hover:text-green-500 transition-all duration-300' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          
            <div className='border-black border-2 p-5 flex-row space-y-2'>
              {[1, 2, 3, 4, 5].map(floor => (
                <button
                  key={floor}
                  onClick={() => floorSelectionHandler(floor)}
                  className='w-20 h-16 border-2 border-black hover:border-blue-500 hover:bg-blue-100 transition-all duration-300 active:bg-blue-300 mx-1'
                >
                  {floor}
                </button>
              ))}
            </div>
          
        </div>
        
      </section>
      {
          error && (<div>
            <p className = 'text-red-700 text-center mx-auto rounded-md font-mono  bg-red-200 p-2 px-2 border-2 border-red-700 w-[400px]'>
            {error}
              </p>
          </div>)
        }
    </>
  );
};

export default Layout;