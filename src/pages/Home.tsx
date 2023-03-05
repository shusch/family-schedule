import { FC } from 'react';
import { css } from '@emotion/react';

import { Layout } from '@/components/layout/Layout';

export const Home: FC = () => {
  const schedules = [
    {
      id: 1,
      name: 'Schedule A',
      periodFrom: '2023-01-01',
      periodTo: '2023-10-30',
      destination: 'New York',
    },
    {
      id: 2,
      name: 'Schedule B',
      periodFrom: '2023-02-10',
      periodTo: '2023-04-30',
      destination: 'Singapore',
    },
  ];
  return (
    <Layout>
      <h1 css={headingMain}>Family Schedule</h1>
      <div css={scheduleContainer}>
        <h2 css={headingSchedule}>Schedules</h2>
        <ul>
          {schedules.map(schedule => (
            <li css={scheduleItem} key={schedule.id}>
              <h3 css={scheduleName}>{schedule.name}</h3>
              <div css={schedulePeriod}>
                {schedule.periodFrom} &ndash; {schedule.periodTo}
              </div>
              <div>{schedule.destination}</div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

const headingMain = css({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '40px',
  textAlign: 'center',
});

const scheduleContainer = css({
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '32px 20px',
});

const headingSchedule = css({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '14px',
  textAlign: 'center',
});

const scheduleItem = css({
  borderBottom: '1px solid #ddd',
  padding: '18px 16px',

  '&:last-of-type': {
    border: 'none',
    paddingBottom: '0',
  },
});

const scheduleName = css({
  fontSize: '18px',
  fontWeight: 'bold',
  lineHeight: '1.4',
  marginBottom: '14px',
});

const schedulePeriod = css({
  marginBottom: '10px',
});
