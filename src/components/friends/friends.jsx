import propTypes from 'prop-types';
import {
    ListOfFriends,
    FriendsItem,
    Status,
    Image,
    FriendName
} from './friends.styled';

export const FriendList = ({ friends }) => {
    return (
        <ListOfFriends>
            {friends.map(({ id, isOnline, avatar, name }) => {
                return (
                    <FriendsItem key={id}>
                        <Status>{isOnline}</Status>
                        <Image src={avatar} alt="User avatar" width="48" />
                        <FriendName>{name}</FriendName>
                    </FriendsItem>
                );
            })}
        </ListOfFriends>
    )
};

FriendList.propTypes = {
    friends: propTypes.array.isRequired,
};
