import propTypes from 'prop-types';
import {
    Card,
    Info,
    Image,
    Username,
    Tag,
    Location,
    Stats,
    StatsItems,
    StatsLabel,
    StatsQuantity
} from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
return (
    <Card>
        <Info>
            <Image
                src={avatar}
                alt="User avatar"
            />
            <Username>{username}</Username>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
        </Info>

        <Stats>
            <StatsItems>
                <StatsLabel>Followers</StatsLabel>
                <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsItems>
            <StatsItems>
                <StatsLabel>Views</StatsLabel>
                <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsItems>
            <StatsItems>
                <StatsLabel>Likes</StatsLabel>
                <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsItems>
        </Stats>
    </Card>
)
   
};

Profile.propTypes = {
    username: propTypes.string.isRequired,
    tag: propTypes.string.isRequired,
    location: propTypes.string.isRequired,
    avatar: propTypes.string.isRequired,
    stats: propTypes.shape({
        followers: propTypes.number.isRequired,
        views: propTypes.number.isRequired,
        likes: propTypes.number.isRequired,
    }),
};