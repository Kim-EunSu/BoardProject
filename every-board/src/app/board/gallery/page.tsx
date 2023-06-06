"use client";

import styled from "styled-components";
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const PhotoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  width: 330px;
  height: 250px;
  overflow: hidden;

  img {
    border-radius: 10px;
    background-color: #eee;
    width: 330px;
    height: 250px;
  }

  @media (min-width: 768px) {
    width: 715px;
    height: 150px;
    gap: 10px;
    img {
      width: 171.25px;
      height: 150px;
    }
  }

  @media (min-width: 1080px) {
    width: 1000px;
    /* height: 180px; */
    height: auto;
    img {
      width: 242.5px;
      height: 180px;
    }
  }

  @media (min-width: 1440px) {
    width: 1330px;
    height: 220px;
    gap: 20px;
    img {
      width: 317.5px;
      height: 220px;
    }
  }
`;

const Gallery = () => {
  const photo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Section>
      <PhotoWrap>
        {photo.map((el, index) => {
          return (
            <div key={index}>
              <img></img>
            </div>
          );
        })}
      </PhotoWrap>
    </Section>
  );
};

export default Gallery;
