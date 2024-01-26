import {useEffect} from "react";
import { useSearchParams } from "react-router-dom";

export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');

   // useEffect {() => {
         //logic to init user ot the room
    //}, [name]}

    return <div>
       Hi {name}
    </div>
  }