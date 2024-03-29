import {
  ElementStatistics,
  ListStatistics,
  SectionStatistics,
  SpanInfo,
  SpanType,
  TitleStatistics,
} from './Statistics.styled';

export const CardStatistics = ({ data, title }) => {
  return (
    <SectionStatistics>
      {title && <TitleStatistics>{title}</TitleStatistics>}
      <ListStatistics>
        {data.map(e => (
          <ElementStatistics key={e.id}>
            <SpanType>{e.label}:</SpanType>
            <SpanInfo>{e.percentage}%</SpanInfo>
          </ElementStatistics>
        ))}
      </ListStatistics>
    </SectionStatistics>
  );
};
