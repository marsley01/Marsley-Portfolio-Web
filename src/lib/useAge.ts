import { useState, useEffect } from "react";

const DOB = new Date("2005-10-10");

function calculateAge(): number {
  const today = new Date();
  let age = today.getFullYear() - DOB.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > DOB.getMonth() ||
    (today.getMonth() === DOB.getMonth() && today.getDate() >= DOB.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
}

export function useAge(): number {
  const [age, setAge] = useState(calculateAge());

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calculateAge());
    }, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return age;
}
