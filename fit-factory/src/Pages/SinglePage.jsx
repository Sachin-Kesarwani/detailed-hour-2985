import { Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import SingleCard from "../Components/SingleCard";
const SinglePage = () => {
  let params = useParams();
  let { id, title } = params;
  let [data, setdata] = useState([]);
  console.log(params);

  function Getdata() {
    axios.get(`https://cyan-tough-kitten.cyclic.app/${title}`).then((res) => {
      let arr = res.data.filter((e) => e.Position === Number(id));
      setdata(arr);
    });
  }
  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div>
      {data?.map((e) => {
        return <SingleCard item={e} />;
      })}
    </div>
  );
};

export default SinglePage;
