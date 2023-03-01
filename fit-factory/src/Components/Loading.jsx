import { Skeleton, Box, Grid, GridItem } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

export default function Loadingindicator() {
  let [SkeletonWth, setskeletonwth] = useState(25);
  let [SkeletonHth, setskeletonhth] = useState(30);
  let arr = new Array();
  for (let i = 0; i < 6; i++) {
    arr[i] = i;
  }

  let [col, setCol] = useState(1);
  function width() {
    let w = window.innerWidth;
    console.log(w);
    if (w > 860) {
      setCol(3);
      setskeletonhth(30);
      setskeletonwth(25);
    } else if (w > 500 && w < 859) {
      setCol(2);
      setskeletonhth(30);
      setskeletonwth(35);
    } else {
      setCol(1);
      setskeletonhth(80);
      setskeletonwth(70);
    }
  }

  useEffect(() => {
    width();
  });
  return (
    <>
      <Grid
        style={{
          margin: "auto",
          display: "grid",
          width: "80%",
          gridTemplateColumns: `repeat(${col},1fr)`,
        }}
      >
        {arr.map((e, i) => {
          return (
            <Skeleton
              key={i}
              borderRadius={8}
              marginTop={5}
              w={`${SkeletonWth}vw`}
              h={`${SkeletonHth}vw`}
            />
          );
        })}
      </Grid>
    </>
  );
}

// templateColumns= {{
//     sm: '1fr',
//     md: 'repeat(2,1fr)',
//     lg: 'repeat(3,1fr)',
//     xl: 'repeat(3,1fr)',
//     '2xl': 'repeat(4,1fr)',
//   }}
