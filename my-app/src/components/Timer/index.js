import React, { useState, useEffect } from 'react';
import styled from "styled-components"

const Timer = ()=>{
    const targetDate = '2024-10-09T00:00:00'; // Replace with your event date

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return (
        <TimerContainer>
            <TimerSubContainer>
                <HeadingElement>DANCE FEST STARTS IN</HeadingElement>
                <Times>
                    <TimeSlot>
                        <TimeSlotHeading>0{timeLeft.days || '00'}</TimeSlotHeading>
                        <DaysSlotHeading>Days</DaysSlotHeading>
                    </TimeSlot>
                    <TimeSlot>
                        <TimeSlotHeading>{timeLeft.hours || '00'}</TimeSlotHeading>
                        <DaysSlotHeading>Hours</DaysSlotHeading>
                    </TimeSlot>
                    <TimeSlot>
                        <TimeSlotHeading>{timeLeft.minutes || '00'}</TimeSlotHeading>
                        <DaysSlotHeading>Minutes</DaysSlotHeading>
                    </TimeSlot>
                    <TimeSlot>
                    <TimeSlotHeading>{timeLeft.seconds || '00'}</TimeSlotHeading>
                        <DaysSlotHeading>Seconds</DaysSlotHeading>
                    </TimeSlot>
                </Times>
                <BuyTicket>BUY TICKET</BuyTicket>
            </TimerSubContainer>
        </TimerContainer>
    )
}

const HeadingElement = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;
    color: #FEBA08;
    margin-bottom: 0px;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`

const TimerContainer = styled.div`
    width: 100%;
    background-color: #121212;
    padding: 30px 0;
`;

const TimerSubContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 20px;  
`;

const Times = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 36px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 24px;
    }

`

const TimeSlot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 24px;
    }
`

const TimeSlotHeading = styled.h1`
    font-size: 32px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 40px;
    }
`

const DaysSlotHeading = styled.h1`
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 32px;
`

const BuyTicket = styled.button`
        background-color: #feba08;
        border: none;
        border-radius: 6px;
        padding: 12px 24px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        padding: 16px;
        margin-top: 16px;

        @media (max-width: 768px) {
            margin-top: 28px;
        }
`

export default Timer