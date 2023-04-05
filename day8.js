import React, { useState, useEffect } from 'react';

function Day8() {
  const [message, setMessage] = useState("Hello Guys, learning ChatGPT?");

  useEffect(() => {
    console.log("useEffect called");
    setTimeout(() => {
      setMessage("“A year spent in artificial intelligence is enough to make one believe in God.”");
    }, 2000);
  }, []);

  return (
    <center><div>
      <h1>{message}</h1>
    </div></center>
  );
}

export default Day8;