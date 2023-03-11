import { FC } from 'react';
import { css } from '@emotion/react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { Layout } from '@/components/layout/Layout';

export const Schedule: FC = () => {
  const scheduleRes = {
    id: 1,
    name: 'New York Travel',
    periodFrom: '2023-01-01',
    periodTo: '2023-10-30',
    destination: 'New York',
    schedules: [
      {
        date: '2023-03-01',
        timetable: [
          {
            id: 1,
            title: 'title 01',
            timeFrom: '9:00',
            timeTo: '9:30',
          },
          {
            id: 2,
            title: 'title 02',
            timeFrom: '9:10',
            timeTo: '9:20',
          },
          {
            id: 3,
            title: 'title 03',
            timeFrom: '10:00',
            timeTo: '12:30',
          },
        ],
      },
      {
        date: '2023-03-02',
        timetable: [
          {
            id: 11,
            title: 'title 11',
            timeFrom: '14:00',
            timeTo: '14:30',
          },
          {
            id: 12,
            title: 'title 12',
            timeFrom: '15:10',
            timeTo: '16:20',
          },
          {
            id: 13,
            title: 'title 13',
            timeFrom: '18:40',
            timeTo: '20:30',
          },
        ],
      },
    ],
  };

  return (
    <Layout>
      <h1 css={headingMain}>{scheduleRes.name}</h1>
      <div css={aboutContainer}>
        <div css={aboutItem}>
          <CalendarMonthIcon css={iconLeft} />
          {scheduleRes.periodFrom} &ndash; {scheduleRes.periodTo}
        </div>
        <div css={aboutItem}>
          <LocationOnIcon css={iconLeft} />
          {scheduleRes.destination}
        </div>
      </div>

      <ul css={scheduleContainer}>
        {scheduleRes.schedules.map(data => {
          return (
            <li key={data.date} css={schedule1Day}>
              <h3 css={scheduleDate}>{data.date}</h3>
              <dl css={scheduleTimetable}>
                {data.timetable.map(item => (
                  <>
                    <dt key={item.id}>
                      {item.timeFrom} &ndash; {item.timeTo}
                    </dt>
                    <dd>{item.title}</dd>
                  </>
                ))}
              </dl>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

const headingMain = css({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '30px',
  textAlign: 'center',
});

const aboutContainer = css({
  marginBottom: '24px',
});
const aboutItem = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '8px',
});

const iconLeft = css({
  height: '.9em',
  marginRight: '8px',
});

const scheduleContainer = css({
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '30px',
});

const schedule1Day = css({
  marginTop: '20px',

  '&:first-of-type': {
    marginTop: '0',
  },
});

const scheduleDate = css({
  fontWeight: 'bold',
  marginBottom: '5px',
});

const scheduleTimetable = css({
  display: 'flex',
  flexFlow: 'row wrap',
  lineHeight: '1.4',
  paddingLeft: '1em',

  '& dt, & dd': {
    marginTop: '8px',
  },
  '& dt': {
    width: '140px',
  },
  '& dd': {
    marginLeft: '10px',
    width: 'calc(100% - 140px - 10px)',
  },
});
