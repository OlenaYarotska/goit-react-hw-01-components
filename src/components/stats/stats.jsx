import {
    SectionStats,
    SectionTitle,
    StatList,
    StatItems,
    StatsLabel,
    Percentage
} from './Stats.styled';
import propTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <SectionStats>
           {title ? <SectionTitle>{title}</SectionTitle> : ''}
            <StatList>
                {stats.map(({ label, percentage, id }) => {
                    return (
                        <StatItems key={id}>
                            <StatsLabel>{label}</StatsLabel>
                            <Percentage>{percentage}%</Percentage>
                        </StatItems>
                    );
                }
                )}
            </StatList>
        </SectionStats>
    )
};
Statistics.propTypes = {
    title: propTypes.string.isRequired,
    stats: propTypes.array.isRequired,
};