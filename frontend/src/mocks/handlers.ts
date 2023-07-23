import { rest } from 'msw';

export const handlers = [
  // list schedules
  rest.get('/api/schedules', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
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
          periodTo: '2023-04-20',
          destination: 'Singapore',
        },
      ])
    );
  }),

  // add schedule
  rest.post('/api/schedules', async (req, res, ctx) => {
    const body = await req.json();
    if (body === null || typeof body !== 'object') {
      return res(
        ctx.status(400),
        ctx.json({
          errors: {
            message: 'Invalid parameters',
          },
        })
      );
    }
    const props = ['name', 'periodFrom', 'periodTo', 'destination'];
    const passed = props.every(value => {
      return value in body;
    });
    if (passed) {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
        })
      );
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          errors: {
            message: 'Invalid parameters',
          },
        })
      );
    }
  }),

  // get schedule item
  rest.get('/api/schedules/:scheduleId', (req, res, ctx) => {
    const { scheduleId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id: scheduleId,
        name: 'Another Schedule',
        periodFrom: '2023-07-12',
        periodTo: '2023-07-15',
        destination: 'Tokyo',
        information: [
          {
            id: 1,
            informationType: 'reference',
            key: 'https://google.com',
            value: 'Sample text description',
          },
          {
            id: 2,
            informationType: 'reference',
            key: 'https://www.yahoo.co.jp/',
            value: 'Sample link 2',
          },
          {
            id: 3,
            informationType: 'todo',
            key: 'This is TODO text',
            value: 0,
          },
          {
            id: 4,
            informationType: 'todo',
            key: 'Sample TODO text 2',
            value: 1,
          },
          {
            id: 5,
            informationType: 'note',
            key: null,
            value: 'This is dummy text.\\nText text. dummy, dummy, dummy text.',
          },
        ],
      })
    );
  }),

  // edit schedule
  rest.patch('/api/schedules/:scheduleId', async (req, res, ctx) => {
    const { scheduleId } = req.params;
    const body = (await req.json()) as any;
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        dummy: {
          id: scheduleId,
          name: body.name,
          periodFrom: body.periodFrom,
          periodTo: body.periodTo,
          destination: body.destination,
        },
      })
    );
  }),

  // delete schedule
  rest.delete('/api/schedules/:scheduleId', async (_req, res, ctx) => {
    return res(
      ctx.status(204),
      ctx.json({
        success: true,
      })
    );
  }),

  // list events
  rest.get('/api/schedules/:scheduleId/events', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: 'Event 1',
          timeFrom: '2023-07-12T11:00:00.000+09:00',
          timeTo: '2023-07-12T12:15:10.000+09:00',
        },
        {
          id: 2,
          title: 'Event 2',
          timeFrom: '2023-07-12T11:20:00.000+09:00',
          timeTo: '2023-07-12T11:30:10.000+09:00',
        },
        {
          id: 3,
          title: 'Event 3',
          timeFrom: '2023-07-12T23:40:00.000+09:00',
          timeTo: '2023-07-13T00:39:30.000+09:00',
        },
      ])
    );
  }),

  // add event
  rest.post('/api/schedules/:scheduleId/events', (req, res, ctx) => {
    const body = req.json() as any;
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        dummy: {
          id: 10,
          title: body.title,
          timeFrom: body.timeFrom,
          timeTo: body.timeTo,
        },
      })
    );
  }),

  // get event item
  rest.get('/api/schedules/:scheduleId/events/:eventId', (req, res, ctx) => {
    const { eventId } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        id: eventId,
        title: 'Another Event',
        timeFrom: '2023-07-12T23:40:00.000+09:00',
        timeTo: '2023-07-13T00:39:30.000+09:00',
        information: [
          {
            id: 1,
            informationType: 'reference',
            key: 'https://google.com',
            value: 'Sample text description',
          },
          {
            id: 2,
            informationType: 'reference',
            key: 'https://www.yahoo.co.jp/',
            value: 'Sample link 2',
          },
          {
            id: 3,
            informationType: 'todo',
            key: 'This is TODO text',
            value: 0,
          },
          {
            id: 4,
            informationType: 'todo',
            key: 'Sample TODO text 2',
            value: 1,
          },
          {
            id: 5,
            informationType: 'note',
            key: null,
            value: 'This is dummy text.\\nText text. dummy, dummy, dummy text.',
          },
        ],
      })
    );
  }),

  // edit event
  rest.patch('/api/schedules/:scheduleId/events/:eventId', (req, res, ctx) => {
    const { eventId } = req.params;
    const body = req.json() as any;
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        dummy: {
          id: eventId,
          title: body.title,
          timeFrom: body.timeFrom,
          timeTo: body.timeTo,
        },
      })
    );
  }),

  // delete event
  rest.delete('/api/schedules/:scheduleId/events/:eventId', (_req, res, ctx) => {
    return res(
      ctx.status(204),
      ctx.json({
        success: true,
      })
    );
  }),
];
