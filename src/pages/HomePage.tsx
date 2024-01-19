import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../css/HomePage.css";

interface Feature {
  title: string;
  description: string;
  thumbnailImageUrl?: string;
  videoIframeHtml?: string;
  thumbnailBgColor: string;
  fontColor: string;
  link: "/";
  navigationButtonLabel?: string;
}

const getLearningPathFeature = (): Feature => {
  return {
    title: "Generate your Custom Learning Path",
    description: `<h2 class='feature-selling-point'>🛤️ Your Own Learning Path</h2><p>Which topics should I cover first? Which order should I cover them in? How can I ensure I don't forget what I've learnt?</p> <p>Your custom learning path resolves these questions, so you can just focus on learning</p><ul><li>🔄 <strong>Built-in Spaced Repetition</strong></li><li>🎯 <strong>Tailored to your weaknesses</strong></li><li>📅 <strong>Set your timeline</strong></li></ul>`,
    // thumbnailImageUrl: 'https://wallpapercave.com/wp/wp3285521.jpg'
    thumbnailBgColor: "#c8a575",
    fontColor: "white",
    link: "/",
    navigationButtonLabel: "Generate Now",
  };
};

const demoOfFeatures: Feature = {
  title: "View Demo",
  description: `<h2 class='feature-selling-point'>🎬 Ace your tech interview</h2><p>We optimise your chances of landing your dream job by helping you master:</p><ul><li>Coming up with optimal solutions to coding problems</li><li>Remembering what you've learnt</li><li>Writing bug-free code under time pressure</li><li>Minimising time spent to be ready for interviews</li><li>Nailing realistic interview conditions</li><li>Optimising your CV so you standout</li></ul> <p><i>and much more </i></p><p><strong>Watch our video demo or select a feature below to learn more</strong></p>`,
  videoIframeHtml: `<div style="display: flex; justify-content: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/qqWzgCxoJII?si=gSMFVuR_Ef573nf4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`,
  thumbnailBgColor: "#64c8cd",
  fontColor: "white",
  link: "/",
};

const features: Feature[] = [
  demoOfFeatures,
  {
    title: "Discover Your Knowledge Gaps",
    description: `<h2 class='feature-selling-point'>⚠️ Don't find out at the interview</h2> <p> Our short assessments quickly identify your knowledge gaps, don't be surprised if it reveals gaps you didn\'t know you had. Use this to help you know what to focus on.</p>`,
    // thumbnailImageUrl: 'https://wallpapercave.com/wp/wp3285521.jpg',
    thumbnailBgColor: "#3498db",
    fontColor: "white",
    link: "/",
    navigationButtonLabel: "Uncover your knowledge gaps",
  },
  getLearningPathFeature(),
  {
    title: "AI-driven Mock interviews",
    description: `<h2 class='feature-selling-point'>Avoid suprises and be truly interview-ready!</h2><p>Practice under <strong>realistic conditions</strong> with our AI-driven mock interviews. Our AI will:</p><ul><li>Simulate the unique challenges & styles of companies</li><li>Simulate various interviewer personalities</li><li>Ask you to explain your code</li><li>Ask coding & non-coding questions too</li><li>Provide feedback on your performance</li><ul> <p><i>and much more </i></p>`,
    // thumbnailImageUrl: 'https://wallpapercave.com/wp/wp3285521.jpg',
    thumbnailBgColor: "#66d6a5",
    fontColor: "white",
    link: "/",
    navigationButtonLabel: "Try a mock interview",
  },
  {
    title: "Expert Tips & Advice",
    description: `<h2 class='feature-selling-point'>🏆 Gain an Edge</h2><p>Explore our blog for non-obvious insightful tips to help you have an edge over the competition. From techniques on writing bug-free code under pressure to preventing a rogue interviewer from ruining your chances, we\'ve got you covered.</p>`,
    // thumbnailImageUrl: 'https://wallpapercave.com/wp/wp3285521.jpg',
    thumbnailBgColor: "#bebab4",
    fontColor: "white",
    link: "/",
    navigationButtonLabel: "Check out our blog",
  },
  {
    title: "Explore our Content Catalogue",
    description: `<h2 class='feature-selling-point'>🎮 Gamified learning</h2><p>We provide gamified challenges on various topics to help you master Algorithms & Data Structures and be interview-ready. More content on the way</p>`,
    // thumbnailImageUrl: 'https://wallpapercave.com/wp/wp3285521.jpg',
    thumbnailBgColor: "#efec54",
    fontColor: "black",
    link: "/",
    navigationButtonLabel: "Explore our growing content catalogue",
  },
  {
    title: "Optimise your CV",
    description: `<h2 class='feature-selling-point'>🚧 Coming Back Soon</h2>With help from both human experts and our custom AI model, we help you optimise your CV so you stand out from the crowd.</p>`,
    // thumbnailImageUrl: 'https://wallpapercave.com/wp/wp3285521.jpg',
    thumbnailBgColor: "#ffd799",
    fontColor: "charcoal",
    link: "/",
    navigationButtonLabel: "Optimise your CV",
  },
  // ... other features
];

interface FeatureDetailProps {
  feature: Feature; // replace Feature with the actual type of your feature
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ feature }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: feature.description }}
      />
      <div
        className="feature-image-container"
        style={{ backgroundColor: "#f8f8f8" }}
      >
        <h1 style={{ textAlign: "center" }}>{feature.title}</h1>

        {/* video takes precedence over an image to illustrate the feature */}
        {feature.videoIframeHtml && (
          <div dangerouslySetInnerHTML={{ __html: feature.videoIframeHtml }} />
        )}

        {/* if no video then show other illustrations */}
        {!feature.videoIframeHtml && (
          <>
            {feature.link && feature.navigationButtonLabel && (
              <Button
                variant="contained"
                color="primary"
                className="navigte-to-feature-button"
                onClick={() => navigate(feature.link!)} // the ! is used to tell TypeScript that feature.link is not null
              >
                {feature.navigationButtonLabel}
              </Button>
            )}

            {/* <img src={feature.thumbnailImageUrl} alt={feature.title} /> */}
          </>
        )}
      </div>
    </>
  );
};

const HomePage: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(
    demoOfFeatures
  );

  useEffect(() => {
    // scroll to top when selectedFeature changes
    window.scrollTo(0, 0);
  }, [selectedFeature]);

  return (
    <>
      <div className="dashboard-container">
        <div className="first-row">
          {selectedFeature ? (
            <FeatureDetail feature={selectedFeature} />
          ) : (
            <div>Select a feature</div>
          )}
        </div>
        <div className="second-row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-div"
              onClick={() => setSelectedFeature(feature)}
              style={{
                backgroundColor: feature.thumbnailBgColor,
                borderColor:
                  feature === selectedFeature ? "black" : "transparent",
                borderWidth: feature === selectedFeature ? "4px" : "0",
                borderStyle: "solid",
              }}
            >
              <p style={{ color: feature.fontColor }}>{feature.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
