import { ourNowToIso } from '@pure/pure-fe-utils';
import { post } from './common';

export const Event = {
  add: async (eventType: string, memberId: string, data: unknown) => {
    await post('/events', {
      eventType,
      eventSource: 'Member',
      eventSourceId: memberId,
      eventAt: ourNowToIso(),
      eventData: data,
    });
  },
};
