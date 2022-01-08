import styled from '@emotion/styled';

export const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
`;

export const FriendsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding:10px;
  border: 1px solid #ecd8d8;
`;

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color:  ${stat => {
      return stat.children === true ? '#16af3c' : '#db0d28';
}};
    margin-right: 5px;
`;

export const Image = styled.img`
  
`;

export const FriendName = styled.p`
  margin-left: 5px;
  font-size: 16px;
  font-weight: 700;
`;

