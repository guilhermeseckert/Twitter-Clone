import React from 'react';

import { Container, Dot, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Description, ImageContent ,Icons, Status ,CommentIcon, RetweetIcon , LikeIcon  } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/>
        Retweeted
      </Retweeted>
      <Body>
        <Avatar/>
        <Content>
          <Header>
            <strong> Guilherme Eckert</strong>
            <span>@GuilhermeEckert</span>
            <Dot/>
            <time>july 26 </time>
          </Header>
          <Description>
          If you're determined to learn, no one can stop you.
          </Description>

          <ImageContent/>

          <Icons>
            <Status>
              <CommentIcon/>
              192
            </Status>
            <Status>
              <RetweetIcon/>
              12
            </Status>
            <Status>
              <LikeIcon/>
              122
            </Status>
          </Icons>



        </Content>

      </Body>

    </Container>

  )
}

export default Tweet;