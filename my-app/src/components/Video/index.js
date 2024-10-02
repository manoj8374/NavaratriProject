import React from 'react';
import styled from 'styled-components';
// import video from '../../../public/video.mp4';

const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <VideoBackground autoPlay loop muted>
        <source src = "videoNavaratri.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <ContentOverlay>
        <h1>Welcome to the Navaratri Celebrations!</h1>
        <p>Immerse yourself in the vibrant festivities and explore our special offerings for this sacred festival.</p>
      </ContentOverlay>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; // Places the video behind the text
`;

const ContentOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default BackgroundVideo;
