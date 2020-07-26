import React from 'react';
import  Feed from '../Feed';
 import { Container, EditButtom, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage   } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar/>
      </Banner>
      <ProfileData>
        <EditButtom outlined >Edit profile</EditButtom>
        <h1>Guilherme Eckert</h1>
        <h2>@guilhermeeckert</h2>
        <p>
          Computer Engineering <a href= "https://www.linkedin.com/in/guilherme-eckert/">@GuilhermeEckert</a>
        </p>
        <ul>
          <li>
            <LocationIcon/>
            Vancouver, Canada
          </li>
          <li>
            <CakeIcon/>
            Born in 6 june 1995
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo<strong> 160 </strong>
          </span>
          <span>
            <strong> 632 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed/>
    </Container>
  )
}

export default ProfilePage;