import { Box, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import SingleCard from "../Components/SingleCard";
import SlideShow from "../Slideshow/SlideShow";
import "./home.css";
const SinglePage = () => {
  let params = useParams();
  let { id, title } = params;
  let [data, setdata] = useState([]);
  let [suggestion, setSuggetion] = useState([]);
  let [loading, setLoading] = useState(false);
  console.log(params);

  function Getdata() {
    let url;
    if (
      title == "flashsale" ||
      title == "topDeals" ||
      title == "fitfoods" ||
      title == "wellness&personel" ||
      title == "workoutEssential"
    ) {
      url = `https://cyan-tough-kitten.cyclic.app/`;
    } else {
      url = `https://helpful-free-baroness.glitch.me/`;
    }
    axios.get(`${url}${title}`).then((res) => {
      setSuggetion(res.data);
      let arr = res.data.filter((e) => e.Position === Number(id));
      setdata(arr);
    });
  }
  useEffect(() => {
    Getdata();
  }, [id]);
  useEffect(() => {
    Getdata();
  }, []);
  return loading ? (
    <Heading>Loading ...</Heading>
  ) : (
    <div>
      {data?.map((e) => {
        return <SingleCard item={e} />;
      })}

      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "40px",
          marginBottom: "10px",
        }}
      ></hr>

      <Heading textAlign={"center"} fontSize="xl">
        Supplemnet Info
      </Heading>
      <hr style={{ border: "3px solid #c2c2d6", marginTop: "10px" }}></hr>
      <div id="supplement" style={{ height: "60vh", overflow: "scroll" }}>
        <img src="https://hkprod.s3.amazonaws.com/21232/bnr_2123154_o.jpg" />
      </div>
      <Heading>Similar Product</Heading>
      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      ></hr>
      <SlideShow noofslidocard={4} category={title} data={suggestion} />
      <hr
        style={{
          border: "1px solid #c2c2d6",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      ></hr>
    </div>
  );
};

export default SinglePage;
