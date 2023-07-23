import { FC, Fragment, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';

import { Layout } from '@/components/layout/Layout';
import { api } from '@/utils/api';
import type { Schedule as ScheduleType, ScheduleInformation, Event } from '@/types/schedule';

export const Schedule: FC = () => {
  const { scheduleId } = useParams();
  const { t } = useTranslation();

  const [schedule, setSchedule] = useState<ScheduleType & ScheduleInformation>();
  const [events, setEvents] = useState<{
    [key: string]: Event[];
  }>({});

  useEffect(() => {
    api
      .get(`/api/schedules/${scheduleId}`)
      .then(data => {
        setSchedule(data);
      })
      .catch(err => {
        console.warn(err);
      });

    api
      .get(`/api/schedules/${scheduleId}/events`)
      .then(data => {
        setEvents(data);
      })
      .catch(err => {
        console.warn(err);
      });
  }, []);

  const transformTime = (iso8601: string) => {
    const ts = Date.parse(iso8601);
    const date = new Date(ts);
    return `${date.getHours().toString().padStart(2, '0')}:${date
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <Layout>
      {schedule && (
        <>
          <h1 css={headingMain}>{schedule.name}</h1>
          <div css={aboutContainer}>
            <div css={aboutItem}>
              <CalendarMonthIcon css={iconLeft} />
              {schedule.periodFrom} &ndash; {schedule.periodTo}
            </div>
            <div css={aboutItem}>
              <LocationOnIcon css={iconLeft} />
              {schedule.destination}
            </div>
            <div css={[aboutItem, aboutItemButton]}>
              <Button variant='contained'>{t('information')}</Button>
            </div>
          </div>

          <ul css={scheduleContainer}>
            {Object.keys(events)
              .sort()
              .map(eventDate => {
                return (
                  <li key={eventDate} css={schedule1Day}>
                    <h3 css={scheduleDate}>{eventDate}</h3>
                    <dl css={scheduleTimetable}>
                      {events[eventDate].map(item => (
                        <Fragment key={item.id}>
                          <dt>
                            {transformTime(item.timeFrom)} &ndash; {transformTime(item.timeTo)}
                          </dt>
                          <dd>{item.title}</dd>
                        </Fragment>
                      ))}
                    </dl>
                  </li>
                );
              })}
          </ul>
        </>
      )}
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
  marginBottom: '12px',
});
const aboutItemButton = css({
  marginTop: '20px',
});

const iconLeft = css({
  height: '.9em',
  marginRight: '8px',
});

const scheduleContainer = css({
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '30px 20px',
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
