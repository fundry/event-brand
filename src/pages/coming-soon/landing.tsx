import * as React from "react"
import { Body, Title, BgTitle, Text, Button } from "../../styles/style"
import { Link } from "gatsby"
import Flex from "styled-flex-component"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import media from "styled-media-query"

import useWindowWidth from "../../styles/resize"
import { BetaRelease } from "../../data"
import Ipad from "../../assets/svg/ipad.svg"
import Iphone from "../../assets/svg/iphone.svg"
import Features from "../../assets/svg/features.svg"

const Grid = styled.div`
  display: grid;
  grid-gap: 3rem 0rem;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  ${media.lessThan("large")`
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  `};
`

const Input = styled.input`
  width: 35rem;
  padding: 0.5rem 1rem;
  border-radius: 7px;
  outline: 0px;
  border-style: dashed;
  font-size: 1.1rem;
  transition: all 450ms;
  font-weight: 600;
  color: #401364;
  &: hover {
    border: 5px solid #0b33a2;
  }
  ${media.lessThan("medium")`
  width: 27rem;
  `}
  ${media.lessThan("small")`
  width: 23rem;
  `}
}
`

const Landing = () => {
  const [Submit, setSubmit] = React.useState(false)

  const [Loading, setLoading] = React.useState(true)
  const Width = useWindowWidth()
  const [opacity, setOpacity] = React.useState(0)

  // Putting an entire element into a div gives depth err
  // const [FeaturesElement, setFeaturesElement] = React.useState(null);

  // const FeaturesRef = React.useRef(
  //   new IntersectionObserver(
  //     (entries, observer) => {
  //       console.log(observer, "entries")
  //       console.log(entries, "entries")
  //     },
  //     {
  //       threshold: 1,
  //     }
  //   )
  // )

  // TODO : trying to use IntersectionAPI to lazy load the features
  // React.useEffect(
  //   () => {
  //     const Element = FeaturesElement;
  //     const Observed = FeaturesRef.current;

  //     if (Element) {
  //       Observed.observe(Element);
  //     }

  //     return () => {
  //       if (Element) {
  //         Observed.unobserve(Element);
  //       }
  //     };
  //   },
  //   [FeaturesElement]
  // );

  const ItemsWrapper = styled.div`
    opacity: 1;
    transition: opacity 450ms;
  `

  const SubmitData = () => {
    setSubmit(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <div style={{ background: "#401364" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
      </Helmet>
      <div
        style={{
          padding: "0.5rem 1rem",
          borderBottom: "1px solid #fff",
          borderBottomStyle: "dashed",
        }}
      >
        <Text white small center>
          What do you think would be the future of events? <br />
          <a href="/" target="_blank">
            {" "}
            Take a short survey.{" "}
          </a>
        </Text>
      </div>

      <Body style={{ padding: "5rem 1rem" }}>
        <BgTitle white center>
          Oasis For Events
        </BgTitle>
        <Text white center>
          Redefining the regular event experience!
        </Text>
        <br />
        {!Submit ? (
          <Flex justifyCenter>
            <Flex column>
              <Input placeholder="Get Notified" />
              <br />
              <Flex justifyCenter>
                <Button
                  onClick={() => {
                    SubmitData()
                  }}
                  style={{ color: "#fff", textAlign: "center" }}
                >
                  Stay Notified{" "}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ) : (
          <Flex justifyCenter>
            {Loading ? (
              <Text white> Loading ... </Text>
            ) : (
              <Text white small center>
                Inorder to build a User Centered tool, we would like to know
                your thoughts on past events attended. <br /> <br />
                Please{" "}
                <a href="/" target="_blank">
                  take{" "}
                </a>{" "}
                this short survey
              </Text>
            )}
          </Flex>
        )}
        <br />
        <br />
        <Flex justifyCenter>
          {Width >= 800 ? (
            <img
              alt="Visual Explanation"
              src={Ipad}
              style={{ height: "auto", maxWidth: "90%" }}
            />
          ) : (
            <img
              alt="Visual Explanation"
              src={Iphone}
              style={{ height: "auto", maxWidth: "70%" }}
            />
          )}
        </Flex>
        <br />
        <br />{" "}
        <Grid>
          {BetaRelease.map(({ id, title }) => {
            return (
              <ItemsWrapper>
                <Flex justifyCenter>
                  <div key={id} style={{ width: "20rem" }}>
                    <Flex justifyCenter>
                      <img
                        alt={"Feature Illustration"}
                        src={Features}
                        style={{
                          alignItems: "center",
                          height: "auto",
                          width: "10rem",
                        }}
                      />
                    </Flex>
                    <Title bold style={{ color: "white" }} center>
                      {" "}
                      {title}{" "}
                    </Title>{" "}
                  </div>
                </Flex>{" "}
              </ItemsWrapper>
            )
          })}
        </Grid>
        <Link to="/home/home"> . </Link>
      </Body>
    </div>
  )
}

export default Landing
