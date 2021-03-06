import React from "react"
import Flex from "styled-flex-component"
import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

import { BgTitle, Title, Text, Body, BlogCards } from "../../styles/style"
import { BlogPosts } from "../../data"

const Grid = styled.div`
  display: grid;
  grid-gap: 5rem;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  ${media.lessThan("medium")`
justify-content: center;
`} ${media.lessThan("small")`
justify-content: center;`};
`

const CenterBlog = styled.div`
  ${media.lessThan("medium")`
    display: flex;
justify-content: center;
`} ${media.lessThan("small")`
display: flex;
justify-content: center;`};
`

const BlogOverview = () => {
  return (
    <Body padded>
      <Flex justifyBetween>
        <BgTitle support bold>
          {" "}
          Deep Dive{" "}
        </BgTitle>

        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Text bold white>
            {" "}
            Read More Experiences{" "}
          </Text>
        </Link>
      </Flex>

      <Text white center padded>
        Read experiences of how event organizers created and leveraged Oasis for
        their events and also see tips on how to create yours
      </Text>

      <br />

      <Grid>
        {BlogPosts.map(({ id, title, text }) => {
          return (
            <CenterBlog>
              <BlogCards key={id}>
                <img alt={"Event Cover"} />

                <div>
                  <Title bold center style={{ padding: "0rem 0.5rem" }}>
                    {title}
                  </Title>
                  <Text
                    small
                    white
                    style={{ color: "grey", padding: "0.7rem 0rem" }}
                    center
                  >
                    {text}
                  </Text>
                </div>
                <hr />
                <Flex justifyBetween>
                  <Flex>
                    <img alt={"User"} />
                    <Text white style={{ padding: "0rem 0.7rem" }}>
                      Nwani Victory
                    </Text>
                  </Flex>

                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Text white small bold>
                      {" "}
                      Read More{" "}
                    </Text>
                  </Link>
                </Flex>
              </BlogCards>
            </CenterBlog>
          )
        })}
      </Grid>
    </Body>
  )
}
export default BlogOverview
