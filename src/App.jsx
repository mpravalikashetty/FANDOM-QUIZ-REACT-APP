import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "When BTS Debuted?",
      answers: [
        {
          text: "June 1st 2013",
          correct: false,
        },
        {
          text: "June 12th 2013",
          correct: true,
        },
        {
          text: "June 27th 2014",
          correct: false,
        },
        {
          text: "July 10th 2014",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What is the name of BTS Fandom",
      answers: [
        {
          text: "Army",
          correct: true,
        },
        {
          text: "Blink",
          correct: false,
        },
        {
          text: "Fans",
          correct: false,
        },
        {
          text: "VIP",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of Suk Han-sung in Hwarang Film",
      answers: [
        {
          text: "Kim Namjoon",
          correct: false,
        },
        {
          text: "Kim Seokjin",
          correct: false,
        },
        {
          text: "Kim Jisoo",
          correct: false,
        },
        {
          text: "Kim Taehyung",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Totally how many songs does BTS have till september 2021?",
      answers: [
        {
          text: "300",
          correct: false,
        },
        {
          text: "350",
          correct: false,
        },
        {
          text: "250",
          correct: false,
        },
        {
          text: "230",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which among the following is not a BTS show?",
      answers: [
        {
          text: "Run BTS",
          correct: false,
        },
        {
          text: "BTS Idol Stars",
          correct: true,
        },
        {
          text: "BTS in the Soop",
          correct: false,
        },
        {
          text: "BTS Bon Voyage",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the BTS first major AWARD?",
      answers: [
        {
          text: "Melon Music Awards",
          correct: true,
        },
        {
          text: "Mnet Asian Music Awards",
          correct: false,
        },
        {
          text: "The Seoul Music Awards",
          correct: false,
        },
        {
          text: "The Golden Disc Awards",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "BTS debuted under which production company?",
      answers: [
        {
          text: "Big Hit Labels",
          correct: false,
        },
        {
          text: "Bangton Sonyeondan ",
          correct: false,
        },
        {
          text: "Big Hit Entertainments",
          correct: true,
        },
        {
          text: "Hybe Labels",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Who among these were born in same year?",
      answers: [
        {
          text: "V/JK",
          correct: false,
        },
        {
          text: "Suga/Jhope",
          correct: false,
        },
        {
          text: "RM/Jhope",
          correct: true,
        },
        {
          text: "RM/Jimin",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who gifted RM a bicycle on his 27th Birthday?",
      answers: [
        {
          text: "JHope",
          correct: false,
        },
        {
          text: "JK",
          correct: false,
        },
        {
          text: "Suga",
          correct: false,
        },
        {
          text: "Jin",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Who was born at GWANGJU in South Korea?",
      answers: [
        {
          text: "Jin",
          correct: false,
        },
        {
          text: "Jhope",
          correct: true,
        },
        {
          text: "Suga",
          correct: false,
        },
        {
          text: "Rap Monster",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "What is the Zodiac Sign of JK and RM?",
      answers: [
        {
          text: "Virgo",
          correct: true,
        },
        {
          text: "Libra",
          correct: false,
        },
        {
          text: "Capricorn",
          correct: false,
        },
        {
          text: "Sagittarius",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "How many Awards Does BTS Won?",
      answers: [
        {
          text: "390",
          correct: false,
        },
        {
          text: "392",
          correct: true,
        },
        {
          text: "391",
          correct: false,
        },
        {
          text: "393",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who among the following BTS doesn't collaborate with?",
      answers: [
        {
          text: "Halsey",
          correct: false,
        },
        {
          text: "Ed sheeran",
          correct: false,
        },
        {
          text: "Taylor Swift",
          correct: true,
        },
        {
          text: "ColdPlay",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "When does BTS renewed its contract to 2025",
      answers: [
        {
          text: "2014",
          correct: false,
        },
        {
          text: "2017",
          correct: false,
        },
        {
          text: "2011",
          correct: false,
        },
        {
          text: "2018",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Which album is the best selling albums of BTS with salse >4.5M in South Korea?",
      answers: [
        {
          text: "Dynamite",
          correct: false,
        },
        {
          text: "Map of the Soul:7",
          correct: true,
        },
        {
          text: "Butter",
          correct: false,
        },
        {
          text: "Love Yourself",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "All The Best" },
        { id: 2, amount: "BTS Art Sticker" },
        { id: 3, amount: "BTS Tshirt" },
        { id: 4, amount: "BTS Photo Album" },
        { id: 5, amount: "BTS Album Copy" },
        { id: 6, amount: "BTS TinyTan Toy" },
        { id: 7, amount: "BTS JIMIN CAP" },
        { id: 8, amount: "BTS V Glasses" },
        { id: 9, amount: "BTS JK Painting" },
        { id: 10, amount: "Chance to Gift Bts by Yourself" },
        { id: 11, amount: "Won $1000 amount from BTS" },
        { id: 12, amount: "BTS Concert Ticket at Last row" },
        { id: 13, amount: "$ Flight Ticket to SK" },
        { id: 14, amount: "$ BTS Fan Sign" },
        { id: 15, amount: "$ BTS Concert Ticket at Front ROw" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
