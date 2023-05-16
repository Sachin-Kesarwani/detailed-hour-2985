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
      let arr = res.data.filter((e) => e.Position === Number(id)||e.id==Number(id));
      setdata(arr);
    });
  }

  useEffect(() => {
    Getdata();
  }, [id]);

  useEffect(() => {
    Getdata();
  }, []);

  console.log(id, title);

  return loading ? (
    <Heading>Loading ...</Heading>
  ) : (
    <div style={{ alignContent: "center" }}>
      {data?.map((e) => {
        return <SingleCard item={e} />;
      })}

      <hr
        style={{
          border: "3px solid #c2c2d6",
         
          marginBottom: "10px",
        }}
      ></hr>

      <Heading textAlign={"center"} fontSize="xl">
        Supplement Info
      </Heading>
      <hr style={{ border: "3px solid #c2c2d6", marginTop: "10px" }}></hr>
      <div id="supplement" style={{ height: "60vh", overflow: "scroll" }}>
        <img
          alt=""
          src="https://hkprod.s3.amazonaws.com/21232/bnr_2123154_o.jpg"
        />
      </div>
     
      <Text mx={5} w={"70%"} textAlign={"justify"}>
       
       Supplement products play a significant role in supporting our health and well-being. These products are designed to provide additional nutrients, vitamins, minerals, or herbal extracts that may be lacking in our regular diet. They complement our nutritional intake and help bridge the gap between what we consume and what our bodies need.
 
 Supplement products come in various forms such as capsules, tablets, powders, or liquids, catering to different preferences and needs. They can target specific areas of health, such as immune support, joint health, cognitive function, or energy levels. Some supplements are also tailored to meet the unique needs of different age groups, such as children, adults, or seniors.
       </Text>
         
    
      <Text mx={5} w={"70%"} textAlign={"justify"}>
      One of the key advantages of supplement products is their convenience. They offer a convenient and accessible way to incorporate essential nutrients into our daily routine. Moreover, supplements are often formulated with specific dosages and standardized ingredients, ensuring consistent and reliable nutrient intake.

It's important to note that supplement products should not replace a balanced diet and healthy lifestyle. They are intended to complement and enhance our overall wellness efforts. Consulting with healthcare professionals, such as doctors or registered dietitians, can provide guidance on the appropriate supplements for specific health goals and any potential interactions with existing medications.
      </Text>
      {/* <Heading>Similar Product</Heading>
      <hr
        style={{
          border: "3px solid #c2c2d6",
          marginTop: "20px",
          marginBottom: "10px",
        }}
      ></hr> */}
      {/* <SlideShow noofslidocard={4} category={title} data={suggestion} />
      <hr
        style={{
          border: "1px solid #c2c2d6",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      ></hr> */}
    </div>
  );
};

export default SinglePage;
