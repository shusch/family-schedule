import { rest } from 'msw';

export const handlers = [
  rest.get('/api/v1/schedules', (_req, res, ctx) => {
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
];
