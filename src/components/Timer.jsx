import { useEffect,useState } from "react";
import useSound from 'use-sound';




export default function Timer(setStop,questionNumber) {

    const [timer,setTimer] = useState(3);
    const [stop,setSstop] = useState(false);

    // const [play] = useSound(boopSfx);

    
    useEffect(()=>{
        if (timer===0) return setSstop(true);
        const interval = setInterval(()=>{
            setTimer(prev=>prev - 1);
            
        },1000)
        return () => clearInterval(interval);
    },[setStop, timer])
    
    useEffect(()=>{
        setTimer(3);
        
    },[questionNumber])
    return timer;
}
