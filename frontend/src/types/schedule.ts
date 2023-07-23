export type Schedule = {
  id: number;
  name: string;
  periodFrom: string;
  periodTo: string;
  destination: string;
};

export type Event = {
  id: number;
  title: string;
  timeFrom: string;
  timeTo: string;
};

export type ScheduleInformation = {
  information: Array<{
    id: number;
    informationType: 'reference' | 'todo' | 'note';
    key: string;
    value: string;
  }>;
};
