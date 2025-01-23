import "@/styles/globals.css";
import Link from "next/link";
import Head from 'next/head';
import React, { useState } from "react";
import { useEffect } from 'react'
export default function App({ Component, pageProps }) {
  const [colorone, setColorone] = useState('first-column-horizonal first-row-horizonal line');
  const [colortow, setColortow] = useState('first-column-horizonal second-row-horizonal line');
  const [colorthree, setColorthree] = useState('first-column-horizonal third-row-horizonal line');
  const [colorfour, setColorFour] = useState('third-column-horizonal third-row-horizonal line');
  const [colorfive, setColorFive] = useState('second-column-horizonal first-row-horizonal line');
  const [colorsix, setColorSix] = useState('second-column-horizonal second-row-horizonal line');
  const [colorseven, setColorSeven] = useState('second-column-horizonal third-row-horizonal line');
  const [coloreight, setColorEight] = useState('fourth-column-horizonal  first-row-horizonal line');
  const [colornine, setColorNine] = useState('third-column-horizonal first-row-horizonal line');
  const [colorTen, setColorTen] = useState('third-column-horizonal second-row-horizonal line');
  const [coloreleven, setColorEleven] = useState('fourth-column-horizonal second-row-horizonal line');
  const [colortowelve, setColorTowelve] = useState('fourth-column-horizonal third-row-horizonal line');
  const [colorthirteen, setColorThirteen] = useState('first-column-vertical first-row-vertical vertical line');
  const [colorfourteen, setColorFourteen] = useState('second-column-vertical first-row-vertical vertical line');
  const [colorfifeteen, setColorFifeteen] = useState('third-column-vertical first-row-vertical vertical line ');
  const [colorsixteen, setColorSixteen] = useState('first-column-vertical second-row-vertical vertical line');
  const [colorseventeen, setColorSeventeen] = useState('second-column-vertical second-row-vertical vertical line');
  const [coloreighteen, setColorEighteen] = useState('third-column-vertical second-row-vertical vertical line');
  const [colornineteen, setColorNineteen] = useState('first-column-vertical third-row-vertical  vertical line');
  const [colortwenty, setColorTwenty] = useState('second-column-vertical third-row-vertical vertical line');
  const [colortwentyone, setColorTwentyone] = useState('third-column-vertical third-row-vertical vertical line');
  const [colortwentytow, setColorTwentytow] = useState('first-column-vertical fourth-row-vertical vertical line');
  const [colortwentythree, setColorTwentythree] = useState('second-column-vertical fourth-row-vertical line vertical line');
  const [colortwentyfour, setColorTwentyfour] = useState('third-column-vertical fourth-row-vertical vertical line');
  const [turn, setTurn] = useState('blue');
  const [mark, setMarked] = useState('');
  let [redbonus, setRedbonus] = useState(0);
  let [bluebonus, setBluebonus] = useState(0);
  let [firstsquare, setFirstSquare] = useState(0);
  let [secondsquare, setSecondSquare] = useState(0);
  let [thirdsquare, setThirdsquare] = useState(0);
  let [fourthsquare, setFourthsquare] = useState(0);
  let [fifthsquare, setFifthsquare] = useState(0);
  let [sixthsquare, setSixthsquare] = useState(0);
  let [sevenththsquare, setSevenththsquare] = useState(0);
  let [eightthsquare, setEightthsquare] = useState(0);
  let [ninethsquare, setNinethsquare] = useState(0);
  let [allsquare, setAllsquare] = useState(0);
  const [colored, setColored] = useState([{
    id: 0,
    ismarked: "no"
  }, {
    id: 1,
    ismarked: "no"
  },
  {
    id: 2,
    ismarked: "no"
  },
  {
    id: 3,
    ismarked: "no"
  }, {
    id: 4,
    ismarked: "no"
  }, {
    id: 5,
    ismarked: "no"
  },
  {
    id: 6,
    ismarked: "no"
  }, {
    id: 7,
    ismarked: "no"
  }, {
    id: 8,
    ismarked: "no"
  }, {
    id: 9,
    ismarked: "no"
  },
  {
    id: 10,
    ismarked: "no"
  }, {
    id: 11,
    ismarked: "no"
  }, {
    id: 12,
    ismarked: "no"
  }, {
    id: 13,
    ismarked: "no"
  }, {
    id: 14,
    ismarked: "no"
  }, {
    id: 15,
    ismarked: "no"
  }, {
    id: 16,
    ismarked: "no"
  }, {
    id: 17,
    ismarked: "no"
  }, {
    id: 18,
    ismarked: "no"
  }, {
    id: 19,
    ismarked: "no"
  }, {
    id: 20,
    ismarked: "no"
  }, {
    id: 21,
    ismarked: "no"
  }, {
    id: 22,
    ismarked: "no"
  }, {
    id: 23,
    ismarked: "no"
  }
  ]);
  useEffect(() => {
    if (turn === 'blue' && firstsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && firstsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }
  }, [firstsquare]);

 useEffect(() => {
    if (turn === 'blue' && secondsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && secondsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [secondsquare]);

  useEffect(() => {
    if (allsquare === 9 && redbonus > bluebonus) {
      alert('red is winner !')
    }
    else if (allsquare === 9 && redbonus < bluebonus) {
      alert('blue is  winner !')
    }
    else {

    }
  }, [allsquare]);


  useEffect(() => {
    if (turn === 'blue' && thirdsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && thirdsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [thirdsquare]);


  useEffect(() => {
    if (turn === 'blue' && fourthsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && fourthsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [fourthsquare]);



  useEffect(() => {
    if (turn === 'blue' && fifthsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && fifthsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [fifthsquare]);


  useEffect(() => {
    if (turn === 'blue' && sixthsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && sixthsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [sixthsquare]);

  useEffect(() => {
    if (turn === 'blue' && sevenththsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && sevenththsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [sevenththsquare]);

  useEffect(() => {
    if (turn === 'blue' && eightthsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && eightthsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [eightthsquare]);

  useEffect(() => {
    if (turn === 'blue' && ninethsquare === 4) {
      setRedbonus(redbonus + 1)
      setAllsquare(allsquare + 1)
    }
    else if (turn === 'red' && ninethsquare === 4) {
      setBluebonus(bluebonus + 1)
      setAllsquare(allsquare + 1)
    }

  }, [ninethsquare]);

  function changecolorone() {
    if (turn === 'red' && colored[0].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 0) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setColorone('first-column-horizonal first-row-horizonal line redline')
      setTurn('blue')
      setFirstSquare(firstsquare + 1)
    }
    else if (turn === 'blue' && colored[0].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 0) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setColorone('first-column-horizonal first-row-horizonal line blueline')
      setFirstSquare(firstsquare + 1)
      setTurn('red')

      if (firstsquare === 4) {
        setRedbonus(redbonus + 1)
      }
    }

  }
  function changecolortow() {
    if (turn === 'red' && colored[1].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 1) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setColortow('first-column-horizonal second-row-horizonal line  redline')
      setTurn('blue')
      setFourthsquare(fourthsquare + 1)
    }
    else if (turn === 'blue' && colored[1].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 1) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setColortow('first-column-horizonal second-row-horizonal line blueline')
      setTurn('red')
      setFourthsquare(fourthsquare + 1)
    }
  }
  function changecolorthree() {
    if (turn === 'red' && colored[2].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 2) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorthree('first-column-horizonal third-row-horizonal line redline')
      setSevenththsquare(sevenththsquare + 1)
    }
    else if (turn === 'blue' && colored[2].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 2) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorthree('first-column-horizonal third-row-horizonal line blueline')
      setSevenththsquare(sevenththsquare + 1)
    }
  }

  function changecolorfour() {
    if (turn === 'red' && colored[3].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 3) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorFour('third-column-horizonal third-row-horizonal line redline')
      setEightthsquare(eightthsquare + 1)
      setNinethsquare(ninethsquare + 1)
    }
    else if (turn === 'blue' && colored[3].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 3) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorFour('third-column-horizonal third-row-horizonal line  blueline')
      setEightthsquare(eightthsquare + 1)
      setNinethsquare(ninethsquare + 1)
    }

  }

  function changecolorfive() {
    if (turn === 'red' && colored[4].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 4) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setFirstSquare(firstsquare + 1)
      setSecondSquare(secondsquare + 1)
      setColorFive('second-column-horizonal first-row-horizonal line redline')

    }

    else if (turn === 'blue' && colored[4].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 4) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));

      setTurn('red')
      setFirstSquare(firstsquare + 1)
      setSecondSquare(secondsquare + 1)
      setColorFive('second-column-horizonal first-row-horizonal line blueline')
    }
  }
  function changecolorsix() {
    if (turn === 'red' && colored[5].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 5) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));

      setTurn('blue')
      setColorSix('second-column-horizonal second-row-horizonal line redline')
      setFourthsquare(fourthsquare + 1)

    }
    else if (turn === 'blue' && colored[5].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 5) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorSix('second-column-horizonal second-row-horizonal line blueline')
      setFourthsquare(fourthsquare + 1)
      setFifthsquare(fifthsquare + 1)
    }

  }

  function changecolorseven() {
    if (turn === 'red' && colored[6].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 6) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorSeven('second-column-horizonal third-row-horizonal line redline')
      setSevenththsquare(sevenththsquare + 1)
      setEightthsquare(eightthsquare + 1)
    }
    else if (turn === 'blue' && colored[6].ismarked === 'no') {

      setColored(
        colored.map(a => {
          if (a.id === 6) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorSeven('second-column-horizonal third-row-horizonal line blueline')
      setSevenththsquare(sevenththsquare + 1)
      setEightthsquare(eightthsquare + 1)

    } else {

    }

  }

  function changecoloreight() {
    if (turn === 'red' && colored[7].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 7) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorEight('fourth-column-horizonal  first-row-horizonal line redline')
      setThirdsquare(thirdsquare + 1)
    }

    else if (turn === 'blue' && colored[7].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 7) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorEight('fourth-column-horizonal  first-row-horizonal line blueline')
      setThirdsquare(thirdsquare + 1)
    }

  }

  function changecolorNine() {
    if (turn === 'red' && colored[8].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 8) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorNine('third-column-horizonal first-row-horizonal line redline')
      setSecondSquare(secondsquare + 1)
      setThirdsquare(thirdsquare + 1)

    }
    else if (turn === 'blue' && colored[8].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 8) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorNine('third-column-horizonal first-row-horizonal line blueline')
      setSecondSquare(secondsquare + 1)
      setThirdsquare(thirdsquare + 1)

    }

  }

  function changecolorTen() {
    if (turn === 'red' && colored[9].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 9) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTen('third-column-horizonal second-row-horizonal line redline')
      setFifthsquare(fifthsquare + 1)
      setSixthsquare(sixthsquare + 1)
    }
    else if (turn === 'blue' && colored[9].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 9) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTen('third-column-horizonal second-row-horizonal line blueline')
      setFifthsquare(fifthsquare + 1)
      setSixthsquare(sixthsquare + 1)
    }

  }

  function changecoloreleven() {
    if (turn === 'red' && colored[10].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 10) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorEleven('fourth-column-horizonal second-row-horizonal line redline')
      setSixthsquare(sixthsquare + 1)
    }
    else if (turn === 'blue' && colored[10].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 10) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorEleven('fourth-column-horizonal  second-row-horizonal line blueline')
      setSixthsquare(sixthsquare + 1)
    }

  }

  function changecolorTowelve() {
    if (turn === 'red' && colored[11].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 11) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTowelve('fourth-column-horizonal third-row-horizonal line redline')
      setNinethsquare(ninethsquare + 1)
    }
    else if (turn === 'blue' && colored[11].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 10) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTowelve('fourth-column-horizonal third-row-horizonal line blueline')
      setNinethsquare(ninethsquare + 1)
    }

  }

  function changecolorthrteen() {
    if (turn === 'red' && colored[12].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 12) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setFirstSquare(firstsquare + 1)
      setColorThirteen('first-column-vertical first-row-vertical vertical redline')
    }
    else if (turn === 'blue' && colored[12].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 12) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setFirstSquare(firstsquare + 1)
      setColorThirteen('first-column-vertical first-row-vertical vertical line blueline')
    }

  }

  function changecolorfourteen() {
    if (turn === 'red' && colored[13].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 13) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorFourteen('second-column-vertical first-row-vertical vertical line redline')
      setSecondSquare(secondsquare + 1)


    }
    else if (turn === 'blue' && colored[13].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 13) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorFourteen('second-column-vertical first-row-vertical vertical line blueline')
      setSecondSquare(secondsquare + 1)


    }


  }

  function changecolorfifteen() {
    if (turn === 'red' && colored[14].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 14) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorFifeteen('third-column-vertical first-row-vertical vertical redline')
      setThirdsquare(thirdsquare + 1)
    }
    else if (turn === 'blue' && colored[14].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 14) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorFifeteen('third-column-vertical first-row-vertical vertical  line blueline')
      setThirdsquare(thirdsquare + 1)
    }

  }

  function changecolorsixteen() {
    if (turn === 'red' && colored[15].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 15) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setFirstSquare(firstsquare + 1)
      setColorSixteen('first-column-vertical second-row-vertical vertical line redline')
      setFourthsquare(fourthsquare + 1)
    }
    else if (turn === 'blue' && colored[15].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 15) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setFirstSquare(firstsquare + 1)
      setColorSixteen('first-column-vertical second-row-vertical vertical line blueline')
      setFourthsquare(fourthsquare + 1)
    }
  }

  function changecolorseventeen() {
    if (turn === 'red' && colored[16].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 16) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorSeventeen('second-column-vertical second-row-vertical vertical line redline')
      setSecondSquare(secondsquare + 1)
      setFifthsquare(fifthsquare + 1)


    }
    else if (turn === 'blue' && colored[16].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 16) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorSeventeen('second-column-vertical second-row-vertical vertical line blueline')
      setSecondSquare(secondsquare + 1)
      setFifthsquare(fifthsquare + 1)

    }
  }

  function changecoloreighteen() {
    if (turn === 'red' && colored[17].ismarked === 'no') {

      setColored(
        colored.map(a => {
          if (a.id === 17) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorEighteen('third-column-vertical second-row-vertical vertical line redline')
      setThirdsquare(thirdsquare + 1)
      setSixthsquare(sixthsquare + 1)

    }
    else if (turn === 'blue' && colored[17].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 17) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorEighteen('third-column-vertical second-row-vertical vertical line blueline')
      setThirdsquare(thirdsquare + 1)
      setSixthsquare(sixthsquare + 1)

    } else {

    }
  }

  function changecolornineteen() {
    if (turn === 'red' && colored[18].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 18) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorNineteen('first-column-vertical third-row-vertical vertical line redline')
      setFourthsquare(fourthsquare + 1)
      setSevenththsquare(sevenththsquare + 1)
    }
    else if (turn === 'blue' && colored[18].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 18) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorNineteen('first-column-vertical third-row-vertical vertical line blueline')
      setFourthsquare(fourthsquare + 1)
      setSevenththsquare(sevenththsquare + 1)
    } else {

    }
  }
  function changecolortwenty() {
    if (turn === 'red' && colored[19].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 19) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTwenty('second-column-vertical third-row-vertical vertical line redline')
      setFifthsquare(fifthsquare + 1)
      setEightthsquare(eightthsquare + 1)
    }
    else if (turn === 'blue' && colored[19].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 19) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTwenty('second-column-vertical third-row-vertical vertical line blueline')
      setFifthsquare(fifthsquare + 1)
      setEightthsquare(eightthsquare + 1)
    }
  }
  function changecolortwentyone() {
    if (turn === 'red' && colored[20].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 20) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTwentyone('third-column-vertical third-row-vertical line vertical redline')
      setSixthsquare(sixthsquare + 1)
      setNinethsquare(ninethsquare + 1)
    }
    else if (turn === 'blue' && colored[20].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 20) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTwentyone('third-column-vertical third-row-vertical vertical line blueline')
      setSixthsquare(sixthsquare + 1)
      setNinethsquare(ninethsquare + 1)
    }

  }
  function changecolortwentytow() {
    if (turn === 'red' && colored[21].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 21) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTwentytow('first-column-vertical fourth-row-vertical vertical  redline')
      setSevenththsquare(sevenththsquare + 1)

    }
    else if (turn === 'blue' && colored[21].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 21) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTwentytow('first-column-vertical fourth-row-vertical vertical  line blueline')
      setSevenththsquare(sevenththsquare + 1)
    }
  }

  function changecolortwentythree() {
    if (turn === 'red' && colored[22].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 22) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTwentythree('second-column-vertical fourth-row-vertical line vertical redline')
      setEightthsquare(eightthsquare + 1)
    }
    else if (turn === 'blue' && colored[22].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 22) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTwentythree('second-column-vertical fourth-row-vertical vertical line blueline')
      setEightthsquare(eightthsquare + 1)
    }
  }
  function changecolortwentyfour() {
    if (turn === 'red' && colored[23].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 23) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('blue')
      setColorTwentyfour('third-column-vertical fourth-row-vertical line vertical redline')
      setNinethsquare(ninethsquare + 1)
    }
    else if (turn === 'blue' && colored[23].ismarked === 'no') {
      setColored(
        colored.map(a => {
          if (a.id === 23) {
            return { ...a, ismarked: 'yes' };
          }
          else {
            return a;
          }
        }));
      setTurn('red')
      setColorTwentyfour('third-column-vertical fourth-row-vertical vertical line blueline')
      setNinethsquare(ninethsquare + 1)
    }
  }
  useEffect(() => {
  }, []);
  return (<>
    <Head>     <title>
      Game bezan - گیم بزن</title>
    </Head>
    <ul className="parent-all">
      <ul className="child-parent-all">

        <li className={colorone} onClick={changecolorone}>
          1
        </li>

        <li className={colortow} onClick={changecolortow}>
          2
        </li>

        <li className={colorthree} onClick={changecolorthree}>3
        </li>
        <li className={colorfive} onClick={changecolorfive}>5
        </li>
        <li className={colorsix} onClick={changecolorsix}>6
        </li>

        <li className={colorseven} onClick={changecolorseven}>
        </li>

        <li className={colornine} onClick={changecolorNine}>   9
        </li>

        <li className={colorTen} onClick={changecolorTen}>10
        </li>

        <li className={colorfour} onClick={changecolorfour}>4
        </li>
        <li className={coloreight} onClick={changecoloreight}>8

        </li>
        <li className={coloreleven} onClick={changecoloreleven}>11
        </li>
        <li className={colortowelve} onClick={changecolorTowelve}>12

        </li>
        <li className={colorthirteen} onClick={changecolorthrteen}>13
        </li>

        <li className={colorfourteen} onClick={changecolorfourteen}>14
        </li>

        <li className={colorfifeteen} onClick={changecolorfifteen}>
          15
        </li>
        <li className={colorsixteen} onClick={changecolorsixteen}>
          16
        </li>

        <li className={colorseventeen} onClick={changecolorseventeen}>
          17
        </li>

        <li className={coloreighteen} onClick={changecoloreighteen}>
          18
        </li>

        <li className={colornineteen} onClick={changecolornineteen}>
          19
        </li>

        <li className={colortwenty} onClick={changecolortwenty}>
          20
        </li>

        <li className={colortwentyone} onClick={changecolortwentyone}>
          21
        </li>

        <li className={colortwentytow} onClick={changecolortwentytow}>
          22
        </li>
        <li className={colortwentythree} onClick={changecolortwentythree}>
          23
        </li>

        <li className={colortwentyfour} onClick={changecolortwentyfour}>
          24
        </li>
      </ul>

    </ul>

    <p className="whose-turn">
      It is {turn},s turn
    </p>
    <p className="whose-turn bonus">
      قرمز :{redbonus}آبی :{bluebonus}<br>
      </br>
    </p>
  </>

  );
}
